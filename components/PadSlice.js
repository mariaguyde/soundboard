import {createSlice} from "@reduxjs/toolkit";

const PadSlice = createSlice({
    name:"padSample",
    initialState: [],
    reducers : {
        /***
         * Here the state represents the list of the samples that we currently have
         * while the action is the thing that I got and that is not present yet in the library
         * **/
        editSample: (state, action) => {
            let get_sample = state.map((elm) => elm.id).includes(action.payload.id);
        },
    }
});

export const {editSample}=PadSlice.actions;
export default PadSlice.reducer;
export const padSampleSelector= (state) => state.padSample;
