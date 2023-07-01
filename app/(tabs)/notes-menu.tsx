import { Link, useNavigation, Redirect } from "expo-router";
import { StyleSheet, View, ScrollView } from 'react-native';
import { useTheme, Text, List, TouchableRipple, Appbar } from 'react-native-paper';

// https://www.youtube.com/watch?v=_yw85rAb6cw
export default function Home() {
    const theme = useTheme();

    const styles = StyleSheet.create({
        container: {
            // flex: 1,
            backgroundColor: theme.colors.background,
            padding: 10
            // alignItems: 'center',
            // justifyContent: 'center',
        },
    });

    return (
        <View style={{ flex: 1 }}>
            <Appbar.Header>
                <Appbar.Content title="MusicBuddy" titleStyle={{ fontWeight: "bold" }} />
                <Appbar.Action icon="theme-light-dark" />
            </Appbar.Header>
            <ScrollView contentContainerStyle={styles.container}>
                <List.Section>
                    <List.Subheader>Temas</List.Subheader>
                    <Link href="/notes/chords-variations">
                        <List.Item
                            title="Variaciones de Acordes"
                            left={() => <List.Icon color={theme.colors.primary} icon="folder" />} />
                    </Link>
                    <Link href="/notes/harmony">
                        <List.Item
                            title="Armonías"
                            left={() => <List.Icon color={theme.colors.primary} icon="folder" />}
                        />
                    </Link>
                    <Link href="/notes/ten-cp-ten-emo">
                    <List.Item
                            title="10 Progresiones 10 Emociones"
                            left={() => <List.Icon color={theme.colors.primary} icon="folder" />}
                        />
                    </Link>
                    <Link href="/notes/chords-family">
                    <List.Item
                            title="Familia de Acordes"
                            left={() => <List.Icon color={theme.colors.primary} icon="folder" />}
                        />
                    </Link>
                    <Link href="/notes/chord-progresion-1">
                    <List.Item
                            title="Progresiones 1"
                            left={() => <List.Icon color={theme.colors.primary} icon="folder" />}
                        />
                    </Link>
                </List.Section>
            </ScrollView>
        </View>
    );
}