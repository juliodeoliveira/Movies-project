// TODO: Para fazer aquele efeito de reflexo eu posso criar um gradiente na diagonal 
// TODO: Fazer uma lista que contenha todos as categorias e pegar delas e adicionar componente para cada, ou nao ja que tem apenas duas

import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";

export const Category = () => {

    return (
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.action} activeOpacity={0.7}>
                    <Text style={styles.actionText}>Ação{"\n"} e {"\n"}Aventura</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.fantasy} activeOpacity={0.7}>
                    <Text style={styles.fantasyText}>Fantasia</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.anime} activeOpacity={0.7}>
                    <Text style={styles.animeText}>Anime</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.others} activeOpacity={0.7}>
                    <Text style={styles.othersText}>Outras categorias</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

// TODO: Feito é melhor que perfeito, preciso voltar aqui e refatorar, tem muita coisa repetida
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },

    action: {
        backgroundColor: "red",
        marginLeft: 30,
        marginRight: 20,
        width: 139,
        height: 100, 
        borderRadius: 15,

        justifyContent: "center", // Centraliza verticalmente
        alignItems: "center",
    },

    actionText: {
        color: "white",
        textAlign: "center", // Centraliza o texto horizontalmente
        lineHeight: 20,
    },

    fantasy: {
        backgroundColor: "green",
        marginRight: 20,

        width: 139,
        height: 100, 
        borderRadius: 15,

        justifyContent: "center", // Centraliza verticalmente
        alignItems: "center",
    },  

    fantasyText: {
        color: "white",
        textAlign: "center", // Centraliza o texto horizontalmente
        lineHeight: 20,
    },
    
    anime: {
        backgroundColor: "purple",
        width: 139,
        height: 100, 
        borderRadius: 15,

        justifyContent: "center", // Centraliza verticalmente
        alignItems: "center",
    },

    animeText: {
        color: "white",
        textAlign: "center", // Centraliza o texto horizontalmente
        lineHeight: 20,
    },

    others: {
        backgroundColor: "yellow",
        marginLeft: 20,
        width: 139,
        height: 100, 
        borderRadius: 15,

        justifyContent: "center", // Centraliza verticalmente
        alignItems: "center",
    },

    othersText: {
        color: "black",
        textAlign: "center", // Centraliza o texto horizontalmente
        lineHeight: 20,
    },
});