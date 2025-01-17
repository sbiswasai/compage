import React from 'react';
import './App.scss';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {Login} from "../../features/auth-operations/component";
import {Home} from "../home/home";
import Header from "../navbar/header";
import {Account} from "../account/account";
import {Grid} from "@mui/material";
import LoadingOverlay from "react-loading-overlay";
import {useAppSelector} from "../../redux/hooks";
import {
    selectCreateProjectStatus,
    selectExistsProjectStatus,
    selectGetProjectStatus,
    selectListProjectsStatus,
    selectUpdateProjectStatus
} from "../../features/projects-operations/slice";
import {selectGenerateCodeStatus} from "../../features/code-operations/slice";
import {selectUploadYamlStatus} from "../../features/open-api-yaml-operations/slice";
import {selectGetCurrentContextStatus} from "../../features/k8s-operations/slice";

export const App = () => {
    const createProjectStatus = useAppSelector(selectCreateProjectStatus);
    const getProjectStatus = useAppSelector(selectGetProjectStatus);
    const existsProjectStatus = useAppSelector(selectExistsProjectStatus);
    const listProjectsStatus = useAppSelector(selectListProjectsStatus);
    const updateProjectStatus = useAppSelector(selectUpdateProjectStatus);
    const generateCodeStatus = useAppSelector(selectGenerateCodeStatus);
    const uploadYamlStatus = useAppSelector(selectUploadYamlStatus);
    const getCurrentContextStatus = useAppSelector(selectGetCurrentContextStatus);

    const isActive = () => {
        return createProjectStatus === 'loading'
            || getProjectStatus === 'loading'
            || listProjectsStatus === 'loading'
            || updateProjectStatus === 'loading'
            || uploadYamlStatus === 'loading'
            || generateCodeStatus === 'loading'
            || existsProjectStatus === 'loading'
            || getCurrentContextStatus === 'loading';
    };

    return <LoadingOverlay
        className="loading"
        active={isActive()}
        spinner
        text="Loading...">
        <BrowserRouter>
            <Grid
                container
                spacing={0}
                direction="row"
                justifyContent="center"
                alignItems="center"
                style={{
                    // TODO removes the scrollbar in the main screen
                    overflow: "auto",
                    width: "100%",
                    // TODO added 100% to take the whole webpage
                    // height: window.innerHeight - 150,
                    height: "100%",
                    // backgroundColor: 'teal'
                }}
            >
                <Header/>
                <br/>
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/account" element={<Account/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path="*" element={<p>Path not resolved <Link to={"/home"}> go to home</Link></p>}/>
                </Routes>
                {/*<Footer/>*/}
            </Grid>
        </BrowserRouter>
    </LoadingOverlay>;
};