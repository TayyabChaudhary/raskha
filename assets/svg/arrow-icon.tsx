import { View, Text, TouchableOpacity, Platform } from 'react-native'
import React from 'react'
import Svg, { Path } from 'react-native-svg'
export default function ArrowIcon({ onPress }: { onPress: () => void }) {
    return (
        <TouchableOpacity onPress={onPress} style={{ position: 'absolute', top: 7, left: Platform.OS === 'ios' ? -125 : -110 }}>
            <Svg width="30" height="20" viewBox="0 0 9 14" fill="none">
                <Path
                    d="M7.71442 1L1.00006 6.87506L7.71442 12.7501" stroke="white" stroke-width="1.46877" stroke-linecap="round" stroke-linejoin="round"
                />
            </Svg>
        </TouchableOpacity>
    )
}
