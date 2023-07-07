import { Link, Stack } from "expo-router";
import { StyleSheet, View, ScrollView } from 'react-native';
import { useTheme, Text } from 'react-native-paper';

export default function TenChordsProgressionsTenEmotions() {
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

    // Este StackScreen esta solo para definir propiedaes de este propio Stack
    // que me imagino se pone sobre el Stack principal en la raiz
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Stack.Screen options={{ headerTitle: "10 Progresiones 10 Emociones" }} />
            <Text theme={theme} variant="titleLarge" >Edificante, Feliz Euforico</Text>
            <Text theme={theme} variant="titleMedium" >
                V - VI - VII - I
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph} >
                Esta progresion puede configurarse para que valla subiendo el tono,
                la tonica puede ser las notas mas altas. Asi tambien se logra el sentimiento
                feliz y edificante (uplifting)
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                Por Ejemplo. Utilizando la tonalidad de D#m, los acordes serian
                A#m, B, C#, D#m
            </Text>
            {/* ======= */}
            <Text theme={theme} variant="titleLarge" >Serio y profundo</Text>
            <Text theme={theme} variant="titleMedium" >
                VI - VII - I - VII
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph} >
                Esta progresion puede configurarse para que valla subiendo el tono,
                la tonica puede ser las notas mas altas.
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph} >
                La melodia puede ser en la version mayor o menor (menor la misma escala,
                mayor corresponde a la III de la escala donde esta la cancion, en caso de Bm
                seria la escala de D)
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                Por Ejemplo. Utilizando la tonalidad de Bm, los acordes serian
                G, A, Bm, A
            </Text>
            {/* ======= */}
            <Text theme={theme} variant="titleLarge" >Tenso y suspenso</Text>
            <Text theme={theme} variant="titleMedium" >
                I
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph} >
                Un solo acorde, para agregar mas emocion puedes agregar una linea de bajo
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                Por Ejemplo. Utilizando la tonalidad de Gm usar Gm con una linea de bajo
                (algun instrumento grave) para añader sentido
            </Text>
            {/* ======= */}
            <Text theme={theme} variant="titleLarge" >Super Sad</Text>
            <Text theme={theme} variant="titleMedium" >
                I - VII - IV - VI
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph} >
                Para agregar mas sentimiento se puede subir la III una octava
                y tambien agregar la tonica
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                Por Ejemplo. Utilizando la tonalidad de Gm los acordes serian:
                Gm, F, Cm, E♭
            </Text>
            {/* ======= */}
            <Text theme={theme} variant="titleLarge" >Feel Good</Text>
            <Text theme={theme} variant="titleMedium" >
                VI - III - VII - I
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph} >
                Para mejorar la presencia puedes agregar la III de la escala y una
                V por sobre la tercera
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                Por Ejemplo. Utilizando la tonalidad de Bm los acordes serian:
                G, D, A, Bm
            </Text>
            {/* ======= */}
            <Text theme={theme} variant="titleLarge" >Feel Good, but sad</Text>
            <Text theme={theme} variant="titleMedium" >
                VI - I - VII - V
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                Por Ejemplo. Utilizando la tonalidad de G#m los acordes serian:
                E, G#m, F#, D#m
            </Text>
            {/* ======= */}
            <Text theme={theme} variant="titleLarge" >Pump Up (Animado, Gym)</Text>
            <Text theme={theme} variant="titleMedium" >
                I - VI - IV
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                Comenzando con la Tonica mas alta los otros acordes van en la octava de abajo.
                En canciones con 4 tiempos el primer acorde toma 2 tiempos
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                Por Ejemplo. Utilizando la tonalidad de Gm los acordes serian:
                Gm, E♭, Cm
            </Text>
            {/* ======= */}
            <Text theme={theme} variant="titleLarge" >Pump Up, pero Happy</Text>
            <Text theme={theme} variant="titleMedium" >
                I - III- VI
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                Con la tonica normal, luego sube a tercer y baja a sexta. La primera se puede extender
                por dos tiempos
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                Por Ejemplo. Utilizando la tonalidad de Gm los acordes serian:
                Gm, B♭, E♭
            </Text>
            {/* ======= */}
            <Text theme={theme} variant="titleLarge" >Netflix and Chill</Text>
            <Text theme={theme} variant="titleMedium" >
                VI - I - VII
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                La septima se puede extender por 2 tiempos. Para el mayor efecto los instrumentos
                deben tener sonidos relajantes sino no se logra. Aunque puedes poner
                cualquier instrumento que quieras. Puedes tomar la tonica y ponerla permanente
                para ayudar al ambiente
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                Por Ejemplo. Utilizando la tonalidad de Cm los acordes serian:
                G# Cm, B♭
            </Text>
            {/* ======= */}
            <Text theme={theme} variant="titleLarge" >Just Happy</Text>
            <Text theme={theme} variant="titleMedium" >
                IV - V - I
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                Una progresion muy comun, se puede agregar efectos y otros y funcionan bien
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                Por Ejemplo. Utilizando la tonalidad de C los acordes serian:
                F, G, C
            </Text>
        </ScrollView>
    );
}