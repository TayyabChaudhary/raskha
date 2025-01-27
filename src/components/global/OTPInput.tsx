import React, { useState, useEffect, useRef } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    TextInputProps,
} from 'react-native';

import { Raleway_300Light } from "@expo-google-fonts/raleway";


interface OTPInputProps {
    label: string;
    codeLength?: number;
    countdown?: number;
    onResend?: () => void;
    error?: any;
    onChangeText?: any;
}

const OTPInput: React.FC<OTPInputProps> = ({
    label,
    codeLength = 4,
    countdown = 60,
    onResend,
    error,
    onChangeText,
}) => {
    const [code, setCode] = useState<string[] | any>(Array(codeLength).fill(''));
    const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
    const [timeLeft, setTimeLeft] = useState<number>(countdown);
    const inputsRef = useRef<TextInput[]>([]);

    // Countdown Timer
    useEffect(() => {
        if (timeLeft <= 0) return;
        const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
        return () => clearInterval(timer);
    }, [timeLeft]);

    // Handle OTP Input Change
    const handleInputChange = (text: string, index: number) => {
        const newCode = [...code];
        newCode[index] = text;
        setCode(newCode);
        // onChangeText(newCode.join(''));
        // Move to next input
        if (text && index < codeLength - 1) {
            inputsRef.current[index + 1]?.focus();
        }
    };

    // Handle Backspace
    const handleKeyPress = (e: any, index: number) => {
        if (e.nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
            inputsRef.current[index - 1]?.focus();
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.flexRow}>
                <Text style={styles.label}>{label}</Text>
                <TouchableOpacity onPress={() => { onResend?.(); setTimeLeft(countdown); }}>
                    <Text style={styles.resendText}>Didn't get the code? <Text style={styles.textResend}>Resend</Text></Text>
                </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
                {Array(codeLength)
                    .fill(0)
                    .map((_, index) => (
                        <TextInput
                            key={index}
                            ref={(ref) => (inputsRef.current[index] = ref!)}
                            value={code[index]}
                            onChangeText={(text) => handleInputChange(text, index)}
                            onKeyPress={(e) => handleKeyPress(e, index)}
                            onFocus={() => setFocusedIndex(index)}
                            onBlur={() => setFocusedIndex(null)}
                            selectionColor="#9F1F72"
                            style={[
                                styles.input,
                                focusedIndex === index && styles.inputFocused,
                                error && styles.inputError,
                            ]}
                            keyboardType="numeric"
                            maxLength={1}
                        />
                    ))}
                    
            </View>
            {error && <Text style={{ color: '#CB0003', fontSize: 13, marginTop: 13, fontWeight: 300, fontFamily: 'Raleway_300Light' }}>{error}</Text>}
            {/* Countdown Timer and Resend Button */}
            {/* {timeLeft > 0 && (
                <Text style={styles.timerText}>
                    <Text style={styles.remaingTime}>Remaining time </Text>
                    00:{timeLeft}</Text>
            )} */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'medium',
        color: '#333'
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    flexRow: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    remaingTime: {
        marginTop: 10,
        fontSize: 14,
        fontWeight: 400,
        color: '#777',
    },
    input: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        textAlign: 'center',
        fontSize: 20,
        color: '#333',
        backgroundColor: '#fff',
    },
    inputFocused: {
        borderColor: '#9F1F72',
    },
    inputError: {
        borderColor: '#CB0003', // Red border for error
    },
    timerText: {
        marginTop: 10,
        fontSize: 14,
        color: '#9F1F72',
    },
    resendText: {
        fontSize: 14,
        color: '#777',
        fontWeight: 300,
    },
    textResend: {
        fontSize: 14,
        color: '#9F1F72',
        fontWeight: 300,
    }
});

export default OTPInput;
