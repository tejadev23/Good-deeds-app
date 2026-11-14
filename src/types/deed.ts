import type { DeedCategory } from "./category";

export interface Deed {
  id: string;
  authorId: string;
  title: string;
  description: string;
  category: DeedCategory;
  images: string[];
  location?: string;
  /** Day the good deed happened (ISO date). */
  activityDate: string;
  /** When the post was published (ISO datetime). */
  createdAt: string;
  /** Profiles in this app that liked the deed. */
  likedBy: string[];
  /** Likes from the wider community not represented as profiles in the demo. */
  communityLikes: number;
}

export interface Comment {
  id: string;
  deedId: string;
  authorId: string;
  text: string;
  createdAt: string;
}

export interface NewDeedInput {
  title: string;
  description: string;
  category: DeedCategory;
  images: string[];
  activityDate: string;
  location?: string;
}

export interface FeedQuery {
  category?: DeedCategory | "all";
  search?: string;
  authorId?: string;
  scope?: "all" | "following";
}
