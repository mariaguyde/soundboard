import {View, TextInput, FlatList, Button, Text,StyleSheet} from "react-native";
import {useEffect, useState} from "react/cjs/react.development";
import {useDispatch} from "react-redux";
import {addSampleToList} from "./librarySlice";
import { Audio } from "expo-av"
import React from "react";

const sample_infos = (sample) => {
    //console.log(sample);
    return {
        id: sample.id,
        sample: sample.name,
        category: "freeSound",
        url: sample.previews["preview-hq-mp3"],
    };
};

const FreeSound = () => {
    const [input, setInput] = useState("");
    const [listResults, setListResults] = useState([]);
    const dispatch = useDispatch();

    /**
     * Add the sound to the local library
     */
    const add = (item) => {
        console.log(item);
        dispatch(addSampleToList({
            id: item.id,
            sample: item.sample,
            category: "freesound",
            file: item.url
        }));
    }

    const [sound, setSound] = React.useState();
    const playSample = async (item) => {
        console.log("playSample");
        // console.log(item.url);
        const { sound } = await Audio.Sound.createAsync({uri:item.url});
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

    const callAPI = async () => {
        // this is my key that the library Freesound gave me so I can make requests
        //console.log(input);
        let apiKey = "6ej0JZXst3c33gwvTe0hz2lXN9t6a2eSIfPjvWvC";

        /**
         * this is what my request looks like with parameters for my API key (in case it changes, I just have to change the variable)
         * and the keyword that the user typed in the search bar
         * */
        const response = await fetch(`https://freesound.org/apiv2/search/text/?query=${input}&fields=id,name,url,previews,download&token=${apiKey}`);
        const json = await response.json();
        console.log(json.results);
        /**
         * Once I fetch the data from the response I got after sending my request,
         * I stock the informations I want in objects for each result.
         * */
        return json.results.filter((item) => item.id && item.name).map(sample_infos);
    }

    const get_results = () => {
        callAPI(input).then((result) => {
            setListResults(result);
        });
    };

    /**
     * Using the useEffect and the user input hook in order to update the results of the research of the user in real time
     * */
    useEffect(() => {
        const timeout = setTimeout(get_results, 700);
        return () => {
            clearTimeout(timeout);
        };
    }, [input]);


    // Form for the research of a sample in the Freesound library
    return (
        <View style={{ flex: 1 }}>
            <TextInput
                value={input}
                style={{margin:10}}
                onChangeText={setInput}
                placeholder="Nom du sample"/>

            <View style={{margin:"3%"}}>
                <FlatList
                    data={listResults}
                    renderItem={({ item }) => (
                        <View style={{margin:"3%"}}>
                            <Text style={{marginBottom:"2%", fontWeight:"bold"}}>{item.sample}</Text>
                            <View style={{marginBottom:"1%"}}>
                                <Button color="#592304" title="Jouer le sample"  onPress={() => playSample(item)} />
                            </View>
                            <View style={{marginBottom:"9%"}}>
                                <Button color="#592304" title="Ajouter ce sample à la liste" onPress={() => add(item)} />
                            </View>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </View>
    );
};


export default FreeSound;
