import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, View, ScrollView, Animated } from 'react-native';
import BottomTabNavigator from './src/screens/Home/BottomTabNavigation';
import AmazonLogo from "./src/assets/amazon_logo.png";
import PrimeVideoLogo from "./src/assets/prime_video.png";
import MovieProvider from './src/context/continueWatching';

export default function App() {
  //ToastAndroid.show("Deu certo ein kk", ToastAndroid.SHORT);
  return (
    <>
    {/* Importante para deixar a logo do prime sem nenhuma borda branca aparecendo */}
      {/* <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom: -710}}> */}
        <View style={styles.header}>
          <Image style={styles.PrimeVideoLogoImg} source={PrimeVideoLogo}/> 
          <Image style={styles.AmazonLogoImg} source={AmazonLogo}/>
        </View>
      {/* </ScrollView> */}

      <StatusBar style="light" />
      <BottomTabNavigator/>
    </>
  );
}

const styles = StyleSheet.create({
  AmazonLogoImg: {
    marginTop: -45,
    marginLeft: 30,
    marginBottom: 10
   },

   header: {
    width: "100%",
    paddingTop: 70,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#232F3E",
    resizeMode: 'cover'
   },

  //  headerImage: {
  //   width: '100%',
  //   height: 200,
  //   resizeMode: 'cover',
  // },
});