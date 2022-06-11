import {createSlice} from "@reduxjs/toolkit";

/**
 * This slice allows me to stock in the initialState some basic samples for the users
 * but also add, edit or delete a sample from the list of samples
 * */
const librarySlice = createSlice({
    name:"samples",
    // list of the basic samples for the users
    initialState: [{id:0, sample: 'clap_1.wav', category:"local"}, {id:1, sample: 'clap_2.wav', category:"local"},],
    reducers : {
        /***
         * Here the state represents the list of the samples that we currently have
         * while the action is the thing that I got and that is not present yet in the library
         * **/
        addSampleToList: (state, action) => {
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
export const librarySliceSelector = (state) => state.samples;
