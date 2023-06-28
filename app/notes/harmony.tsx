import { Link, Stack } from "expo-router";
import { StyleSheet, View, ScrollView } from 'react-native';
import { useTheme, Text, List } from 'react-native-paper';

export default function Harmony() {
    const theme = useTheme();
    // https://www.youtube.com/watch?v=_yw85rAb6cw
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.colors.background,
            padding: 10
        },

    });
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Stack.Screen options={{ headerTitle: "Armonías" }} />
        </ScrollView>
    );
}