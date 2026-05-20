import { Groups } from "./groups.enum";

export interface Release {
  title: string;
  artist: Groups;
  year: number;
  date?: string; // ISO 8601, e.g. "2025-03-07"
  image: string;
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

