import {Button, Text, View} from 'react-native';
import {useDispatch} from "react-redux";

const Library = () => {
    //const dispatch = useDispatch();

    return (
            <View>
                <View style={{margin:"3%", fontWeight:"bold", backgroundColor:"#e3d3a6", padding:"2%", borderRadius:20}}>
                    <Text>
                        Vous trouverez les samples que vous avez dans votre bibliothèque.
                        Vous pouvez notamment l'agrandir en rajoutant des sons depuis la librairie Freesound.
                    </Text>
                </View>
            </View>
        );
};


export default Library;
