import { StyleSheet, View, ScrollView } from 'react-native';
import { useTheme, Text, Appbar } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { Scales, Harmonization } from "../../scales"

export default function App() {
    const theme = useTheme();
    const [selectedScale, setSelectedScale] = useState(Scales[0].name);
    const selectedScaleObj = Scales.find((scale) => scale.name === selectedScale);

    const handleScaleChange = (scale: React.SetStateAction<string>) => {
        setSelectedScale(scale);
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.colors.background,
            alignItems: 'center',
            justifyContent: 'center',
        },
        pickerStyle: {
            width: 200,
            marginBottom: 5,
            backgroundColor: theme.colors.primaryContainer,
            // color: theme.colors.text
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
        }
    });

    return (
        <View style={{ flex: 1 }}>
            <Appbar.Header>
                <Appbar.Content title="MusicBuddy" titleStyle={{ fontWeight: "bold" }} />
                <Appbar.Action icon="theme-light-dark" />
            </Appbar.Header>
            <ScrollView contentContainerStyle={styles.container}>
                <Picker
                    selectedValue={selectedScale}
                    onValueChange={handleScaleChange}
                    style={styles.pickerStyle}
                >
                    {Scales.map((scale) => (
                        <Picker.Item key={scale.name} label={scale.name} value={scale.name} style={styles.pickerItem} />
                    ))}
                </Picker>
                <Text theme={theme}>
                    Relativa menor: {selectedScaleObj?.relativaMenor}
                </Text>
                <View style={styles.scalesContainer}>
                    <View style={{ width: 100 }}>
                        <Text>Major Scale</Text>
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
                        <Text>Minor Scale</Text>
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
                </View>
            </ScrollView>
        </View>
    )
}