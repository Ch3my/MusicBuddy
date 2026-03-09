import { StyleSheet, View, ScrollView, Image, Modal } from 'react-native';
import {
    useTheme, Text, Appbar, IconButton
} from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import React, { useState, useContext } from 'react';
import { Scales, Harmonization } from "../../scales"
import { MusicBuddyThemeContext } from '../MusicBuddyThemeContext';

export default function App() {
    const theme = useTheme();
    const [selectedScale, setSelectedScale] = useState(Scales[0].name);
    const [modalVisible, setModalVisible] = useState(false);
    const selectedScaleObj = Scales.find((scale) => scale.name === selectedScale);

    const { toggleTheme } = useContext(MusicBuddyThemeContext);

    const hideModal = () => {
        setModalVisible(false)
    }

    const handleScaleChange = (scale: React.SetStateAction<string>) => {
        setSelectedScale(scale);
    };

    const styles = StyleSheet.create({
        container: {
            //flex: 1, // NOTA. Quitar Flex si quieres Scroll
            backgroundColor: theme.colors.background,
            alignItems: 'center',
            justifyContent: 'center',
        },
        pickerStyle: {
            width: 120,
            // height: 25,
            backgroundColor: theme.colors.primaryContainer,
        },
        pickerItem: {
            backgroundColor: theme.colors.secondaryContainer,
            color: theme.colors.secondary
        },
        row: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 8,
        },
        scalesContainer: {
            flexDirection: 'row',
            marginBottom: 15
        },
        canva: {
            flex: 1,
            backgroundColor: theme.colors.background
        },
        listNumber: {
            width: 25,
        },
        listText: {
            width: 90,
        },
    });

    return (
        <View style={styles.canva}>
            <View style={styles.container}>

                <Modal visible={modalVisible} onRequestClose={hideModal}
                    animationType="slide">
                    <IconButton icon="close"
                        iconColor={theme.colors.onPrimaryContainer}
                        containerColor={theme.colors.primaryContainer}
                        mode="contained"
                        style={{ position: "absolute", right: 15, zIndex: 999 }}
                        onPress={hideModal} />
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={selectedScaleObj?.armaduraSrc}
                            resizeMode='contain' style={{ width: "100%" }} />
                    </View>
                </Modal>
            </View>
            <Appbar.Header>
                <Appbar.Content title="Music Codex" titleStyle={{ fontWeight: "bold" }} />
                <Appbar.Action icon="theme-light-dark" onPress={toggleTheme} />
            </Appbar.Header>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={{ flexDirection: 'column', gap: 5, marginBottom: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Picker
                            selectedValue={selectedScale}
                            onValueChange={handleScaleChange}
                            style={styles.pickerStyle}>
                            {Scales.map((scale) => (
                                <Picker.Item key={scale.name} label={scale.name} value={scale.name} style={styles.pickerItem} />
                            ))}
                        </Picker>
                        <IconButton onPress={() => setModalVisible(true)}
                            icon="music-clef-treble" mode="outlined"
                            theme={theme} style={{ marginLeft: 10 }}
                        />
                    </View>
                    <Text theme={theme} style={{ width: 170, textAlign: 'center' }}>
                        Relativa menor: {selectedScaleObj?.relativaMenor}
                    </Text>
                </View>
                <View style={styles.scalesContainer}>
                    <View style={{ width: 115 }}>
                        <Text>Major (Jonico)</Text>
                        {selectedScaleObj?.major.map((interval, index) => (
                            <View key={index} style={styles.row}>
                                <Text theme={theme} variant="titleLarge" style={styles.listNumber}>
                                    {index + 1}.
                                </Text>
                                <Text theme={theme} variant="titleLarge" style={styles.listText}>
                                    {interval + Harmonization.major[index]}
                                </Text>
                            </View>
                        ))}</View>
                    <View style={{ width: 115 }}>
                        <Text>Minor (Eolico)</Text>
                        {selectedScaleObj?.minor.map((interval, index) => (
                            <View key={index} style={styles.row}>
                                <Text theme={theme} variant="titleLarge" style={styles.listNumber}>
                                    {index + 1}.
                                </Text>
                                <Text theme={theme} variant="titleLarge" style={styles.listText}>
                                    {interval + Harmonization.minor[index]}
                                </Text>
                            </View>
                        ))}
                    </View>
                    <View style={{ width: 115 }}>
                        <Text>Frigio</Text>
                        {selectedScaleObj?.frigio.map((interval, index) => (
                            <View key={index} style={styles.row}>
                                <Text theme={theme} variant="titleLarge" style={styles.listNumber}>
                                    {index + 1}.
                                </Text>
                                <Text theme={theme} variant="titleLarge" style={styles.listText}>
                                    {interval + Harmonization.frigio[index]}
                                </Text>
                            </View>
                        ))}
                    </View>
                </View>
                <View style={styles.scalesContainer}>
                    <View style={{ width: 115 }}>
                        <Text>Lidio</Text>
                        {selectedScaleObj?.lidio.map((interval, index) => (
                            <View key={index} style={styles.row}>
                                <Text theme={theme} variant="titleLarge" style={styles.listNumber}>
                                    {index + 1}.
                                </Text>
                                <Text theme={theme} variant="titleLarge" style={styles.listText}>
                                    {interval + Harmonization.lidio[index]}
                                </Text>
                            </View>
                        ))}
                    </View>
                    <View style={{ width: 115 }}>
                        <Text>MixoLidio</Text>
                        {selectedScaleObj?.mixolidio.map((interval, index) => (
                            <View key={index} style={styles.row}>
                                <Text theme={theme} variant="titleLarge" style={styles.listNumber}>
                                    {index + 1}.
                                </Text>
                                <Text theme={theme} variant="titleLarge" style={styles.listText}>
                                    {interval + Harmonization.mixolidio[index]}
                                </Text>
                            </View>
                        ))}
                    </View>
                    <View style={{ width: 115 }}>
                        <Text>Dórico</Text>
                        {selectedScaleObj?.dorian.map((interval, index) => (
                            <View key={index} style={styles.row}>
                                <Text theme={theme} variant="titleLarge" style={styles.listNumber}>
                                    {index + 1}.
                                </Text>
                                <Text theme={theme} variant="titleLarge" style={styles.listText}>
                                    {interval + Harmonization.dorian[index]}
                                </Text>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}