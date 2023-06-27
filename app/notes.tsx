import { Link } from "expo-router";
import { StyleSheet, View, ScrollView } from 'react-native';
import { useTheme, Text } from 'react-native-paper';

export default function Home() {
    const theme = useTheme();
    // https://www.youtube.com/watch?v=_yw85rAb6cw
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.colors.background,
            padding: 10
            // alignItems: 'center',
            // justifyContent: 'center',
        },

    });
    //  key.
    return (
        <ScrollView contentContainerStyle={styles.container}>
                        <Text theme={theme} variant="titleMedium" >Relativa menor</Text>
            <Text theme={theme} variant="bodyLarge" >
                The relative minor key is a key that shares the same key signature as a major key but 
                starts on a different tonic note. To find the relative minor of a major key, you can count down 
                three half steps (semitones) from the tonic note of the major
            </Text>
        </ScrollView>
    );
}