import { StatusBar } from 'expo-status-bar';
import {Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {librarySliceSelector} from './librarySlice';
import { useSelector } from "react-redux";
import { FlatList} from "react-native";
import { Audio } from "expo-av"
import { useNavigation } from "@react-navigation/native";

const Soundboard = () => {

    const navigation = useNavigation();

    const hearSample = async (sample) => {
        console.log('hearSample');
        //const { son } = await Audio.Sound.createAsync(sample);
        //await son.playAsync();
    };

    const samples = useSelector(librarySliceSelector);
    //const samples = useSelector((state) => state.samples);
    console.log(samples);

    const sample_infos = ({ item }) => (
        <p>{item.name}</p>
    );

    return (
        <View>
            <div id="samples">
                <div>
                    <TouchableOpacity onLongPress={() => navigation.navigate('Params')}>
                        <button style={{backgroundColor:"#e8bb9f",padding:"7px", fontWeight:"bold", border:"none"}} onClick={() => hearSample()}>Samples</button>
                    </TouchableOpacity>
                </div>

                <FlatList
                    data={samples}
                    renderItem={sample_infos}/>
            </div>
        </View>
    );
};

export default Soundboard;
