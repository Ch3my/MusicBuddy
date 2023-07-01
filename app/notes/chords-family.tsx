import { Link, Stack } from "expo-router";
import { StyleSheet, View, ScrollView } from 'react-native';
import { useTheme, Text, List } from 'react-native-paper';

export default function ChordsFamily() {
    const theme = useTheme();

    const styles = StyleSheet.create({
        container: {
            backgroundColor: theme.colors.background,
            padding: 10
        },
        paragraph: {
            marginBottom: 10
        }
    });
 
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Stack.Screen options={{ headerTitle: "Familia de Acordes" }} />
            {/* ======= */}
            <Text theme={theme} variant="headlineSmall">I - Tónica</Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                La tonica es el centro tonal de una cancion y tiene el sentimiento
                de finalizacion/realizacion
            </Text>
            <Text theme={theme} variant="headlineSmall">ii - Super Tonica 
                (funcion subddominante? un poco de tension?)</Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                Tiene una funcion similar a IV, combina bien con la dominante.
            </Text>
            <Text theme={theme} variant="headlineSmall">iii - Mediant</Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                Se llama Mediant porque esta entre la tonica y la dominante.
                En musica Occidental iii muchas veces se resuelve en IV
            </Text>
            <Text theme={theme} variant="headlineSmall">IV - Subdominante</Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                En la musica occidental la IV muchas veces va antes de la V
            </Text>
            <Text theme={theme} variant="headlineSmall">V - Dominante</Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                La funcion dominante tiene el rol de crear tension, muchas veces
                se resulve a la tónica
            </Text>
            <Text theme={theme} variant="headlineSmall">vi - Submediant</Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                Esta entre la tonica y la subdominante. A veces se puede usar en 
                vez de la tonica. Tiene un sonido que engaña como que la cancion va a terminar 
                pero en realidad sigue. Esto se llama 
                "The deceptive cadence"
            </Text>
            <Text theme={theme} variant="headlineSmall">vii° - Leading tone</Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                Se compone de ii, iii y IV. No se usa mucho en musica occidental y muchas veces
                se utiliza una inversion donde se usa el bajo en vii y se añade la dominante.
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                Otra manera de verlo es un 5/7 o en escala de C G/B
            </Text>
        </ScrollView>
    );
}