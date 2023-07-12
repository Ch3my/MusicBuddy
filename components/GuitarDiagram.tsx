import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions, ScaledSize, Text } from 'react-native';

// strumStrings: de izq a derecha (comenzando desde la cuerda 6)
interface Props {
    width: number;
    height: number;
    circles: CircleProps[];
    fretsCount: number,
    strumStrings: string[],
    diagramColor: string
}

interface CircleProps {
    color: string;
    text: string;
    fretIndex: number;
    stringIndex: number;
}

const GridLines: React.FC<Props> = ({ width, height, circles, fretsCount, strumStrings, diagramColor }) => {
    const windowDimensions = Dimensions.get('window');
    const screenDimensions = Dimensions.get('screen');
    const radioCirculo = 15;

    const [dimensions, setDimensions] = useState({
        window: windowDimensions,
        screen: screenDimensions,
    });

    useEffect(() => {
        const subscription = Dimensions.addEventListener(
            'change',
            ({ window, screen }) => {
                setDimensions({ window, screen });
            },
        );
        return () => subscription?.remove();
    });

    const Circle: React.FC<CircleProps> = ({
        color,
        text,
        fretIndex,
        stringIndex,
    }) => {
        const anchoCuadrados = width / 5;
        // menos 6 porque son 6 cuerdas
        const posicionHorizontal = (anchoCuadrados * (6 - stringIndex)) - radioCirculo

        const altoCuadrado = height / (fretsCount + 1);
        // dividido en 2 para estar al medio del cuadrado, menos el radio 
        // para que el centro del circulo quede justo al centro
        // hay que sumar los margenes + el height de cada linea
        const posicionDosVertical = (((altoCuadrado * fretIndex) + (altoCuadrado / 2)) - radioCirculo + fretIndex)

        return (
            <View style={[styles.circle, {
                left: posicionHorizontal,
                top: posicionDosVertical,
                backgroundColor: color
            }]}>
                <Text style={styles.circleText}>{text}</Text>
            </View>
        );
    };

    const renderVerticalLines = () => {
        const verticalLines = [];
        for (let i = 0; i <= 5; i++) {
            const marginLeft = (width / 5) * i;
            verticalLines.push(<View key={`vertical-${i}`}
                style={[styles.verticalLine, { marginLeft }]} />);
        }
        return verticalLines;
    };

    const renderGridLines = () => {
        const gridLines = [];
        // Como no son absolute cada margen le suma al resto
        // asi que podemos definir una sola vez y suma automaticamente
        const marginTop = height / (fretsCount + 1);
        for (let i = 0; i < fretsCount; i++) {
            gridLines.push(<View key={`horizontal-${i}`}
                style={[styles.horizontalLine, { marginTop }]} />);
        }
        return gridLines;
    };

    const renderStrumStrings = () => {
        const verticalLines = [];
        const anchoCaracter = 3
        for (let [i, r] of strumStrings.entries()) {
            const marginLeft = ((width / 5) * i) - anchoCaracter;
            verticalLines.push(<Text key={`strum-${i}`}
                style={{ marginLeft, top: -20, position: "absolute", color: diagramColor }}>
                {r}
            </Text>);
        }
        return verticalLines;
    }

    const styles = StyleSheet.create({
        container: {
            marginTop: 20,
            width: width,
            height: height,
            // backgroundColor: "green"
        },
        horizontalLine: {
            width: '100%',
            height: 1,
            backgroundColor: diagramColor,
        },
        verticalLine: {
            position: 'absolute',
            width: 1,
            height: '100%',
            backgroundColor: diagramColor,
        },
        circle: {
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            width: radioCirculo * 2,
            height: radioCirculo * 2,
            borderRadius: 15,
        },
        circleText: {
            color: 'white',
        },
    });

    return (
        <View style={styles.container}>
            {renderVerticalLines()}
            {renderGridLines()}
            {renderStrumStrings()}
            {circles.map((circle, index) => (
                <Circle key={index} color={circle.color} text={circle.text}
                    stringIndex={circle.stringIndex} fretIndex={circle.fretIndex} />
            ))}
        </View>
    );
};



export default GridLines;
