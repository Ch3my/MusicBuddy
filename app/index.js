import { StyleSheet, View, ScrollView } from 'react-native';
import { Link, Redirect } from "expo-router";
import { useTheme, Text } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { Scales, Harmonization } from "../scales"

export default function App() {
    return <Redirect href="/home"/>
}