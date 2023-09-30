import React from "react";
import { Text, View, Image , StyleSheet} from "react-native";
import { Entypo } from '@expo/vector-icons';

export default function Login1() {
    return (
        <View style={styles.container}>
            <View style={{width: 100, height:100, backgroundColor: "#111"}}></View>
            <View style={{width: 100, height:100, backgroundColor: "#111"}}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#00ccf9",
        alignItems: 'flex-end',
        justifyContent: 'center',
    }
});