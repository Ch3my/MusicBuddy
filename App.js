import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, useColorScheme } from 'react-native';
import {
  PaperProvider, MD3LightTheme,
  MD3DarkTheme, Button, Text,
  Appbar
} from 'react-native-paper';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import scales from "./scales"

export default function App() {
  const [selectedScale, setSelectedScale] = useState(scales[0].name);
  const selectedScaleObj = scales.find((scale) => scale.name === selectedScale);
  // const intervals = selectedScaleObj.intervals;

  const systemColorScheme = useColorScheme();
  const [themeName, setThemeName] = useState(systemColorScheme === "dark" ? "dark" : "light");
  const [theme, setTheme] = useState(themeName === 'dark' ? MD3DarkTheme : MD3LightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === MD3DarkTheme ? MD3LightTheme : MD3DarkTheme
    );
  };

  const handleScaleChange = (scale) => {
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
      marginBottom: 20,
      backgroundColor: theme.colors.primaryContainer,
      color: theme.colors.text
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
    column: {
      width: 50,
    },
    scalesContainer: {
      flexDirection: 'row',
    }
  });

  return (
    <PaperProvider theme={theme}>
      <StatusBar style="auto" backgroundColor="#FFF" />
      <Appbar.Header>
        <Appbar.Content title="Scale Intervals" />
        <Appbar.Action icon="theme-light-dark" onPress={toggleTheme} />
      </Appbar.Header>
      <View style={styles.container}>
        <Picker
          selectedValue={selectedScale}
          onValueChange={handleScaleChange}
          style={styles.pickerStyle}
        >
          {scales.map((scale) => (
            <Picker.Item key={scale.name} label={scale.name} value={scale.name} style={styles.pickerItem} />
          ))}
        </Picker>
        <Text theme={theme}>
          Intervals for {selectedScale} scale:
        </Text>
        <View style={styles.scalesContainer}>
        <View style={{width:100}}>
            <Text style={styles.header}>Major Scale</Text>
            {selectedScaleObj.major.map((interval, index) => (
              <View key={index} style={styles.row}>
                <Text theme={theme} variant="titleLarge" style={styles.column}>
                  {index + 1}.
                </Text>
                <Text theme={theme} variant="titleLarge" style={styles.column}>
                  {interval}
                </Text>
              </View>
            ))}</View>
          <View style={{width:100}}>
            <Text style={styles.header}>Minor Scale</Text>
            {selectedScaleObj.minor.map((interval, index) => (
              <View key={index} style={styles.row}>
                <Text theme={theme} variant="titleLarge" style={styles.column}>
                  {index + 1}.
                </Text>
                <Text theme={theme} variant="titleLarge" style={styles.column}>
                  {interval}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </PaperProvider>
  );
}

