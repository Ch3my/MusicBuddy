import { Link, Stack } from "expo-router";
import { StyleSheet, View, ScrollView } from 'react-native';
import { useTheme, Text, List } from 'react-native-paper';

export default function Harmony() {
    const theme = useTheme();
    // https://www.youtube.com/watch?v=MXBB7n1Qbtw
    const styles = StyleSheet.create({
        container: {
            // flex: 1,
            backgroundColor: theme.colors.background,
            padding: 10
        },
        paragraph: {
            marginBottom: 10
        },
    });

    // Ejemplo
    // En la tonalidad de G mayor, se pueden utilizar las siguientes dominantes secundarias para llegar a diferentes acordes:

    // De G a E menor: Se puede añadir un B7.
    // De G a B menor: Se puede añadir un F#7.
    // De G a C: Se añade un G7.
    // De G a D: Se añade un A7.
    // Importancia
    // El uso de dominantes secundarias en progresiones armónicas enriquece el sonido de las composiciones. Este concepto permite a los músicos evitar secuencias predecibles, añadiendo variaciones que capturan la atención del oyente y hacen que la música suene más interesante.}

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Stack.Screen options={{ headerTitle: "Secondary Dominant" }} />
            <Text theme={theme} variant="titleLarge" style={{ backgroundColor: theme.colors.onPrimary }}>
                Secondary Dominant
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                La dominante secundaria es un acorde que se utiliza para facilitar la transición hacia otro acorde dentro de una tonalidad.
                Específicamente, es el quinto grado del acorde al que se desea llegar.
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                Ejemplo: En la tonalidad de G mayor, se pueden utilizar las siguientes dominantes secundarias para llegar a diferentes acordes:
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                De G a E menor: Se puede añadir un B7.
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                De G a B menor: Se puede añadir un F#7.
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                De G a C: Se añade un G7.
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                De G a D: Se añade un A7.
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                El uso de dominantes secundarias en progresiones armónicas enriquece el sonido de las composiciones.
                Este concepto permite a los músicos evitar secuencias predecibles, añadiendo variaciones que capturan la atención del oyente
                y hacen que la música suene más interesante.
            </Text>
        </ScrollView>
    );
}