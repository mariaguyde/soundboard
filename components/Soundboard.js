import {TouchableOpacity, View} from 'react-native';
import { useSelector } from "react-redux";
import { FlatList} from "react-native";
import { Audio } from "expo-av"
import { useNavigation } from "@react-navigation/native";
import React from "react";

const Soundboard = () => {
    const navigation = useNavigation();

    /***
     * Play the sound of the sample
     * */
    const hearSample = async (sample) => {
        console.log('hearSample');
        console.log(sample);
        const { son } = await Audio.Sound.createAsync(sample.file);
        setSon(son);
        await son.playAsync();
        setIsPlaying(true);
    };

    const samples = useSelector((state) => state.library);
    console.log(samples);

    const sample_infos = ({ item }) => (
        <div style={{marginTop:"20px"}}>
            <TouchableOpacity onLongPress={() => navigation.navigate('Params')}>
                <button style={{width:'fit-content',backgroundColor:"#e8bb9f",padding:"14px", fontWeight:"bold", border:"none", borderRadius:"10px"}} onClick={() => hearSample(item)}>{item.sample}</button>
            </TouchableOpacity>
            <button onClick={() =>playSound(item)}>pLAY soUND</button>
        </div>
);

    // source : https://docs.expo.dev/versions/v45.0.0/sdk/audio/
    const [sound, setSound] = React.useState();
    async function playSound(sample) {
        console.log(sample.file);
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(
            sample.file
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync(); }

    React.useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync(); }
            : undefined;
    }, [sound]);



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
