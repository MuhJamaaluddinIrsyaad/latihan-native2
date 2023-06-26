import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import DetailFilm from './pages/DetailFilm'
import Header from './components/header'

const globalState = {
  totalLike : 0
}

const rootReducer = (state = globalState, action) => {
  switch (action.type) {
    case 'PLUS_LIKE':
      return { totalLike: state.totalLike + 1 }
    case 'MINUS_LIKE':
      return { totalLike: state.totalLike - 1 }
    default:
      return state
  }
}

const storeRedux = createStore(rootReducer);

const Stack = createNativeStackNavigator();

export default function App() {  

  return (
    <Provider store={storeRedux}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={DetailFilm} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
