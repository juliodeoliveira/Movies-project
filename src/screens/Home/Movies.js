import { View, Text, StyleSheet } from "react-native";

export const Movies = () => {
    return (
        <View style={styles.body}>
            <Text style={styles.text}>Filmes!</Text>
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