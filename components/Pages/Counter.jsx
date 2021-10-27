import React, {useState, useEffect, useRef} from 'react'
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, Animated, View } from "react-native";
export default function Counter() {
    const [counter, setCounter] = useState(0);
    const [auto, setAuto] = useState(false);
    const [showName, setShowName] = useState(false)
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const showAutor = () => {
        setShowName(true);
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }).start();
        setTimeout(() => {
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 5000,
                useNativeDriver: true
            }).start();
            setTimeout(() => {
                setShowName(false);
            }, 3000);
        }, 5000);


    };
    const increaseCounter = () => {
        setCounter((current) => current == 1000 ? current : current + 1);
    };
    const decreaseCounter = () => {
        setCounter((current) => current == 0 ? current : current - 1);
    };
    useEffect(() => {
        if (counter == 1000) setAuto(false);
        if (auto) {
            setTimeout(() => {
                increaseCounter();
            }, 1);
        }
    }, [auto, counter]);



    return (
        <SafeAreaView style={styles.container}>
            <Animated.View
                style={[
                    styles.fadingContainer,
                    {
                        opacity: fadeAnim,
                        zIndex: showName ? 1 : 0
                    }
                ]}
            >
                <Text style={styles.fadingText}>Alejandro Herrera 😁</Text>
            </Animated.View>
            <View>
                <Text style={{ ...styles.normalText, ...styles.boldText }}>
                    Counter
                </Text>
                <Text style={styles.normalText}>{auto ? `(ﾉ◕ヮ◕)ﾉ  ${counter} ` : counter}</Text>
                <TouchableOpacity
                    onPress={increaseCounter}
                    style={styles.buttonStyles}
                >
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={decreaseCounter}
                    style={styles.buttonStyles}
                    keyu
                >
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { counter == 1000 ? '' : setAuto(!auto) }} style={styles.buttonPlay}>
                    <Text style={styles.buttonText}>⏯</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.infoButton}>
                <TouchableOpacity onPress={showAutor} style={styles.autorButton}>
                    <Text style={styles.buttonTextAutor}>i</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#292929",
        alignItems: "center",
        justifyContent: "center",
    },
    notValid: {
        color: "red",
    },
    valid: {
        color: "green",
    },
    normalText: {
        fontSize: 36,
        color: "white",
        alignSelf: "center"
    },
    buttonText: {
        fontSize: 40,
        color: "white",
    },
    buttonTextAutor: {
        fontSize: 36,
        color: "white",
    },
    boldText: {
        fontWeight: "bold",
    },
    buttonStyles: {
        borderRadius: 50,
        padding: 5,
        margin: 10,
        backgroundColor: "blue",
        width: 200,
        alignItems: "center",
    },
    buttonPlay: {
        width: 200,
        borderRadius: 50,
        backgroundColor: 'crimson',
        alignItems: 'center',
        padding: 5,
        margin: 10
    },
    autorButton: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: 'dodgerblue',
        alignItems: 'center',

    },
    infoButton: {
        top: '15%',
        left: '40%'

    },
    fadingContainer: {
        top: '30%',
        padding: 20,
        borderRadius: 10,
        backgroundColor: "firebrick"
    },
    fadingText: {
        fontSize: 28,
        fontWeight: 'bold',
    },
});
