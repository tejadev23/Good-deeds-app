"use client";

import { useEffect } from "react";

import { useActivityStore } from "@/store/activityStore";
import { useDeedStore } from "@/store/deedStore";
import { useNotificationStore } from "@/store/notificationStore";
import { useSessionStore } from "@/store/sessionStore";
import { useUserStore } from "@/store/userStore";

/** Restores the demo session and loads every store for the signed-in user. */
export function useAppBootstrap() {
  const { status, userId, restore } = useSessionStore();
  const loadUsers = useUserStore((s) => s.load);
  const loadDeeds = useDeedStore((s) => s.load);
  const loadNotifications = useNotificationStore((s) => s.load);
  const loadActivities = useActivityStore((s) => s.load);
  const usersStatus = useUserStore((s) => s.status);
  const deedsStatus = useDeedStore((s) => s.status);

  useEffect(() => {
    if (status === "checking") void restore();
  }, [status, restore]);

  useEffect(() => {
    if (!userId) return;
    void loadUsers();
    void loadDeeds(userId);
    void loadNotifications(userId);
    void loadActivities();
  }, [userId, loadUsers, loadDeeds, loadNotifications, loadActivities]);

  const dataReady = usersStatus === "ready" && (deedsStatus === "ready" || deedsStatus === "loading");
  return {
    sessionStatus: status,
    ready: status === "authenticated" && usersStatus === "ready",
    dataReady,
    failed: usersStatus === "error" || deedsStatus === "error",
  };
}
