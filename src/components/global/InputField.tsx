import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Platform } from 'react-native';

import { Raleway_100Thin_Italic } from "@expo-google-fonts/raleway"

const InputField = ({ label, value, onChangeText, placeholder, style, error, keyboardType }: any) => {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <View style={[styles.container, style]}>
            {/* Label */}
            <Text style={styles.label}>{label}</Text>

            {/* Input */}
            <TextInput
                style={[
                    styles.input,
                    isFocused && styles.inputFocused, // Apply focus style when focused
                     error && styles.inputError,
                ]}
                value={value}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                placeholder={placeholder}
                placeholderTextColor="#888"
                selectionColor="#9F1F72"
                onFocus={() => setIsFocused(true)} // Handle focus
                onBlur={() => setIsFocused(false)} // Handle blur
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: Platform.OS === 'ios' ? 400 : 500,
        color: '#333',
        marginBottom: 10,
        letterSpacing: 0.9,
        fontFamily: "Raleway_100Thin_Italic",
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 15,
        fontSize: 16,
        backgroundColor: '#fff',
        fontFamily: "Raleway_100Thin_Italic",
        fontWeight: 300
    },
    inputFocused: {
        borderColor: '#9F1F72', // Change border color when focused
    },
    inputError: {
        borderColor: '#CB0003', // Change border color to red on error
    },
});

export default InputField;
