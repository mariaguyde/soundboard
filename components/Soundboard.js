import {Text, TouchableOpacity, View} from 'react-native';
import { useSelector } from "react-redux";
import { FlatList} from "react-native";
import { Audio } from "expo-av"
import { useNavigation } from "@react-navigation/native";
import React from "react";

const Soundboard = () => {
    const navigation = useNavigation();

    const samples = useSelector((state) => state.padSamples);
    console.log(samples);

    const sample_infos = ({ item }) => (
        <View style={{margin:"2%"}}>
            <View >
                <TouchableOpacity
                    style={{height: 50, width: 50,backgroundColor:"#e3d3a6",padding:"2%", fontWeight:"bold", border:"none", borderRadius:9}}
                    onPress={() => playSound(item)}
                    onLongPress={() =>
                        navigation.navigate("Params", {
                            sampleID: item.id,
                        })
                    }>
                </TouchableOpacity>
            </View>
        </View>
    );

    /***
     * Source : https://docs.expo.dev/versions/v45.0.0/sdk/audio/
     * Play the sound of the sample
     * */
    const [sound, setSound] = React.useState();
    async function playSound(sample) {
        console.log(sample.file);
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(
            sample.file
        );
        //console.log(sound);
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }

    React.useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync(); }
            : undefined;
    }, [sound]);

    return (
        <View>
            <View id="samples" style={{display:"flex", flexDirection:"row", margin:8}}>
                <FlatList
                    data={samples}
                    renderItem={sample_infos}/>
            </View>

            <View style={{margin:'2%'}}>
                <View style={{ backgroundColor:"#592304", padding:15, borderRadius:10, marginBottom:14}}>
                    <Text style={{fontWeight:"bold",textAlign:"center",color:"white"}} onPress={() => navigation.navigate('FreeSound')}> Trouver un son dans la librairie FreeSound </Text>
                </View>
                <View style={{ backgroundColor:"#592304", padding:15, borderRadius:10, marginBottom:14}}>
                    <Text style={{fontWeight:"bold",textAlign:"center",color:"white"}} onPress={() => navigation.navigate('Microphone')}> Enregistrer un sample avec son microphone </Text>
                </View>
            </View>
        </View>
    );
};

export default Soundboard;
