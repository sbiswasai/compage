export const CURRENT_USER = "CURRENT_USER";

export const getCurrentUserName = () => {
    return sessionStorage.getItem(CURRENT_USER);
};

export const setCurrentUserName = (userName: string) => {
    sessionStorage.setItem(CURRENT_USER, userName);
};