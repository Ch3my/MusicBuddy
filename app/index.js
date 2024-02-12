import { Stack, Redirect } from "expo-router";
import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default function App() {

    const styles = StyleSheet.create({

        centerContentContainer: {
            alignItems: 'center',
            justifyContent: 'center'
        },
    })

    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />
            <View style={[styles.centerContentContainer, { flex: 1 }]}>
                <Image source={require('../assets/splash.png')}
                    style={{ width: 350 }}
                    resizeMode='center'
                />
            </View>
            <Redirect href="/home" />
        </>
    )
}