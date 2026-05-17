import { Groups } from "./groups.enum";

export interface Release {
  title: string;
  artist: Groups;
  year: number;
  coverUrl: string;
  format?: string;
  label?: string;
  role?: string;
  links?: {
    bandcamp?: string;
    spotify?: string;
    appleMusic?: string;
    download?: string;
  };
}

export interface ArtistDiscography {
  creditedAs: string;
  releases: Release[];
}