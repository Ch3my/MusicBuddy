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

export default function Layout() {
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

    // No es necesario agregar Tabs.Screen porque lo genera solo, pero si quieres
    // personalizar (titulo, colores, etc )hay que agregar y el entiende y no repite la opcion 2 veces

    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen name="home" options={{
                tabBarActiveBackgroundColor: theme.colors.primaryContainer,
                tabBarLabelStyle: { color: theme.colors.primary },
                title: "Home",
                tabBarIcon: () => <Ionicons name="home" size={24}
                    color={theme.colors.primary} />
            }} />
            <Tabs.Screen name="notes-menu"
                options={{
                    tabBarActiveBackgroundColor: theme.colors.primaryContainer,
                    tabBarLabelStyle: { color: theme.colors.primary },
                    title: "Notes",
                    tabBarIcon: () => <Ionicons name="book" size={24}
                        color={theme.colors.primary} />
                }} />
        </Tabs>
    );
}