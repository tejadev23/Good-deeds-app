import type { AppNotification, Comment, CommunityActivity, Deed, Follow, User } from "@/types";

/** Shape of the browser-side mock database persisted to localStorage. */
export interface MockDatabase {
  version: number;
  seededAt: string;
  users: User[];
  deeds: Deed[];
  comments: Comment[];
  follows: Follow[];
  notifications: AppNotification[];
  activities: CommunityActivity[];
  saves: Record<string, string[]>;
}
