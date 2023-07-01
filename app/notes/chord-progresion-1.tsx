import { Link, Stack } from "expo-router";
import { StyleSheet, View, ScrollView } from 'react-native';
import { useTheme, Text, List } from 'react-native-paper';

export default function Harmony() {
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
            <Stack.Screen options={{ headerTitle: "Armonías" }} />
            <Text theme={theme} variant="headlineSmall" >I - V - ii - IV</Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph} >
                Crea una sensacion de ascenso por el ii y el IV que ambas tienen
                funcion subdominante. All Star by Smashing Pumpkin usa esta progresion
            </Text>
            <Text theme={theme} variant="headlineSmall" >I - V - vi - IV / Axis progression</Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph} >
                Esta progresion de acordes puede usarse comenzando en cualquier parte
                comenzar en I o en vi y haciendo loop. Lo que cambia es el inicio,
                puede comenzar con tension o resuelto.
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph} >
                Es muy similar a la anterior, solo cambia vi por ii. La diferencia
                es que este cambio provoca el cambio de una funcion subdominante a una funcion
                subtonica? (casi resuelto). Getting back together usa esta progresion
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph} >
                Otra version de esta progresion es intercambio de la V con la IV.
                De esta manera tiene un sonido un poco mas major. Mr brightside usa 
                esta progresion
            </Text>
            <Text theme={theme} variant="headlineSmall" >I - I - I - I </Text>
            <Text theme={theme} variant="headlineSmall" >IV - IV - I - I </Text>
            <Text theme={theme} variant="headlineSmall" >V - IV - I - I </Text>
            <Text theme={theme} variant="headlineSmall" >Blues 12 bar </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph} >
                Black or White de Michael jackson usa esta progresion. Obviamente
                en los blues se usaran acordes con 7ma pero no es necesario, esta
                progresion es mas o menos feliz.
            </Text>
            <Text theme={theme} variant="bodyLarge" style={styles.paragraph} >
                los ultimos 4 bar se pueden modificar añadiendo V por ejemplo en vez
                de IV o cambiar la Ultima tonica por una dominante para dar el efecto de
                resolucion 
            </Text>
        </ScrollView>
    );
}