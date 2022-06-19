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
            console.log("editSample");
            console.log(action.payload.idSampleToReplace);

            //check if the sample we want to replace is in the state
            return state.map(
                item =>
                    item.id === action.payload.idSampleToReplace
                        ?  { ...item, ...action.payload.newSample }
                        : item
            )
        },
    }
});

export const {editSample}=PadSlice.actions;
export default PadSlice.reducer;
export const padSampleSelector= (state) => state.padSample;
