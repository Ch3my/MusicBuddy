import { Link, Stack } from "expo-router";
import { StyleSheet, View, ScrollView } from 'react-native';
import { useTheme, Text, List } from 'react-native-paper';

export default function ModosGriegos() {
    const theme = useTheme();
    // https://www.youtube.com/watch?v=_yw85rAb6cw
    const styles = StyleSheet.create({
        container: {
            // flex: 1,
            backgroundColor: theme.colors.background,
            padding: 10
        },
        paragraph: {
            marginBottom: 10
        }
    });
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Stack.Screen options={{ headerTitle: "Modos Griegos" }} />
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                Modos Griegos o Escalas Modales. En general si la triada principal
                es mayor las escala en general tiene un sentido mas feliz, o por el contrario
                si la triada principal es menor la escala es mas triste. Aunque es subjetivo
                y se puede tener una cancion triste con los modos "felices" o lo contrario.
            </Text>
            <Text theme={theme} variant="titleLarge" >Jónica - Feliz Estandard</Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                La triada principal es un acorde mayor. Es equivalente a lo que
                comunmente se llama la Escala Mayor.
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                Esta escala utiliza mucho el acorde dominante con séptima menor (G - B- D - F#)
                por ejemplo
            </Text>
            <Text theme={theme} variant="titleLarge" >Dórico - Epico pero oscuro o triste</Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                La triada principal es un acorde menor. Lo que mas se aprovecha del Dórico
                es la primera menor y la cuarta mayor. El tema de la fuerza de Star Wars esta en 
                Dórico
            </Text>
            <Text theme={theme} variant="titleLarge" >Frigio</Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                La triada principal es un acorde menor.
            </Text>
            <Text theme={theme} variant="titleLarge" >Lidio - Feliz y Mágico</Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
            La triada principal es un acorde mayor. En banda sonora se usa el modo lidio
                para dar una sensación de fascinacion y fantasia
            </Text>
            <Text theme={theme} variant="titleLarge" >Mixolidio - Feliz y Epico</Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                La triada principal es un acorde mayor. Es un poco mas apagado que Jonico.
                Al mismo tiempo tiene un sentido mas epico, porque el acorde de septima en Jónico
                es de quita disminuida pero en modo mixolidio es equivalente a un acorde mayor
            </Text>
            <Text theme={theme} variant="titleLarge" >Eolica - Triste y epico</Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                La triada principal es un acorde menor. Es equivalente a lo que
                comunmente se llama la Escala Menor o Menor natural.
            </Text>
            <Text theme={theme} variant="titleLarge" >Locrio - Fuego y Dolor</Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                La triada principal es un acorde menor con quinta disminuida. Es un modo
                que no se utiliza mucho. 
            </Text>
        </ScrollView>
    );
}