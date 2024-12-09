
import { View, Text, StyleSheet } from "react-native";

export const Kids = () => {
    return (
        <View style={styles.body}>
            <Text style={styles.text}>Kid's section!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        height: "100%",
        backgroundColor: "#232F3E",
    },

    text: {
        color: "white"
    }
});