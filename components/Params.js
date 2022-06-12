import {View, Text} from 'react-native';
import {useNavigation} from "@react-navigation/native";

// View for the Page Parameters
const Params = () => {
    const navigation = useNavigation();
    return (
        <View>
            <View style={{margin:10}}>
                <View style={{ backgroundColor:"#e3d3a6", padding:15, borderRadius:10, marginBottom:14}}>
                    <Text style={{fontWeight:"bold",textAlign:"center"}}>Éditez ce son</Text>
                </View>
                <View style={{ backgroundColor:"#e3d3a6", padding:15, borderRadius:10, marginBottom:14}}>
                    <Text style={{fontWeight:"bold",textAlign:"center"}} onPress={() => navigation.navigate('FreeSound')}> Trouver un son dans la librairie FreeSound </Text>
                </View>
                <View style={{ backgroundColor:"#e3d3a6", padding:15, borderRadius:10, marginBottom:14}}>
                    <Text style={{fontWeight:"bold",textAlign:"center"}}> Rogner le son </Text>
                </View>
                <View style={{ backgroundColor:"#e3d3a6", padding:15, borderRadius:10, marginBottom:14}}>
                    <Text style={{fontWeight:"bold",textAlign:"center"}}> Enregistrer un sample avec son microphone </Text>
                </View>
            </View>
        </View>
    );
};


export default Params;
