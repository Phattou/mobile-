import React from "react";
import { Text, View, Image , StyleSheet} from "react-native";
import { Entypo } from '@expo/vector-icons';

export default function Login1() {
    return (
        <View style={styles.container}>
            <Entypo name="circle" size={120} color="black" />
            <Text style={styles.text1}>GROW YOUR BUSINESS</Text>
            <Text>We will help you to grow your business using online server</Text>
            <View style={styles.loginsignup}>
                <View style={styles.login}><Text>LOGIN</Text></View>
                <View style={styles.login}><Text>SIGN UP</Text></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#00ccf9",
        alignItems: 'center',
        justifyContent: 'center',
    },
    text1: {
        fontSize: 30,
        color: "#111",
        fontWeight: "bold",
        marginTop: 20,
    },
    loginsignup: {
        flexDirection: "row",
        marginTop: 20,
        justifyContent: "space-between",
        width: "70%",
    },
    login: {
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
});