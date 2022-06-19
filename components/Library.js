import {Button, Text, TouchableOpacity, View} from 'react-native';
import { FlatList} from "react-native";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
//import MusicNoteIcon from '@mui/icons-material/MusicNote';
import {editSample} from "./PadSlice";
import {Audio} from "expo-av";

const Library = (props) => {
    const samples = useSelector((state) => state.library);
    console.log(samples);
    const padSamples = useSelector((state) => state.padSamples);
    console.log(padSamples);
    const {sampleID} = props.route.params;
    console.log(sampleID);
    const dispatch = useDispatch();

    const [sound, setSound] = React.useState();
    const playSample = async (item) => {
        console.log("playSample");
        const { sound } = await Audio.Sound.createAsync({uri:item.file});
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

    const replaceSample = (item) => {
        console.log("new sample");
        console.log(item);
        dispatch(editSample({
            idSampleToReplace: sampleID,
            newSample : item
        }));

    }

    // <MusicNoteIcon style={{color:"#592304"}} sx={{ fontSize: 40 }}/>

    const sample_infos = ({ item }) => (
        <View style={{margin:"2%", display:"flex", flexDirection:"row"}}>
            <View style={{marginTop:13, marginRight:19}}>
            </View>
            <View>
                <Text>{item.sample}</Text>
                <Text>{item.category}</Text>
                <View style={{marginBottom:"2%"}}>
                    <Button color="#592304" title="Jouer le sample"onPress={() => playSample(item)}/>
                </View>
                <View style={{marginBottom:"2%"}}>
                    <Button color="#592304" title="Remplacer le son par ce sample"onPress={() => replaceSample(item)}/>
                </View>
            </View>
        </View>
    );

    return (
            <View>
                <View style={{margin:"2%", fontWeight:"bold", backgroundColor:"#e3d3a6", padding:"2%", borderRadius:20}}>
                    <Text>
                        Vous trouverez les samples que vous avez dans votre bibliothèque.
                        Vous pouvez notamment l'agrandir en rajoutant des sons depuis la librairie Freesound.
                    </Text>
                </View>


                <View>
                    <FlatList
                        data={samples}
                        renderItem={sample_infos}/>
                </View>
            </View>
        );
};


export default Library;
