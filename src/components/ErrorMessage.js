import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ErrorMessage({ message }) {
    if (!message) return null;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{message}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffe6e6",
        padding: 16,
        borderRadius: 8,
        marginBottom: 16,
    },
    text: {
        color: "red",
        fontSize: 14,
    },
});