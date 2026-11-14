import type { Services } from "../contracts";
import { mockActivityService } from "./activities";
import { mockAuthService } from "./auth";
import { mockDeedService } from "./deeds";
import { mockDemoService } from "./demo";
import { mockNotificationService } from "./notifications";
import { mockUserService } from "./users";

export const mockServices: Services = {
  auth: mockAuthService,
  users: mockUserService,
  deeds: mockDeedService,
  notifications: mockNotificationService,
  activities: mockActivityService,
  demo: mockDemoService,
};
