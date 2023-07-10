import { Link, Stack } from "expo-router";
import { StyleSheet, View, ScrollView } from 'react-native';
import { useTheme, Text } from 'react-native-paper';

export default function ChordsVariations() {
    const theme = useTheme();

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

    // Este StackScreen esta solo para definir propiedaes de este propio Stack
    // que me imagino se pone sobre el Stack principal en la raiz
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Stack.Screen options={{ headerTitle: "Variación Acordes" }} />
            <Text theme={theme} variant="titleLarge" style={{ backgroundColor: theme.colors.onPrimary }}>
                Relativa menor
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                La relativa menor es aquella llave que comparte las mismas notas que
                la escala mayor pero en una nota tonica diferente. Para encontrar la relativa menor
                de una llave major puedes contar 3 semitonos hacia atras de la tonica de la mayor.
                Por ejemplo la relativa menor de G es E.
            </Text>
            <Text theme={theme} variant="titleLarge"
                style={{ backgroundColor: theme.colors.onPrimary }}>Acorde Disminuido</Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                Un acorde disminuido se compone de la tónica, la iii (3 menor) y la V♭ (quita disminuida)
                en una escala de B seria B, D, F.
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                En general los acordes disminuidos son disonantes y tensos. Por si solos quizas no sean
                muy utiles. Pero la tension de los acordes disminuidos injectan energia en la progresion cuando
                se analizan en contexto.
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                Muchas veces los acordes disminuidos no forman parte de la escala (no diatonicos). Aunque tambien
                puedes usar algun acorde que este en la escala.
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                Es comun que se usen acordes disminuidos en el V# (5#) grado de la escala. Otro grado comun
                es el IV# (4#). Por ejemplo podrias hacer una progresion V - V#dim - I, pasar por el disminuido
                ayuda a hacer transiciones mas suaves.
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                Aunque tambien se pueden utilizar acordes disminuidos en los acordes de la escala, por ejemplo en el
                segundo grado
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                Se pueden obviar totalmente los acordes disminuidos, pero usarlos añade interes a la cancion,
                tension y movimiento.
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                Como los acordes disminuidos son disonantes, se pueden resolver a cualquier lado mientras
                sean resueltos aunque sea un poco, sobretodo si el acorde de resolucion esta cerca del acorde disminuido
            </Text>
            <Text theme={theme} variant="titleLarge" style={{ backgroundColor: theme.colors.onPrimary }}>¿Que rayos es maj7, 7♭5 y 7?</Text>
            <Text theme={theme} variant="bodyLarge" style={{ fontWeight: "bold" }}>Maj7 (acorde mayor séptima)</Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                El acorde maj7 es un acorde mayor con una séptima mayor añadida. Está compuesto por
                una tónica, una tercera mayor, una quinta justa y una séptima mayor. Por ejemplo,
                en un acorde de Cmaj7, las notas serían C, E, G y B.
            </Text>
            <Text theme={theme} variant="bodyLarge" style={{ fontWeight: "bold" }}>7♭5 (acorde séptima disminuida)</Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                El acorde 7♭5 es un acorde de séptima dominante con una quinta disminuida (aplanada).
                Está compuesto por una tónica, una tercera mayor, una quinta disminuida y
                una séptima menor. Por ejemplo, en un acorde de C7♭5, las notas serían C, E, G♭ y B♭.
            </Text>
            <Text theme={theme} variant="bodyLarge" style={{ fontWeight: "bold" }}>7 (acorde séptima dominante)</Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                El acorde 7, también conocido como acorde de séptima dominante, es un acorde mayor
                con una séptima menor añadida. Está compuesto por una tónica, una tercera mayor,
                una quinta justa y una séptima menor. Por ejemplo, en un acorde de C7, las notas serían C, E, G y B♭.
            </Text>
        </ScrollView>
    );
}