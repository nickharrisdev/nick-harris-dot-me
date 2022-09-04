export interface Show {
  venue: string;
  group: string;
  date: Date;
  time?: string;
  link?: string;
  city?: string;
  description?: string;
  notes?: ShowNotes
  id?: string;
  images?: {
    src?: string;
    alt?: string;
    caption?: string
  }[];
}

interface ShowNotes {
  emoji?: string;
}