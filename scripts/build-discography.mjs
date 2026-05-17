/**
 * Reads the two Discogs JSON dumps in domain/static-data/ and writes
 * domain/static-data/discography.ts directly.
 *
 * Usage:
 *   node scripts/build-discography.mjs
 */

import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const staticData = `${root}/domain/static-data`;

const sources = [
  { file: `${staticData}/nick-harris-discogs.json`, creditedAs: "Nick Harris" },
  { file: `${staticData}/ricky-discogs.json`, creditedAs: "Ricky Mirage" },
];

const buildDiscogsUrl = (id, artist, title) => {
  const slug = `${id}-${artist.replaceAll(" ", "-")}-${title.replaceAll(" ", "-").replaceAll("'", "")}`;
  return `https://www.discogs.com/release/${slug}`;
};

const formatReleases = (raw) =>
  raw.map(({ id, title, artist, year, thumb, format, label, role }) => {
    const optional = [
      format ? `      format: ${JSON.stringify(format)},` : null,
      label ? `      label: ${JSON.stringify(label)},` : null,
      role ? `      role: ${JSON.stringify(role)},` : null,
    ]
      .filter(Boolean)
      .join("\n");

    return [
      "    {",
      `      title: ${JSON.stringify(title)},`,
      `      artist: ${JSON.stringify(artist)},`,
      `      year: ${year},`,
      `      coverUrl: ${JSON.stringify(thumb ?? "")},`,
      `      discogsUrl: ${JSON.stringify(buildDiscogsUrl(id, artist, title))},`,
      optional,
      "    }",
    ]
      .filter((l) => l !== "")
      .join("\n");
  });

const artistBlocks = sources.map(({ file, creditedAs }) => {
  const raw = JSON.parse(readFileSync(file, "utf-8"));
  const releases = formatReleases(raw);
  return [
    "  {",
    `    creditedAs: ${JSON.stringify(creditedAs)},`,
    "    releases: [",
    releases.join(",\n"),
    "    ]",
    "  }",
  ].join("\n");
});

const output = [
  `import { ArtistDiscography } from '../types/release.interface';`,
  "",
  "export const discography: ArtistDiscography[] = [",
  artistBlocks.join(",\n"),
  "];",
  "",
].join("\n");

const outPath = `${staticData}/discography.ts`;
writeFileSync(outPath, output, "utf-8");
console.log(`Written to ${outPath}`);
