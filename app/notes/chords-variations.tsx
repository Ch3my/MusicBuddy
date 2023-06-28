import { Link, Stack } from "expo-router";
import { StyleSheet, View, ScrollView } from 'react-native';
import { useTheme, Text } from 'react-native-paper';

export default function ChordsVariations() {
    const theme = useTheme();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.colors.background,
            padding: 10
        },
    });

    // Este StackScreen esta solo para definir propiedaes de este propio Stack
    // que me imagino se pone sobre el Stack principal en la raiz
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Stack.Screen options={{ headerTitle: "Variación Acordes" }} />
            <Text theme={theme} variant="titleMedium" >Relativa menor</Text>
            <Text theme={theme} variant="bodyLarge" >
                The relative minor key is a key that shares the same key signature as a major key but
                starts on a different tonic note. To find the relative minor of a major key, you can count down
                three half steps (semitones) from the tonic note of the major
            </Text>
        </ScrollView>
    );
}