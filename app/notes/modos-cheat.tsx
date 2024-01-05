import { Link, Stack } from "expo-router";
import { StyleSheet, View, ScrollView } from 'react-native';
import { useTheme, Text, List } from 'react-native-paper';
import GuitarDiagram from "../../components/GuitarDiagram";

export default function Harmony() {
    const theme = useTheme();
    //https://www.youtube.com/watch?v=3TaBhaAWn7k&t=739s
    const styles = StyleSheet.create({
        container: {
            backgroundColor: theme.colors.background,
            padding: 10,
        },
        paragraph: {
            marginBottom: 10
        }
    });

    const dotColor = "#eb63b8"
    const majorScale = {
        guitarDiagram: [{
            color: dotColor,
            text: "Jo",
            fretIndex: 1,
            stringIndex: 6
        }, {
            color: dotColor,
            text: "Do",
            fretIndex: 3,
            stringIndex: 6
        }, {
            color: dotColor,
            text: "Fri",
            fretIndex: 5,
            stringIndex: 6
        }, {
            color: dotColor,
            text: "Li",
            fretIndex: 1,
            stringIndex: 5
        }, {
            color: dotColor,
            text: "Mix",
            fretIndex: 3,
            stringIndex: 5
        }, {
            color: dotColor,
            text: "Eo",
            fretIndex: 5,
            stringIndex: 5
        }, {
            color: dotColor,
            text: "Lo",
            fretIndex: 2,
            stringIndex: 4
        }],
        title: "Escala Mayor",
        strumStrings: ["", "", "", "", "", ""]
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Stack.Screen options={{ headerTitle: "Escala Modal to Major" }} />
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                Todas las escalas modales tienen un equivalente a una escala mayor, para saber a cual corresponde debemos
                retroceder desde la escala mayor. Por ejemplo, la escala de La Dórico tiene las mismas notas que la escala de Sol mayor.
                Sabemos esto porque ubicamos el La y retrocedemos un espacio.
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                Otro ejemplo, la es la escala La♭ Lidio es igual a E♭ Mayor. Nos posicionamos en un La y retrocedemos
                en la escala 4 notas.
            </Text>
            <View style={{ alignItems: "center" }}>
                <GuitarDiagram height={400}
                    width={200}
                    circles={majorScale.guitarDiagram}
                    fretsCount={6}
                    strumStrings={majorScale.strumStrings}
                    diagramColor={theme.colors.onSurfaceVariant} />
            </View>
        </ScrollView>
    );
}