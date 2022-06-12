import {Button, Text, View} from 'react-native';
import {useDispatch} from "react-redux";
import {addSampleToList} from "./librarySlice";

const Sample = () => {
    const dispatch = useDispatch();

    function addSample() {
        dispatch(addSampleToList());
        console.log("addSample function");
    }

    return (
            <View>
                <View>
                    <Text>TO DO : LISTE DYNAMIQUE</Text>
                    <Button title="TEST" onClick={addSample}/>
                </View>
            </View>
        );
};


export default Sample;
