import { View, Text, StyleSheet } from "react-native";

export const Settigs = () =>  {
    return (
        <View style={styles.body}>
            <Text style={styles.text}>Texto das Configuracoes!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        height: "100%",
        backgroundColor: "#232F3E",
    },

    text: {
        paddingTop: 150,
        color: "white"
    }
});