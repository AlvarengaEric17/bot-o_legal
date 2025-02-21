import React from "react"

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function Button({ title, onPress }) {
    
    return( 
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>
                    {title}
                    
                </Text>
            </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        backgroundColor: "#6200EE",
        padding: 10,
        borderRadius: 8,
        alignItems: "center",

    },

    buttonText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",

    }
})

