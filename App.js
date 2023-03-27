import React from "react";
import * as SplashScreen from 'expo-splash-screen'
import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from "@expo-google-fonts/open-sans";

import { Provider } from "react-redux";
import store from "./src/store";

import TabNavigator from "./src/navigation/tab/TabNavigator";


SplashScreen.preventAutoHideAsync();

export default function App() {
  const [Loaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold
  });

  React.useEffect(() => {
    if (Loaded) {
      SplashScreen.hideAsync();
    }
  }, [Loaded])

  if (!Loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <TabNavigator />
    </Provider>
  );
}
