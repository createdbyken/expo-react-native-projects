import { useEffect } from "react";
import { Slot, SplashScreen, Stack } from "expo-router";

import { useFonts } from "expo-font";

import "./global.css";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    HelveticaNeueBlack: require("../assets/fonts/HelveticaNeueBlack.otf"),
    HelveticaNeueMedium: require("../assets/fonts/HelveticaNeueMedium.otf"),
    HelveticaNeueThin: require("../assets/fonts/HelveticaNeueThin.otf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return <Slot />;
  //return <Stack />;
};

export default RootLayout;
