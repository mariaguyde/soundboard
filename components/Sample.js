import {StyleSheet, View} from 'react-native';
import { useSelector } from "react-redux";
import {useDispatch} from "react-redux";
import {addSampleToList, librarySliceSelector} from "./librarySlice";

const Sample = () => {
    //const librarySamples = useSelector(librarySliceSelector);
    //console.log(librarySamples);
    const dispatch = useDispatch();

    function addSample() {
        dispatch(addSampleToList());
        console.log("addSample function");
    }

    return (
            <View>
                <div>
                    <p>TO DO : LISTE DYNAMIQUE</p>
                    <button onClick={addSample}>TEST</button>
                </div>
            </View>
        );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Sample;
