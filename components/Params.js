import { StatusBar } from 'expo-status-bar';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from "@react-navigation/native";

const Params = () => {
    const navigation = useNavigation();
    return (
        <View>
            <div style={{padding:"10px"}}>
                <p style={{fontWeight:"bold", display:"flex", justifyContent:"center", fontSize:"33px"}}>Éditez ce son</p>
                <div style={{display:"flex"}}>
                    <div style={{padding:"12px 6px", textAlign: "center", backgroundColor: "white", margin:"0 10px"}}
                    >
                        <p  onClick={() => navigation.navigate('FreeSound')}>Trouver un son dans la librairie FreeSound</p>
                    </div>
                    <div style={{padding:"12px 6px", textAlign: "center",  backgroundColor: "white", margin:"0 10px"}}>Rogner le son</div>
                    <div style={{padding:"12px 6px", textAlign: "center",  backgroundColor: "white", margin:"0 10px"}}>Enregistrer un sample avec son microphone</div>
                </div>
            </div>
        </View>
    );
};


export default Params;
