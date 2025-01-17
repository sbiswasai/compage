import {createAsyncThunk} from "@reduxjs/toolkit";
import {UploadYamlError, UploadYamlRequest, UploadYamlResponse} from "../model";
import {uploadYaml} from "../api";
import {toastr} from 'react-redux-toastr';

export const uploadYamlAsync = createAsyncThunk<UploadYamlResponse, UploadYamlRequest, { rejectValue: UploadYamlError }>(
    'openapi/uploadYaml',
    async (uploadYamlRequest: UploadYamlRequest, thunkApi) => {
        return uploadYaml(uploadYamlRequest).then(response => {
            // Check if status is not okay:
            if (response.status !== 200) {
                const msg = `Failed to upload for '${uploadYamlRequest.projectId}'. Received: ${response.status}`;
                console.log(msg);
                toastr.error(`uploadYaml [Failure]`, msg);
                // Return the error message:
                return thunkApi.rejectWithValue({
                    message: msg
                });
            }
            const message = `Successfully uploaded file '${uploadYamlRequest.projectId}'`;
            console.log(message);
            toastr.success(`uploadYaml [Success]`, `${message}`);
            return response.data;
        }).catch(e => {
            const statusCode = e.response.status;
            const message = e.response.data.message;
            const errorMessage = `Status: ${statusCode}, Message: ${message}`;
            console.log(errorMessage);
            toastr.error(`uploadYaml [Failure]`, errorMessage);
            return thunkApi.rejectWithValue({
                message: errorMessage
            });
        });
    }
);
