import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView, Dimensions } from "react-native";
import React, { useContext, useState } from 'react';

import TrendingMovie from "../../assets/movies/the_wheel_of_time.png";
import bigTrendingMovie from "../../assets/movies/bigTime.jpg";
import { searchMovie } from "../../utils/searchMovies";

import { WatchingContext } from "./../../../src/context/continueWatching";

import { MOVIESWATCHING } from "../../utils/moviesWatching";
import { MOVIESCRIMES } from "../../utils/moviesCrimes";
import { MOVIESWATCH } from "../../utils/moviesWatch";
import { MovieCards } from "../../components/MovieCards";

const { width } = Dimensions.get('window');

export const Home = ({ navigation }) => {
    const { moviesWatching } = useContext(WatchingContext);
    
    // console.log(moviesWatching);
        
    var imagem;
    if (width > 412) {
        imagem = bigTrendingMovie;
    } else {
        imagem = TrendingMovie;
    }

    async function handleSearch(name) {
        const { movie, error } = await searchMovie(name);

        if (!error) {
            navigation.navigate('MoviePage', movie);
        } else {
            console.log("Wheel of time naossss encontrado!");
        }

    }

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}} >
                {/* <View style={styles.header}>
                    <Image style={styles.PrimeVideoLogoImg} source={PrimeVideoLogo}/> 
                    <Image style={styles.AmazonLogoImg} source={AmazonLogo}/>
                </View> */}

                <TouchableOpacity style={styles.trendingMovieThumbnail} onPress={() => handleSearch("Wheel of Time")}>
                    <Image 
                        source={imagem} 
                        style={styles.trendingMovieImage} 
                        resizeMode="cover"
                    />
                </TouchableOpacity>

                <Text style={styles.title}>Continue Watching</Text> 
                <FlatList 
                    data={moviesWatching} 
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => {
                        return <MovieCards movieUrl={{uri: item.moviesURL}} alternative={item.name}/>
                    }}
                    horizontal
                    contentContainerStyle={styles.contentContainerList}
                    showsHorizontalScrollIndicator={false}
                />

                <Text style={styles.title}>Crime movies</Text>
                <FlatList 
                    data={MOVIESCRIMES} 
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => <MovieCards movieUrl={item.moviesURL} alternative={item.name}/>}
                    horizontal
                    contentContainerStyle={styles.contentContainerList}
                    showsHorizontalScrollIndicator={false}
                />

                <Text style={styles.title} >Watch in your language</Text>
                <FlatList 
                    data={MOVIESWATCH} 
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => <MovieCards movieUrl={item.moviesURL} />}
                    horizontal
                    contentContainerStyle={styles.contentContainerList}
                    showsHorizontalScrollIndicator={false}
                />
                
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: "#232F3E",
    alignItems: "flex-start",
   },

   category: {
    width: "100%",
    flexDirection: "row", 
    justifyContent: "space-evenly",
    marginTop: 30,
    marginBottom: 15,
   }, 

   header: {
    width: "100%",
    paddingTop: 40,
    alignItems: "center",
    justifyContent: "center"
   }, 

   PrimeVideoLogoImg: {

   }, 
   
   AmazonLogoImg: {
    marginTop: -45,
    marginLeft: 30,
    marginBottom: 30,
   }, 

   categoryText: {
    fontSize: 16, 
    fontWeight: "900", 
    color: "#fff"
   }, 

   trendingMovieThumbnail: {
    width: "100%",
    alignItems: "center", 
   }, 

   trendingMovieImage: {
    flex: 1,
    width: width,
    
   }, 

   title: {
    color: "#fff", 
    fontSize: 18,
    fontWeight: "700",
    padding: 15
   },

   contentContainerList: {
    marginLeft: 7,
    paddingLeft: 18,
    paddingRight: 30, 
   }
});