import { ROUTES } from "@/config/routes";
import type { AppNotification, Deed, User } from "@/types";

export interface NotificationView {
  lead: string;
  body: string;
  quote?: string;
  href: string;
}

/** Turns a notification into display copy and a destination link. */
export function describeNotification(n: AppNotification, actor: User | undefined, deed: Deed | undefined): NotificationView {
  const lead = actor?.name ?? "Good Deeds";
  const deedTitle = deed ? `“${deed.title}”` : "your deed";
  const deedHref = deed ? ROUTES.deed(deed.id) : ROUTES.feed;

  switch (n.type) {
    case "like":
      return { lead, body: `appreciated ${deedTitle}`, href: deedHref };
    case "comment":
      return { lead, body: `commented on ${deedTitle}`, quote: n.message, href: deed ? `${deedHref}#comments` : ROUTES.feed };
    case "follow":
      return { lead, body: "started following you", href: actor ? ROUTES.profile(actor.username) : ROUTES.discover };
    case "community":
      return { lead, body: n.message ?? "shared a community activity", href: ROUTES.discover };
    case "milestone":
      return { lead: "Milestone", body: n.message ?? "One of your deeds is inspiring people", href: deedHref };
  }
}

export function notificationGroup(createdAt: string): "Today" | "This week" | "Earlier" {
  const age = Date.now() - new Date(createdAt).getTime();
  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);
  if (new Date(createdAt) >= startOfToday) return "Today";
  if (age < 7 * 24 * 60 * 60 * 1000) return "This week";
  return "Earlier";
}
