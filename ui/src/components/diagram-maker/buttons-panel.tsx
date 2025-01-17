import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {Grid} from "@mui/material";
import {GenerateCode} from "../../features/code-operations/component";
import {SwitchProject} from "../../features/projects-operations/switch-project";
import Button from "@mui/material/Button";

// const resetState = () => {
//     const currentProjectDetails: string = getCurrentProjectDetails();
//     if (currentProjectDetails) {
//         const userNameAndProjectAndVersion = currentProjectDetails.split("###");
//         const message = `Are you sure you want to reset the project [${userNameAndProjectAndVersion[1]}]?`;
//         if (!window.confirm(message)) {
//             return;
//         }
//         removeCurrentConfig();
//         removeCurrentState();
//         removeModifiedState();
//         setReset(true);
//         // TODO just reset to last saved state.
//         // after resetting, needs to manually reload so, avoiding manual step here.
//         window.location.reload();
//     }
// };

export const ButtonsPanel = () => {
    const navigate = useNavigate();

    const [data, setData] = useState({
        isOpen: false,
    });

    // When clicked, open the dialog
    const handleSwitchProjectClick = () => {
        setData({...data, isOpen: true});
        navigate('/home');
    };

    const handleClose = () => {
        setData({...data, isOpen: false});
        navigate('/home');
    };

    return <React.Fragment>
        <Grid item style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column"
        }}>
            <GenerateCode></GenerateCode>
        </Grid>
        <hr/>
        {/* TODO we don't need this at this point*/}
        {/*<Grid item style={{*/}
        {/*    alignItems: "center",*/}
        {/*    display: "flex",*/}
        {/*    flexDirection: "column"*/}
        {/*}}>*/}
        {/*    <K8sOperations></K8sOperations>*/}
        {/*</Grid>*/}
        {/*<hr/>*/}
        <Grid item style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column"
        }}>
            <SwitchProject handleClose={handleClose} isOpen={data.isOpen}></SwitchProject>
            <Button style={{
                width: "200px"
            }} variant="contained" disabled={data.isOpen} onClick={handleSwitchProjectClick}>
                Switch Project
            </Button>
        </Grid>
        {/*<hr/>*/}
        {/*<Grid item style={{*/}
        {/*    alignItems: "center",*/}
        {/*    display: "flex",*/}
        {/*    flexDirection: "column"*/}
        {/*}}>*/}
        {/*<Button style={{*/}
        {/*    width: "200px"*/}
        {/*}} variant="contained" color="error" onClick={resetState}>Reset state</Button>*/}
        {/*</Grid>*/}
    </React.Fragment>;
};
