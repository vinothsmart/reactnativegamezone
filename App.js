import React from "react";
import { AppLoading } from "expo";
import { useFonts } from "expo-font";
import Home from "./screens/home";
import Navigator from "./routes/homeStack";

export default function App() {
  let [fontsLoaded] = useFonts({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <Navigator />;
  }
}
