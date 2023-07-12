import { Link, Stack } from "expo-router";
import { StyleSheet, View, ScrollView } from 'react-native';
import { useTheme, Text, List } from 'react-native-paper';
import GuitarDiagram from '../../components/GuitarDiagram';


export default function Harmony() {
    const theme = useTheme();
    const styles = StyleSheet.create({
        container: {
            // flex: 1,
            backgroundColor: theme.colors.background,
            padding: 10
        },
    });

    const firstInvertion123 = [{
        guitarDiagram: [{
            color: "#4a454e",
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
        ],
        title: "Maj",
        subtitle: "1era inversión",
        strumStrings: ["x", "x", "x", "", "", ""]
    }, {
        guitarDiagram: [{
            color: "#4a454e",
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
            color: "#2db6ff",
            text: "m3",
            fretIndex: 1,
            stringIndex: 3
        }
        ],
        title: "min",
        subtitle: "1era inversión",
        strumStrings: ["x", "x", "x", "", "", ""]
    }, {
        guitarDiagram: [{
            color: "#4a454e",
            text: "R",
            fretIndex: 2,
            stringIndex: 1
        },
        {
            color: "#8654ff",
            text: "b5",
            fretIndex: 1,
            stringIndex: 2
        },
        {
            color: "#2db6ff",
            text: "m3",
            fretIndex: 2,
            stringIndex: 3
        }
        ],
        title: "dim(°)",
        subtitle: "1era inversión",
        strumStrings: ["x", "x", "x", "", "", ""]
    }, {
        guitarDiagram: [{
            color: "#4a454e",
            text: "R",
            fretIndex: 1,
            stringIndex: 1
        },
        {
            color: "#f88f50",
            text: "#5",
            fretIndex: 2,
            stringIndex: 2
        },
        {
            color: "#2db6ff",
            text: "3",
            fretIndex: 2,
            stringIndex: 3
        }
        ],
        title: "Aug(+)",
        subtitle: "1era inversión",
        strumStrings: ["x", "x", "x", "", "", ""]
    }]

    const secondInvertion123 = [{
        guitarDiagram: [{
            color: "#4a454e",
            text: "R",
            fretIndex: 2,
            stringIndex: 2
        },
        {
            color: "#eb63b8",
            text: "5",
            fretIndex: 1,
            stringIndex: 3
        },
        {
            color: "#9de78b",
            text: "3",
            fretIndex: 1,
            stringIndex: 1
        }
        ],
        title: "Maj",
        subtitle: "2era inversión",
        strumStrings: ["x", "x", "x", "", "", ""]
    }, {
        guitarDiagram: [{
            color: "#4a454e",
            text: "R",
            fretIndex: 3,
            stringIndex: 2
        },
        {
            color: "#eb63b8",
            text: "5",
            fretIndex: 2,
            stringIndex: 3
        },
        {
            color: "#2db6ff",
            text: "m3",
            fretIndex: 1,
            stringIndex: 1
        }
        ],
        title: "min",
        subtitle: "2da inversión",
        strumStrings: ["x", "x", "x", "", "", ""]
    }, {
        guitarDiagram: [{
            color: "#4a454e",
            text: "R",
            fretIndex: 3,
            stringIndex: 2
        },
        {
            color: "#8654ff",
            text: "b5",
            fretIndex: 1,
            stringIndex: 3
        },
        {
            color: "#2db6ff",
            text: "m3",
            fretIndex: 1,
            stringIndex: 1
        }
        ],
        title: "dim(°)",
        subtitle: "2da inversión",
        strumStrings: ["x", "x", "x", "", "", ""]
    }, {
        guitarDiagram: [{
            color: "#4a454e",
            text: "R",
            fretIndex: 2,
            stringIndex: 2
        },
        {
            color: "#f88f50",
            text: "#5",
            fretIndex: 2,
            stringIndex: 3
        },
        {
            color: "#9de78b",
            text: "3",
            fretIndex: 1,
            stringIndex: 1
        }
        ],
        title: "Aug(+)",
        subtitle: "2da inversión",
        strumStrings: ["x", "x", "x", "", "", ""]
    }]

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Stack.Screen options={{ headerTitle: "Inversiones Guitar" }} />
            <Text theme={theme} variant="titleLarge"
                style={{ backgroundColor: theme.colors.onPrimary }}>
                1era Inversión cuerdas 1, 2, 3
            </Text>
            {firstInvertion123.map((inv, index) => (
                <View style={{ flexDirection: "row" }}>
                    <GuitarDiagram height={150} key={"g-" + index}
                        width={160}
                        circles={inv.guitarDiagram}
                        fretsCount={3}
                        strumStrings={inv.strumStrings}
                        diagramColor={theme.colors.onSurfaceVariant} />
                    <View style={{ marginLeft: 25, marginTop: 30 }}>
                        <Text key={"t-" + index} theme={theme} variant="displayLarge">
                            {inv.title}</Text>
                        <Text key={"s-" + index} theme={theme} variant="headlineSmall">
                            {inv.subtitle}</Text>
                    </View>
                </View>
            ))}
            <Text theme={theme} variant="titleLarge"
                style={{ backgroundColor: theme.colors.onPrimary, marginTop: 20 }}>
                2da Inversión cuerdas 1, 2, 3
            </Text>
            {secondInvertion123.map((inv, index) => (
                <View style={{ flexDirection: "row" }}>
                    <GuitarDiagram height={150} key={"g-" + index}
                        width={160}
                        circles={inv.guitarDiagram}
                        fretsCount={3}
                        strumStrings={inv.strumStrings}
                        diagramColor={theme.colors.onSurfaceVariant} />
                    <View style={{ marginLeft: 25, marginTop: 30 }}>
                        <Text key={"t-" + index} theme={theme} variant="displayLarge">
                            {inv.title}</Text>
                        <Text key={"s-" + index} theme={theme} variant="headlineSmall">
                            {inv.subtitle}</Text>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
}