import { Link, Stack } from "expo-router";
import { StyleSheet, View, ScrollView } from 'react-native';
import { useTheme, Text, List } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

export default function ModosGriegos() {
    const theme = useTheme();
    const styles = StyleSheet.create({
        container: {
            backgroundColor: theme.colors.background,
            padding: 10
        },
        paragraph: {
            marginBottom: 10
        },
        tagContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            marginTop: 5,
            marginBottom: 20
        },
    });
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Stack.Screen options={{ headerTitle: "Modos Griegos" }} />
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                Modos Griegos o Escalas Modales. Todas las escalas se posicionan
                en un rango de brillo. Usualmente mientras mas sostenidos tiene es mas
                brillante es la escala, mientras mas bemoles tiene es mas oscura.
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                De la misma manera puedes agregar o quitar bemoles y sostenidos para cambiar el brillo
                de la escala o cancion. Tambien puedes cambiar de modo durante la cancion para tener
                una seccion mas oscura o brillante.
            </Text>
            <View style={{ height: 20 }}>
                <LinearGradient colors={[theme.colors.onPrimary, '#FFFFFF']}
                    start={[0, 0]} end={[1, 0]}
                    style={{ flex: 1 }} />
            </View>
            <View style={styles.tagContainer}>
                <Text theme={theme}>Locrio</Text>
                <Text theme={theme}>Frigio</Text>
                <Text theme={theme}>Menor</Text>
                <Text theme={theme}>Dórico</Text>
                <Text theme={theme}>Mixolidio</Text>
                <Text theme={theme}>Mayor</Text>
                <Text theme={theme}>Lidio</Text>
            </View>
            <Text theme={theme} variant="titleLarge"
                style={{ backgroundColor: theme.colors.onPrimary }}>
                Jónica (mayor) - Feliz Estandard
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                La triada principal es un acorde mayor. Es equivalente a lo que
                comunmente se llama la Escala Mayor.
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                Esta escala utiliza mucho el acorde dominante con séptima menor (G - B- D - F#)
                por ejemplo
            </Text>
            <Text theme={theme} variant="titleLarge"
                style={{ backgroundColor: theme.colors.onPrimary }}>
                Dórico - Epico pero oscuro o triste
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                I - II - III♭ - IV - V - VII - VII♭
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                La triada principal es un acorde menor. Lo que mas se aprovecha del Dórico
                es la primera menor y la cuarta mayor. El tema de la fuerza de Star Wars esta en
                Dórico. Funk comunmente esa este modo.
            </Text>
            <Text theme={theme} variant="titleLarge"
                style={{ backgroundColor: theme.colors.onPrimary }}>
                Frigio
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                I - II♭ - III♭ - IV - V - VII♭ - VII♭
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                La triada principal es un acorde menor. Frigio es un poco mas oscuro que la escala menor
                lo que lo hace una opcion comun en metal, "Simphony of Destruction" usa este modo
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                Al tener un semitono entre la tonica y el segundo grado, frigio tiene un sentimiento 
                constante de tension. Es como si frigio es un resbalin que siempre cae en la tonica.
            </Text>
            <Text theme={theme} variant="titleLarge"
                style={{ backgroundColor: theme.colors.onPrimary }}>
                Lidio - Feliz y Mágico
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                I - II - III - IV# - V - VII - VII
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                La triada principal es un acorde mayor. En banda sonora se usa el modo lidio
                para dar una sensación de fascinacion y fantasia.
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                Por ejemplo el tema de Joda en Star Wars usa el modo Lidio. Ahi se muestra la magia
                y fantasia. Una progresion comun es I - II
            </Text>
            <Text theme={theme} variant="titleLarge"
                style={{ backgroundColor: theme.colors.onPrimary }}>
                Mixolidio - Feliz y Epico
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                I - II - III - IV - V - VII - VII♭
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                La triada principal es un acorde mayor. Es un poco mas apagado que Jonico.
                Al mismo tiempo tiene un sentido mas epico, porque el acorde de septima en Jónico
                es de quita disminuida pero en modo mixolidio es equivalente a un acorde mayor
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                Como tiene un bemol, es un poco mas oscuro que mayor. Muchas veces se utiliza
                en canciones de rock por esta caracteristica. "You really got me" usa Mixolidio
            </Text>
            <Text theme={theme} variant="titleLarge"
                style={{ backgroundColor: theme.colors.onPrimary }}>
                Eolica (menor) - Triste y epico
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                I - II - III♭ - IV - V - VII♭ - VII♭
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                La triada principal es un acorde menor. Es equivalente a lo que
                comunmente se llama la Escala Menor o Menor natural.
            </Text>
            <Text theme={theme} variant="titleLarge"
                style={{ backgroundColor: theme.colors.onPrimary }}>
                Locrio - Fuego y Dolor
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                I - II♭ - III♭ - IV - V♭ - VII♭ - VII♭
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph}>
                La triada principal es un acorde menor con quinta disminuida. Es un modo
                que no se utiliza mucho por ser muy disonante.
            </Text>
        </ScrollView>
    );
}