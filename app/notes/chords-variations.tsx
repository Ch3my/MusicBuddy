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
            <Text theme={theme} variant="titleLarge">Relativa menor</Text>
            <Text theme={theme} variant="bodyLarge">
                La relativa menor es aquella llave que comparte las mismas notas que
                la escala mayor pero en una nota tonica diferente. Para encontrar la relativa menor
                de una llave major puedes contar 3 semitonos hacia atras de la tonica de la mayor.
                Por ejemplo la relativa menor de G es E.
            </Text>
            <Text theme={theme} variant="titleLarge">Acorde Disminuido</Text>
            <Text theme={theme} variant="bodyLarge">
                Un acorde disminuido se compone de la tónica, la iii (3 menor) y la V♭ (quita disminuida)
                en una escala de B seria B, D, F.
            </Text>
            <Text theme={theme} variant="titleLarge">¿Que rayos es maj7, 7♭5 y 7?</Text>
            <Text theme={theme} variant="bodyLarge">Maj7 (acorde mayor séptima)</Text>
            <Text theme={theme} variant="bodyLarge">
                El acorde maj7 es un acorde mayor con una séptima mayor añadida. Está compuesto por
                una tónica, una tercera mayor, una quinta justa y una séptima mayor. Por ejemplo,
                en un acorde de Cmaj7, las notas serían C, E, G y B.
            </Text>
            <Text theme={theme} variant="bodyLarge">7♭5 (acorde séptima disminuida)</Text>
            <Text theme={theme} variant="bodyLarge">
                El acorde 7♭5 es un acorde de séptima dominante con una quinta disminuida (aplanada).
                Está compuesto por una tónica, una tercera mayor, una quinta disminuida y
                una séptima menor. Por ejemplo, en un acorde de C7♭5, las notas serían C, E, G♭ y B♭.
            </Text>
            <Text theme={theme} variant="bodyLarge">7 (acorde séptima dominante)</Text>
            <Text theme={theme} variant="bodyLarge">
                El acorde 7, también conocido como acorde de séptima dominante, es un acorde mayor
                con una séptima menor añadida. Está compuesto por una tónica, una tercera mayor,
                una quinta justa y una séptima menor. Por ejemplo, en un acorde de C7, las notas serían C, E, G y B♭.
            </Text>
        </ScrollView>
    );
}