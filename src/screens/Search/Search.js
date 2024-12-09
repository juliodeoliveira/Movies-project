import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image, TouchableOpacity, Alert } from "react-native";

// import searchFunction from "utils path";
import { searchMovie } from '../../utils/searchMovies';

export const Search = ({ navigation }) => {
    const [error, setError] = useState('');
    const [movie, setMovie] = useState("");
    const [text, setText] = useState('');
    
    const handleSearch = async () => {
        const { movie, error } = await searchMovie(text);
        setMovie(movie);
        setError(error);
    }

    // const searchMovie = async (query) => {
    //     setMovie(''); 
    //     setError('');

    //     const API_KEY = '9fb417';
    //     try {
    //         const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&t=${query}`);
    //         const data = await response.json()
    //         if (data.Response === 'True') {
    //             setMovie(data);
    //             console.log(movie.Poster);
    //         } else {
    //             setError("Filme não encontrado!");
    //         }
    //     } catch (err) {
    //         setError('Erro ao buscar os dados!');
    //         console.log(err);
    //     }
    // }

    // const moviePage = () => {
    //     Alert.alert(
    //         'Aviso!',
    //         'Esse botao deve levar o usuario para a pagina do filme!',
    //         [
    //           {
    //             text: 'Cancelar',
    //             onPress: () => console.log('Cancelar pressionado'),
    //             style: 'cancel', // Estilo do botão Cancelar
    //           },
    //           {
    //             text: 'OK',
    //             onPress: () => console.log('OK pressionado'),
    //           },
    //         ],
    //         { cancelable: true } // Não fecha a caixa de diálogo clicando fora dela
    //     );    
    // }

    return (
        <View style={styles.body}>
            <Text style={styles.text}>Tela de pesquisa de filmes/series</Text>
            <TextInput style={styles.input} value={text} onChangeText={(input) => setText(input)} placeholder='Teste'/>
            <Button title="Clique aqui para pesquisar" onPress={() => { handleSearch(text) }} />
            {error ? <Text style={styles.error}>{error}</Text> : null}
            {movie && (
                <TouchableOpacity activeOpacity={0.9} onPress={() => console.log(navigation.navigate('MoviePage', movie))}>
                    <View style={styles.movieDetails}>
                        <Image style={styles.img} source={{uri: movie.Poster}}/>
                        <View style={styles.textContainer}>
                            {/* <Text>Foto: {movie.Poster}</Text> */}
                            <Text>Filme: {movie.Title}</Text>
                            <Text>Ano: {movie.Year}</Text>
                            <Text>Classificação IMDb: {movie.imdbRating}</Text>
                            {/* <Text>Resumo: {movie.Plot}</Text> */}
                        </View>
                    </View>
                </TouchableOpacity>
            )}
            
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        height: "100%",
        backgroundColor: "#232F3E",
    },

    text: {
        paddingTop: 100,
        color: "white"
    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderColor: "white",
        color: "white",
        padding: 10,
    },

    movieDetails: {
        flexDirection: 'row',
        padding: 10, 
        backgroundColor: "white"
    },

    img: {
        width: 100, 
        height: 150, 
        marginRight: 15, 
        borderRadius: 8,
    },

    textContainer: {
        flex: 1, // Faz o container de texto ocupar o restante do espaço
        justifyContent: 'center', // Alinha o texto verticalmente no centro
    },
});