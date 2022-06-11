import {createSlice} from "@reduxjs/toolkit";

const PadSlice = createSlice({
    name:"padSample",
    initialState: [],
    reducers : {
        // state -> liste des chansons et action -> element que j'ai récupérée depuis la liste qui n'est pas présejt encore dans la liste
        editSample: (state, action) => {
            let get_sample = state.map((elm) => elm.id).includes(action.payload.id);
        },
    }
});

export const {editSample}=PadSlice.actions;
export default PadSlice.reducer;
export const padSampleSelector= (state) => state.padSample;
