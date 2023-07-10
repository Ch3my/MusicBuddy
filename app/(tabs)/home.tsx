import { StyleSheet, View, ScrollView, Image } from 'react-native';
import {
    useTheme, Text, Appbar,
    Modal, Portal, IconButton
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
        modalContent: {
            backgroundColor: theme.colors.surfaceVariant,
        }
    });

    return (
        <View style={styles.canva}>
            <View style={styles.container}>

            <Portal>
                <Modal visible={modalVisible} onDismiss={() => setModalVisible(false)}
                    contentContainerStyle={styles.modalContent}>
                    <Image source={selectedScaleObj?.armaduraSrc}
                        resizeMode='contain' style={{ width: "100%" }} />
                </Modal>
            </Portal>
            </View>
            <Appbar.Header>
                <Appbar.Content title="MusicBuddy" titleStyle={{ fontWeight: "bold" }} />
                <Appbar.Action icon="theme-light-dark" onPress={toggleTheme} />
            </Appbar.Header>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.scalesContainer}>
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
                <Text theme={theme}>
                    Relativa menor: {selectedScaleObj?.relativaMenor}
                </Text>
                <View style={styles.scalesContainer}>
                    <View style={{ width: 100 }}>
                        <Text>Major (Jonico)</Text>
                        {selectedScaleObj?.major.map((interval, index) => (
                            <View key={index} style={styles.row}>
                                <Text theme={theme} variant="titleLarge" style={{ width: 20 }}>
                                    {index + 1}.
                                </Text>
                                <Text theme={theme} variant="titleLarge" style={{ width: 80 }}>
                                    {interval + Harmonization.major[index]}
                                </Text>
                            </View>
                        ))}</View>
                    <View style={{ width: 100 }}>
                        <Text>Minor (Eolico)</Text>
                        {selectedScaleObj?.minor.map((interval, index) => (
                            <View key={index} style={styles.row}>
                                <Text theme={theme} variant="titleLarge" style={{ width: 20 }}>
                                    {index + 1}.
                                </Text>
                                <Text theme={theme} variant="titleLarge" style={{ width: 80 }}>
                                    {interval + Harmonization.minor[index]}
                                </Text>
                            </View>
                        ))}
                    </View>
                    <View style={{ width: 100 }}>
                        <Text>Frigio</Text>
                        {selectedScaleObj?.frigio.map((interval, index) => (
                            <View key={index} style={styles.row}>
                                <Text theme={theme} variant="titleLarge" style={{ width: 20 }}>
                                    {index + 1}.
                                </Text>
                                <Text theme={theme} variant="titleLarge" style={{ width: 80 }}>
                                    {interval + Harmonization.frigio[index]}
                                </Text>
                            </View>
                        ))}
                    </View>
                </View>
                <View style={styles.scalesContainer}>
                    <View style={{ width: 100 }}>
                        <Text>Lidio</Text>
                        {selectedScaleObj?.lidio.map((interval, index) => (
                            <View key={index} style={styles.row}>
                                <Text theme={theme} variant="titleLarge" style={{ width: 20 }}>
                                    {index + 1}.
                                </Text>
                                <Text theme={theme} variant="titleLarge" style={{ width: 80 }}>
                                    {interval + Harmonization.lidio[index]}
                                </Text>
                            </View>
                        ))}
                    </View>
                    <View style={{ width: 100 }}>
                        <Text>MixoLidio</Text>
                        {selectedScaleObj?.mixolidio.map((interval, index) => (
                            <View key={index} style={styles.row}>
                                <Text theme={theme} variant="titleLarge" style={{ width: 20 }}>
                                    {index + 1}.
                                </Text>
                                <Text theme={theme} variant="titleLarge" style={{ width: 80 }}>
                                    {interval + Harmonization.mixolidio[index]}
                                </Text>
                            </View>
                        ))}
                    </View>
                    <View style={{ width: 100 }}>
                        <Text>Dórico</Text>
                        {selectedScaleObj?.dorian.map((interval, index) => (
                            <View key={index} style={styles.row}>
                                <Text theme={theme} variant="titleLarge" style={{ width: 20 }}>
                                    {index + 1}.
                                </Text>
                                <Text theme={theme} variant="titleLarge" style={{ width: 80 }}>
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