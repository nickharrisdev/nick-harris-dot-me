export interface Release {
  title: string;
  artist: string;
  year: number;
  coverUrl: string;
  format?: string;
  label?: string;
  role?: string;
  links?: {
    bandcamp?: string;
    spotify?: string;
    appleMusic?: string;
  };
}

export interface ArtistDiscography {
  creditedAs: string;
  releases: Release[];
}