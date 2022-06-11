import { StatusBar } from 'expo-status-bar';
import {TouchableOpacity, View} from 'react-native';
import {librarySliceSelector} from './librarySlice';
import { useSelector } from "react-redux";
import { FlatList} from "react-native";
import { Audio } from "expo-av"
import { useNavigation } from "@react-navigation/native";

const Soundboard = () => {

    const navigation = useNavigation();

    /***
     * Play the sound of the sample
     * */
    const hearSample = async (sample) => {
        console.log('hearSample');
        //const { son } = await Audio.Sound.createAsync(sample);
        //await son.playAsync();
    };

    const samples = useSelector((state) => state.library);
    //const samples = useSelector((state) => state.samples);
    console.log(samples);

    const sample_infos = ({ item }) => (
        <div style={{marginTop:"20px"}}>
            <TouchableOpacity onLongPress={() => navigation.navigate('Params')}>
                <button style={{width:'fit-content',backgroundColor:"#e8bb9f",padding:"14px", fontWeight:"bold", border:"none", borderRadius:"10px"}} onClick={() => hearSample()}>{item.sample}</button>
            </TouchableOpacity>
        </div>

    );

    return (
        <View>
            <div id="samples">
                <FlatList
                    data={samples}
                    renderItem={sample_infos}/>
            </div>
        </View>
    );
};

export default Soundboard;
