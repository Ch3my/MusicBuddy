import { Slot, Stack, Tabs } from "expo-router";
import { StyleSheet, View, useColorScheme } from 'react-native';
import {
    PaperProvider
} from 'react-native-paper';
import {
    ThemeProvider
} from "@react-navigation/native";

import React, { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { MusicBuddyThemeProvider, MusicBuddyThemeContext } from './MusicBuddyThemeContext';
import { SafeAreaView } from "react-native-safe-area-context";

// Se crea un Stack que renderiza Tabs
// las cosas que esten fuera de Tabs se iran a un nuevo Stack
// que es lo que queremos

// Copiado de este tutorial
//https://www.youtube.com/watch?v=4-shpLyYBLc&t=448s

const StackLayout = () => {
    const { paperTheme, navTheme, themeName } = useContext(MusicBuddyThemeContext);
    return (
        <ThemeProvider value={navTheme}>
            <PaperProvider theme={paperTheme}>
                <StatusBar style={themeName == "dark" ? "light" : "dark"} />
                <SafeAreaView style={{ flex: 1 }}>
                    <Stack>
                        <Stack.Screen name="(tabs)" options={{ headerShown: false }}></Stack.Screen>
                    </Stack>
                </SafeAreaView>
            </PaperProvider>
        </ThemeProvider>
    )
}

// Fue necesario crear un componente que contuviera al StackLayout para que StackLayout
// leyera correctamente el contexto (sino tenia un contexto con variables tal como se inicalizaron
// y no cambiaban al ejecutar toggleTheme)
const App: React.FC = () => {
    return (
        <MusicBuddyThemeProvider>
            <StackLayout />
        </MusicBuddyThemeProvider>
    );
};

export default App;
