import {View, TextInput, FlatList} from "react-native";
import {useEffect, useState} from "react/cjs/react.development";
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
        // this is my key that the library Freesound gave me so I can make requests
        let apiKey = "6ej0JZXst3c33gwvTe0hz2lXN9t6a2eSIfPjvWvC";
        //console.log(input);

        /**
         * this is what my request looks like with parameters for my API key (in case it changes, I just have to change the variable)
         * and the keyword that the user typed in the search bar
         * */
        const response = await fetch(`https://freesound.org/apiv2/search/text/?query=${input}&token=${apiKey}`);
        const json = await response.json();

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
                onChangeText={setInput}
                placeholder="Nom de la musique ou de l' artiste"/>

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
