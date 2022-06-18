import {Button, Text, TouchableOpacity, View} from 'react-native';
import { FlatList} from "react-native";
import React from "react";
import {useSelector} from "react-redux";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const Library = () => {
    const samples = useSelector((state) => state.library);
    console.log(samples);

    const sample_infos = ({ item }) => (
        <View style={{margin:"2%", display:"flex", flexDirection:"row"}}>
            <View style={{marginTop:13, marginRight:19}}>
                <MusicNoteIcon style={{color:"#592304"}} sx={{ fontSize: 40 }}/>
            </View>
            <View>
                <p>{item.sample}</p>
                <p>{item.category}</p>
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
