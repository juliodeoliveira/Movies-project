import { View, Text, StyleSheet, Button, Image } from "react-native"
import { useContext, useEffect } from "react"
import { WatchingContext } from "../../context/continueWatching"

export const MoviePage = ({ route, navigation }) => {
    const { Poster, Title, Year, Genre, imdbRating, Plot } = route.params || {}

    const { moviesWatching, addMovie } = useContext(WatchingContext);
    
    // TODO: Validar se ja existe um filme com esse nome ou com mesma URL se sim, nao deixa adicionar no continuewatching
    useEffect(() => {
        addMovie({
            id: String(moviesWatching.length + 1),
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