import { View, Text, StyleSheet, Button, Image } from "react-native"
import { useContext, useEffect } from "react"
import { WatchingContext } from "../../context/continueWatching"

export const MoviePage = ({ route, navigation }) => {
    const { Poster, Title, Year, Genre, imdbRating, Plot } = route.params || {}

    const { moviesWatching, addMovie } = useContext(WatchingContext);
    
    useEffect(() => {
        for (let i = 0; i < moviesWatching.length; i++) {
            if (moviesWatching[i].name == Title) {
                moviesWatching.splice(i, 1);
            }
        }

        //! Ta certo que isso aqui parece uma logica fudida de ruim, ainda preciso verificar se existe um valor menor para ser inserido um valor algo tipo if no indice tal é igual a nulo e se sim ele coloca nesse indice
        // mas como esse histórico so fica armazenado enquando o usuario esta dentro do sistema eu nao vejo motivos para trocar a logica
        let newId = String(parseInt(moviesWatching[moviesWatching.length - 1 ].id, 10) + 1);
        addMovie({
            id: newId,
            name: Title,
            moviesURL: Poster,
        });
    }, []);
    

    return (
        <View style={styles.body}>
            <Text style={styles.TitleText}>Página do filme!</Text>
            <Image source={{ uri: Poster }} style={{ width: 200, height: 300 }} />

            <View >
                <Text style={styles.text}>Nome do filme: {Title}</Text>
                <Text style={styles.text}>Ano de lancamento: {Year}</Text>
                <Text style={styles.text}>Genero do filme: {Genre}</Text>
                <Text style={styles.text}>Nota no IMDb: {imdbRating}</Text>
                <Text style={styles.text}>Sinopse: {Plot}</Text>
            </View>

            <Button title="Voltar" onPress={() => navigation.goBack()}/>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        height: "100%",
        backgroundColor: "#232F3E",
    },

    TitleText: {
        color: "white",
        marginTop: 70,
    }, 

    
    text: {
        paddingTop: 5,
        color: "white",
    }
});