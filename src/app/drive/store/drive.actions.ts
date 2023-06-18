import { createActionGroup, props } from "@ngrx/store";

const DRIVE = "DRIVE";
export const DriveActions = createActionGroup({
  source: DRIVE,
  events: {}
})

const FOLDER = "FOLDER";
export const FolderActions = createActionGroup({
  source: FOLDER,
  events: {}
})

const FILE = "FILE";
export const FileActions = createActionGroup({
  source: DRIVE,
  events: {}
})
