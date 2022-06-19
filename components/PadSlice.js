import {createSlice} from "@reduxjs/toolkit";
import {useSelector} from "react-redux";

const PadSlice = createSlice({
    name:"padSample",
    initialState: [
        { id: 0, sample: 'Shaker 3', category:"local", file: require("../assets/samples/shaker_3.wav")},
        { id: 1, sample: 'Alesis Pizzicato Strings C4', category:"local", file:require("../assets/samples/Alesis-Pizzicato-Strings-C4.wav")},
        { id: 2, sample: 'Tom 4', category:"local", file:require("../assets/samples/tom_4.wav")},
        { id: 3, sample: 'Kalimba C4', category:"local", file:require("../assets/samples/Kalimba-C4.wav")},
    ],
    reducers : {
        /***
         * Here the state represents the list of the samples that we currently have
         * while the action is the thing that I got and that is not present yet in the library
         * **/
        editSample: (state, action) => {
            //let get_sample = state.map((elm) => elm.id).includes(action.payload.id);
            console.log("editSample");
            console.log(action.payload);
            console.log(action.payload.idSampleToReplace);

            //check if the sample we want to replace is in the state
            let get_sample = state.map((elm) => elm.id).includes(action.payload.idSampleToReplace);
            /*state.map((item) => {
                console.log(item.id);
                console.log(action.payload.idSampleToReplace);
                if ((item.id === action.payload.idSampleToReplace)) {
                    /*console.log("the id of the sample to replace is indeed in the state");
                    console.log(item.id);
                    console.log(item.sample);
                    console.log("new item sample")
                    console.log(action.payload.newSample);
                    item.id = action.payload.newSample.id;
                    item.category = action.payload.newSample.category;
                    item.sample = action.payload.newSample.sample;
                    item.file = action.payload.newSample.file;*/
                    /*let state =  { ...item, ...action.payload.newSample }
                    console.log("after affection to new sample");
                    console.log(state);
                    return { ...item, ...action.payload.newSample }
                }
                else {
                    return item;
                }*/

                return state.map(
                    item =>
                        item.id === action.payload.idSampleToReplace
                            ?  { ...item, ...action.payload }
                            : item
                )


        },
    }
});

export const {editSample}=PadSlice.actions;
export default PadSlice.reducer;
export const padSampleSelector= (state) => state.padSample;
