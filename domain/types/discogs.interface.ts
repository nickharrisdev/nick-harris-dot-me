export interface DiscogsRelease {
  artist: string,
  format?: string,
  id: number,
  label?: string,
  resource_url: string,
  role?: string,
  stats?: { community: { in_wantlist: number, in_collections: number } },
  status?: string,
  thumb?: string,
  title?: string,
  type?: string,
  year?: number,
}
export interface DiscogsArtistDetails {
  aliases?: { id: number, name: string, resource_url: string }[]
  data_quality?: string,
  id: number,
  images?: { height: number, resource_url: string, type: string, url: string, uri150: string, width: number }[],
  name: string,
  profile?: string,
  realname?: string,
  releases_url?: string,
  resource_url?: string,
  uri?: string,
}
export interface DiscogsReleasesResponse {
  pagination?: {}
  releases?: DiscogsRelease[];
}