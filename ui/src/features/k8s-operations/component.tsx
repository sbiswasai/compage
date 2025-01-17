import React from 'react';

import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {selectGetCurrentContextData, selectGetCurrentContextStatus} from './slice';
import Button from "@mui/material/Button";
import {getCurrentContextAsync} from "./async-apis/getCurrentContext";
import {getCurrentProjectDetails} from "../../utils/localstorage-client";
import {GetCurrentContextRequest} from "./model";

export const K8sOperations = () => {
    const getGetCurrentContextStatus = useAppSelector(selectGetCurrentContextStatus);
    const getGetCurrentContextData = useAppSelector(selectGetCurrentContextData);
    const dispatch = useAppDispatch();

    // When clicked, dispatch `uploadYaml`
    const handleGetCurrentContextClick = () => {
        const currentProjectDetails: string = getCurrentProjectDetails();
        if (currentProjectDetails) {
            if (getGetCurrentContextStatus !== 'loading') {
                const getCurrentContextRequest: GetCurrentContextRequest = {};
                dispatch(getCurrentContextAsync(getCurrentContextRequest));
            }
        }
    };

    return (
        <>
            <Button variant="contained" disabled={getGetCurrentContextStatus === "loading"} onClick={handleGetCurrentContextClick}>
                {getGetCurrentContextStatus === "loading"
                    ? "Getting K8s context"
                    : "Current K8s context"}
            </Button>
        </>
    );
};
