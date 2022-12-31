export interface Jam {
  id?: string;
  title?: string;
  artist?: string;
  releaseYear?: string;
  date: Date | string;
  image: {
    src?: string;
    alt?: string;
    caption?: string
  };
  youtubeLink?: string;
  bandcampLink?: string;
  bonusLink?: string;
  moresongs?: {
    title?: string;
    artist?: string;
    link?: string;
    description?: string;
    year?: string;
  }[];
  commentImage?: {
    src: string;
    alt: string;
    caption: string;
  };
  // TODO: deprecate tweet
  tweet: any;
  tweetImage: {
    src: string;
    alt: string;
    caption: string;
  };
  weather: string;
  headline: string;
  publishDate?: string;
  yearPosted?: number;
}