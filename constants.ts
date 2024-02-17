export enum Route {
  Dashboard = "/dashboard",
  Projects = "/projects",
  Explorer = "/explorer",
  Settings = "/settings",
}

export const INITIAL_NUMBER_OF_BLOCKS = 1;

/**
 * Named constants for API call statuses to be used in state slices
 */
export enum cStatusType {
  Idle = "idle",
  Loading = "loading",
  Failed = "failed",
}
