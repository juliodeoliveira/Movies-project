import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, FlatList, ScrollView } from "react-native";
// import TrendingMovie from "./Sem título.jpeg";

import { TVSHOWSWATCHING } from "../../utils/tvshows/tvshowsWatching";
import { TVSHOWSPOPULARS } from "../../utils/tvshows/tvshowsPopular";

import { MOVIESWATCHING } from "../../utils/moviesWatching";
import { MovieCards } from "../../components/MovieCards";
import { searchMovie } from "../../utils/searchMovies";
import { Category } from "../../components/CategoryCards";



const { width } = Dimensions.get('window');

export const TvShows = ({ navigation }) => {
    async function handleSearch(name) {
        const { movie, error } = await searchMovie(name);
    
        if (!error) {
            navigation.navigate('MoviePage', movie);
        } else {
            console.log("filme nao encontrado!");
        }
       // console.log(movie);
    }

    return (
        <ScrollView style={styles.body}>
            <View >
                <Text style={styles.title}>Mais assistido</Text>
                <TouchableOpacity style={styles.trendingMovieThumbnail} onPress={() => handleSearch("Fallout")}>
                    <Image
                        source={require('./fallout.jpeg')}
                        style={styles.trendingMovieImage}
                        resizeMode="cover"
                    />
                </TouchableOpacity>

                {/* Adicionar aqui uma validacao ou outra logica daquela dos filmes ou até mesmo usar os mesmos filmes */}
                <Text style={styles.title}>Bem avaliados</Text>
                <FlatList
                    data={TVSHOWSWATCHING}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => <MovieCards movieUrl={{uri: item.moviesURL}} alternative={item.name}/>}
                    horizontal
                    contentContainerStyle={styles.contentContainerList}
                    showsHorizontalScrollIndicator={false}
                />

                <Text style={styles.title}>Populares</Text>
                <FlatList
                    data={TVSHOWSPOPULARS}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => <MovieCards movieUrl={{uri: item.moviesURL}} alternative={item.name}/>}
                    horizontal
                    contentContainerStyle={styles.contentContainerList}
                    showsHorizontalScrollIndicator={false}
                />

                <Text style={styles.title}>Categorias</Text>
                <Category />
            </View>

            <View style={styles.footer}>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    body: {
        height: "100%",
        backgroundColor: "#232F3E",
    },

    title: {
        color: "#fff", 
        fontSize: 18,
        fontWeight: "700",
        padding: 15
    },

    trendingMovieImage: {
        flex: 1,
        width: width,
    },

    trendingMovieThumbnail: {
        height: 200,
        alignItems: "center",
    },

    footer: {
        margin: 20
    },

    contentContainerList: {
        marginLeft: 7,
        paddingLeft: 18,
        paddingRight: 30, 
    }
    
    // TODO: Para fazer aquele efeito de reflexo eu posso criar um gradiente na diagonal 
});