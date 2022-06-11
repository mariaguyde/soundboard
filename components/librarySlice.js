import {createSlice} from "@reduxjs/toolkit";

const librarySlice = createSlice({
    name:"samples",
    initialState: [{id:0, sample: 'clap_1.wav', category:"local"}, {id:1, sample: 'clap_2.wav', category:"local"},],
    reducers : {
        // state -> liste des chansons et action -> element que j'ai récupérée depuis la liste qui n'est pas présejt encore dans la liste
        addSampleToList: (state, action) => {
            //console.log((state));
            let get_sample = state.map((elm) => elm.id).includes(action.payload.id);
            if (get_sample == true) {
                return state;
            }
            else {
                console.log(action.payload);
                return [ ...state,action.payload];
            }
        },

        },
});

export const {addSampleToList}=librarySlice.actions;
export default librarySlice.reducer;
export const librarySliceSelector= (state) => state.samples;
