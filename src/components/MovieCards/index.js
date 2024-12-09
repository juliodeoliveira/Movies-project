import { TouchableOpacity, StyleSheet, Image } from "react-native";
import { searchMovie } from "../../utils/searchMovies";
import { useNavigation } from '@react-navigation/native';
import { MOVIESWATCHING } from "../../utils/moviesWatching";

// todo: Adicionar sistema de adicionar no JSON os filmes recentemente acessados ou assistidos!

export const MovieCards = (props) => {

    const navigation = useNavigation(); // Obtém o objeto de navegação

    async function handleSearch(name) {
        const { movie, error } = await searchMovie(name);
        // MOVIESWATCHING.push({
        //     id: "3",
        //     name: "Indiana Jones",
        //     moviesURL: "Url da imagem do filme/serie"
        // })
        // console.log(MOVIESWATCHING);
        
        if (!error) {
            //console.log(movie);
            navigation.navigate('MoviePage', movie);
        } else {
            console.log(name + " nao encontrado!");
        }
    }

    return (
        <TouchableOpacity onPress={() => handleSearch(props.alternative)}>
            <Image style={styles.image} source={props.movieUrl} alt={props.alternative}/>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    image: {
        marginRight: 20,
        borderRadius: 10
    }
});