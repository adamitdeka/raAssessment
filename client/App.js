import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./src/redux/reducers";
import { NativeBaseProvider, extendTheme, Image, List } from "native-base";
import { Montserrat_400Regular, Montserrat_700Bold, useFonts } from "@expo-google-fonts/montserrat";
import Header from "./src/components/layout/header";
import Card from "./src/components/commons/Card";
import CategoryHeading from "./src/components/commons/CategoryHeading";
import ProductList from "./src/components/products/List";

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
  const store = createStore(reducer);
  if (!fontsLoaded) {
    console.log(fontsLoaded)
    return 'Loading...';
  }
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <Header/>
        <ProductList/>
      </NativeBaseProvider>
    </Provider>
  );
}

//https://drive.google.com/thumbnail?id=1bNLKns95z5ODRanoWRHQxqaDLye8ny6Z