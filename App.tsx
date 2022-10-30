import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import RootNavigation from './src/navigation/RootNavigation';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {store, storePersisted} from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={storePersisted}>
        <RootNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
