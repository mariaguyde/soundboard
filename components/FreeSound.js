import {StyleSheet, View, TextInput, FlatList} from "react-native";
import { useEffect, useState, } from "react/cjs/react.development";
import {useDispatch} from "react-redux";

const sample_infos = (sample) => {
    return {
        id: sample.id.toString(),
        sample: sample.name,
        artist: sample.username,
    };
};

const freeSound = () => {
    const [input, setInput] = useState("");
    const [listResults, setListResults] = useState([]);
    const dispatch = useDispatch();

    const callAPI = async () => {
        let apiKey = "6ej0JZXst3c33gwvTe0hz2lXN9t6a2eSIfPjvWvC";
        //console.log(input);
        const response = await fetch(`https://freesound.org/apiv2/search/text/?query=${input}&token=${apiKey}`);
        const json = await response.json();
        //console.log(json.results);
        return json.results.filter((item) => item.id && item.name).map(sample_infos);
    }

    const get_results = () => {
        callAPI(input).then((result) => {
            setListResults(result);
        });
    };

    useEffect(() => {
        const timeout = setTimeout(get_results, 700);
        return () => {
            clearTimeout(timeout);
        };
    }, [input]);

    return (
        <View style={{ flex: 1 }}>
            <TextInput
                value={input}
                onChangeText={setInput}
                placeholder="Nom de la musique ou de l' artiste"
            />
            <div style={{margin:"10px"}}>
                <FlatList
                    data={listResults}
                    renderItem={({ item }) => (
                        <div>{item.sample}</div>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </div>
        </View>
    );
};


export default freeSound;
