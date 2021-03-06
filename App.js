import { StatusBar } from 'expo-status-bar';
import store from "./store";
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import {persistStore} from 'redux-persist';
import Menu from "./components/Menu";
import 'react-native-gesture-handler';

/**
 * Implementation of the persistor :  we take the Redux state of the object and saves it to a persisted storage
 * So we won't lose our data which is in the storage even if we refresh the page.
 * */
let persistor = persistStore(store);
export default function App() {
  return (
      <Provider store={store}>
          <PersistGate persistor={persistor}>
                 <Menu/>
              <StatusBar style="auto" />
          </PersistGate>
      </Provider>
  );
}
