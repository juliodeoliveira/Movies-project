import { TouchableOpacity, StyleSheet, Image } from "react-native";
import { searchMovie } from "../../utils/searchMovies";
import { useNavigation } from '@react-navigation/native';

export const MovieCards = (props) => {
    const navigation = useNavigation();

    async function handleSearch(name) {
        const { movie, error } = await searchMovie(name);
  
        if (!error) {
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

// style={{ width: 200, height: 300, marginBottom: 10 }}
const styles = StyleSheet.create({
    image: {
        marginRight: 20,
        borderRadius: 10,
        width: 200,
        height: 300
    }
});