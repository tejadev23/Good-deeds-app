import type { ComponentType } from "react";
import { AddCircleLinear, BellLinear, BookmarkLinear, CompassLinear, HomeSmileLinear, UserRoundedLinear } from "solar-icon-set";
import type { SolarIconProps } from "solar-icon-set";

import { ROUTES } from "@/config/routes";

export interface NavItem {
  key: "feed" | "discover" | "create" | "notifications" | "saved" | "profile";
  label: string;
  href: (username: string) => string;
  icon: ComponentType<SolarIconProps>;
}

export const NAV_ITEMS: NavItem[] = [
  { key: "feed", label: "Feed", href: () => ROUTES.feed, icon: HomeSmileLinear },
  { key: "discover", label: "Discover", href: () => ROUTES.discover, icon: CompassLinear },
  { key: "create", label: "Share a deed", href: () => ROUTES.create, icon: AddCircleLinear },
  { key: "notifications", label: "Notifications", href: () => ROUTES.notifications, icon: BellLinear },
  { key: "saved", label: "Saved", href: () => ROUTES.saved, icon: BookmarkLinear },
  { key: "profile", label: "Profile", href: (username) => ROUTES.profile(username), icon: UserRoundedLinear },
];

export function isNavActive(pathname: string, href: string): boolean {
  return pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
}
