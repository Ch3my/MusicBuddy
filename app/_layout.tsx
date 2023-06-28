import { Slot, Stack, Tabs } from "expo-router";
import { StyleSheet, View, useColorScheme } from 'react-native';
import {
    PaperProvider, MD3LightTheme,
    MD3DarkTheme, Button, Text,
    Appbar
} from 'react-native-paper';
import {
    ThemeProvider,
    DarkTheme,
    DefaultTheme,
    useTheme,
} from "@react-navigation/native";

import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons';

// Se crea un Stack que renderiza Tabs
// las cosas que esten fuera de Tabs se iran a un nuevo Stack
// que es lo que queremos

// Copiado de este tutorial
//https://www.youtube.com/watch?v=4-shpLyYBLc&t=448s

const StackLayout = () => {
    const systemColorScheme = useColorScheme();
    const [themeName, setThemeName] = useState(systemColorScheme === "dark" ? "dark" : "light");
    const [theme, setTheme] = useState(themeName === 'dark' ? MD3DarkTheme : MD3LightTheme);
    const [navTheme, setNavTheme] = useState(themeName === 'dark' ? DarkTheme : DefaultTheme);

    const toggleTheme = () => {
        setTheme((prevTheme) =>
            prevTheme === MD3DarkTheme ? MD3LightTheme : MD3DarkTheme
        );
        setNavTheme((prevTheme) =>
            prevTheme === DarkTheme ? DefaultTheme : DarkTheme
        )
        setThemeName((prevTheme) =>
            prevTheme == "dark" ? "light" : "dark"
        )
    };

    return (
        <ThemeProvider value={navTheme}>
            <PaperProvider theme={theme}>
                <StatusBar style={themeName ? "light" : "dark"} />
                <Stack>
                    <Stack.Screen name="(tabs)" options={{ headerShown: false }}></Stack.Screen>
                </Stack>
            </PaperProvider>
        </ThemeProvider>
    )
}

export default StackLayout