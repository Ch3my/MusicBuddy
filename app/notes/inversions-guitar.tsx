import { Link, Stack } from "expo-router";
import { StyleSheet, View, ScrollView } from 'react-native';
import { useTheme, Text, List } from 'react-native-paper';
import GuitarDiagram from '../../components/GuitarDiagram';


export default function Harmony() {
    const theme = useTheme();
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.colors.background,
            padding: 10
        },
    });

    const markedPositions = [
        {
            color: "black",
            text: "R",
            fretIndex: 1,
            stringIndex: 1
        },
        {
            color: "#eb63b8",
            text: "5",
            fretIndex: 1,
            stringIndex: 2
        },
        {
            color: "#9de78b",
            text: "3",
            fretIndex: 2,
            stringIndex: 3
        }
    ];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Stack.Screen options={{ headerTitle: "Inversiones Guitar" }} />
                <GuitarDiagram height={150}
                    width={160}
                    circles={markedPositions}
                    fretsCount={3}
                    strumStrings={["x", "x", "x", "", "", ""]} />
        </ScrollView>
    );
}