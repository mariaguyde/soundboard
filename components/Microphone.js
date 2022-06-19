import React from "react";
import {View, Text} from 'react-native';


const Microphone = () => {

    return (
        <View>
            <View id="microphone" style={{margin:"2%", fontWeight:"bold", backgroundColor:"#e3d3a6", padding:"2%", borderRadius:20}}>
                <Text>Vous pouvez ajouter des sons enregistrés à la bibliothèque.</Text>
            </View>
        </View>
    );
};

export default Microphone;
