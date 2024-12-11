import { View, Text, StyleSheet, Button, Image } from "react-native"
import { useContext, useEffect } from "react"
import { WatchingContext } from "../../context/continueWatching"

export const MoviePage = ({ route, navigation }) => {
    const { Poster, Title, Year, Genre, imdbRating, Plot } = route.params || {}

    const { moviesWatching, addMovie } = useContext(WatchingContext);
    
    useEffect(() => {

        for (let i = 0; i < moviesWatching.length; i++) {
            if (moviesWatching[i].name == Title) {
                console.log("Filme já adicionado no histórico!");
                return;
            }
        }
        
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