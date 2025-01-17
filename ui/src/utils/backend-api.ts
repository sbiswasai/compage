import axios from 'axios';
import {config} from "./constants";
import {getCurrentUserName} from "./sessionstorage-client";

export const X_USER_NAME_HEADER = "X-User-Name";

export const sanitizeString = (input: string) => {
    return input.split(" ").join("_");
};

export const K8sOperationsBackendApi = () => {
    const path = "/k8s";
    return axios.create({
        baseURL: config.backend_base_url + path,
        headers: getHeaders()
    });
};

export const AuthBackendApi = () => {
    const path = "/auth";
    return axios.create({
        baseURL: config.backend_base_url + path,
        headers: getHeaders()
    });
};

export const CodeOperationsBackendApi = () => {
    const path = "/code";
    return axios.create({
        baseURL: config.backend_base_url + path,
        headers: getHeaders()
    },);
};

export const OpenApiYamlOperationsBackendApi = () => {
    const path = "/openapi";
    return axios.create({
        baseURL: config.backend_base_url + path,
        headers: getHeaders()
    },);
};

export const ProjectsBackendApi = () => {
    const path = "/projects";
    return axios.create({
        baseURL: config.backend_base_url + path,
        headers: getHeaders()
    },);
};

const getHeaders = () => {
    return {
        post: {
            [X_USER_NAME_HEADER]: getCurrentUserName()
        },
        get: {
            [X_USER_NAME_HEADER]: getCurrentUserName()
        },
        put: {
            [X_USER_NAME_HEADER]: getCurrentUserName()
        }
    };
};