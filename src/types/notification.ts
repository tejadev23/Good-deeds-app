export type NotificationType = "like" | "comment" | "follow" | "community" | "milestone";

export interface AppNotification {
  id: string;
  recipientId: string;
  actorId?: string;
  type: NotificationType;
  deedId?: string;
  activityId?: string;
  message?: string;
  createdAt: string;
  read: boolean;
}
