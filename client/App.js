import { Provider } from "react-redux";
import store from "./src/redux/store";
import { NativeBaseProvider, extendTheme, Image, List } from "native-base";
import { Montserrat_400Regular, Montserrat_700Bold, useFonts } from "@expo-google-fonts/montserrat";
import Header from "./src/components/layout/header";
import ProductList from "./src/components/products/List";
import Home from "./src/pages/Home";

const theme = extendTheme({
  colors:{
    muted:{
      900: '#171717',
      800: '#262626',
      700: '#404040',
      500: '#737373'
    }
  },
  fontConfig:{
    Montserrat:{
      700: 'Montserrat_700Bold',
      400: 'Montserrat_400Regular'
    }
  },
  fonts: {
    body: 'Montserrat'
  }
})


export default function App() {
  let [fontsLoaded] = useFonts({ Montserrat_400Regular, Montserrat_700Bold });
  if (!fontsLoaded) {
    return 'Loading...';
  }
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <Home/>
      </NativeBaseProvider>
    </Provider>
  );
}

