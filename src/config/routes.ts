export const ROUTES = {
  home: "/",
  login: "/login",
  feed: "/feed",
  discover: "/discover",
  create: "/create",
  notifications: "/notifications",
  saved: "/saved",
  profile: (username: string) => `/u/${username}`,
  deed: (id: string) => `/deed/${id}`,
} as const;
