// ProjectEntity is for transferring info about projects from client to server
import {CompageJson} from "../../components/diagram-maker/models";

export interface ProjectEntity {
    id: string;
    displayName?: string;
    version: string;
    user?: User;
    json?: CompageJson;
    repository?: Repository;
    // TODO temporary made optional.
    metadata?: Map<string, string>;
}

export interface CreateProjectResponse {
    project: ProjectEntity;
    message: string;
}

// This type describes the error object structure:
export type CreateProjectError = {
    message: string;
};

// create project models
export interface CreateProjectRequest extends ProjectEntity {
}

export interface Repository {
    name: string;
    branch: string;
    isPublic: boolean;
}

export interface User {
    name: string;
    email: string;
}

// listProjects models (the structure matches as of now with CreateProjectRequest but have kept it
// separate for future customizations)
export interface ListProjectsResponse extends ProjectEntity {
}

export interface ListProjectsRequest {
}

// This type describes the error object structure:
export type ListProjectsError = {
    message: string;
};

// existsProject models (the structure matches as of now with CreateProjectRequest but have kept it
// separate for future customizations)
export interface ExistsProjectResponse extends ProjectEntity {
}

export interface ExistsProjectRequest {
    id: string;
}

// This type describes the error object structure:
export type ExistsProjectError = {
    message: string;
};

// getProject models (the structure matches as of now with CreateProjectRequest but have kept it
// separate for future customizations)
export interface GetProjectResponse extends ProjectEntity {
}

export interface GetProjectRequest {
    id: string;
}

// This type describes the error object structure:
export type GetProjectError = {
    message: string;
};

// updateProject models (the structure matches as of now with UpdateProjectRequest but have kept it
// separate for future customizations)
export interface UpdateProjectResponse {
    project: ProjectEntity;
    message: string;
}

export interface UpdateProjectRequest extends ProjectEntity {
}

// This type describes the error object structure:
export type UpdateProjectError = {
    message: string;
};