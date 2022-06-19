import {View, Text} from 'react-native';
import {useNavigation} from "@react-navigation/native";

// View for the Page Parameters
const Params = (props) => {
    const navigation = useNavigation();
    const {sampleID} = props.route.params;

    return (
        <View>
            <View style={{margin:10}}>
                <View style={{ backgroundColor:"#e3d3a6", padding:15, borderRadius:10, marginBottom:14}}>
                    <Text style={{fontWeight:"bold",textAlign:"center"}}
                          onPress={() =>
                              navigation.navigate('Library', {
                                  sampleID: sampleID,
                        })}
                    >Remplacer ce son par un autre sample dans la bibliothèque</Text>
                </View>
                <View style={{ backgroundColor:"#e3d3a6", padding:15, borderRadius:10, marginBottom:14}}>
                    <Text style={{fontWeight:"bold",textAlign:"center"}} onPress={() => navigation.navigate('EditingSound')}> Rogner le son </Text>
                </View>

            </View>
        </View>
    );
};


export default Params;
