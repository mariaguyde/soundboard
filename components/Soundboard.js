import { StatusBar } from 'expo-status-bar';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const Soundboard = () => {
return (
    <View>
        {[...Array(6)].map(()=>(
                <Pressable
                    style={({ pressed }) => [
                    {
                        backgroundColor: pressed
                            ? 'rgb(210, 230, 255)'
                            : 'white'
                    }>
                    <div style={{width:"20vw", height:"20vh"}}></div>
                </Pressable>
            )
        )}
    </View>
);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Soundboard;
