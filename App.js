import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useFonts, Quicksand_400Regular, Quicksand_700Bold } from '@expo-google-fonts/quicksand';

export default function App() {
  const [fontsLoaded] = useFonts({
    Quicksand_400Regular,
    Quicksand_700Bold,
  });

  const CzechIconPress = () => {
    console.log('Czech Icon Pressed!');
  };
  const EnglishIconPress = () => {
    console.log('English Icon Pressed!');
  };
  const AstronomieBtnPress = () => {
    console.log('AstronomieBtn Pressed!');
  };
  const PočítačovévědyBtnPress = () => {
    console.log('PočítačovévědyBtn Pressed!');
  };
  const ZajímaváFaktaBtnPress = () => {
    console.log('ZajímaváFaktaBtn Pressed!');
  };
  

  return (
    <View style={styles.container}>
      <Image style={styles.backgroundStars}
        source={require('./assets/icons/StarsDsg.png')}
      />      

      <TouchableOpacity onPress={CzechIconPress} style={styles.CzechIconPressTO}>
            <Image style={styles.iconCzech}
              source={require('./assets/icons/czech-republic.png')}
            />
      </TouchableOpacity>

      <TouchableOpacity onPress={EnglishIconPress} style={styles.EnglishIconPressTO}>
            <Image style={styles.iconEnglish}
              source={require('./assets/icons/united-kingdom.png')}
            />
      </TouchableOpacity>

      <Text style={styles.welcome}>vítejte v</Text>

      <Text style={styles.welcome2}>EduPengu</Text>



      <TouchableOpacity onPress={AstronomieBtnPress} style={styles.AstronomieTO}>
        <Image style={styles.pengu1}
          source={require('./assets/icons/pengu1.png')}
        />
        <View style={styles.AstronomieBtn}>
          <Text style={styles.AstronomieTxt}>Astronomie</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={PočítačovévědyBtnPress} style={styles.PočítačovévědyTO}>
        <View style={styles.PočítačovévědyBtn}>
          <Text style={styles.PočítačovévědyTxt}>Počítačové vědy</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={ZajímaváFaktaBtnPress} style={styles.ZajímaváFaktaTO}>
        <View style={styles.ZajímaváFaktaBtn}>
          <Text style={styles.ZajímaváFaktaTxt}>Zajímavá Fakta</Text>
        </View>
      </TouchableOpacity>

      <Image style={styles.iconMars}
        source={require('./assets/icons/MarsDsg.png')}
      />

      <Image style={styles.iconSaturn}
        source={require('./assets/icons/SaturnDsg.png')}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080416',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 22,
    color: '#3DB9FF',
    fontFamily: 'Quicksand_700Bold',
    position: 'absolute',
    top: 60,
    left: 77,
  },
  welcome2: {
    fontSize: 50,
    color: '#fff',
    fontFamily: 'Quicksand_700Bold',
    position: 'absolute',
    top: 80,
  },
  CzechIconPressTO: {
    position: 'absolute',
    top: 45,
    right: 50,
  },
  iconCzech: {
    width: 23,
    height: 23,
  },
  EnglishIconPressTO: {
    position: 'absolute',
    top: 45,
    right: 18,
  },
  iconEnglish: {
    width: 23,
    height: 23,
  },
  AstronomieTO: {
    position: 'absolute',
    width: '75%',
    top: 220,
  },
  AstronomieBtn: {
    backgroundColor: '#3DB9FF',
    height: 50,
    alignItems: 'center', 
    justifyContent: 'center',
    borderRadius: 40,
  },
  AstronomieTxt: {
    color: '#fff',
    fontFamily: 'Quicksand_700Bold',
    fontSize: 23,
  },
  pengu1: {
    width: 115,
    height: 115,
    position: 'absolute',
    bottom: 21,
    left: 30,
  },
  PočítačovévědyTO: {
    position: 'absolute',
    width: '75%',
    top: 282,
  },
  PočítačovévědyBtn: {
    backgroundColor: '#FF543D',
    height: 50,
    alignItems: 'center', 
    justifyContent: 'center',
    borderRadius: 40,
  },
  PočítačovévědyTxt: {
    color: '#fff',
    fontFamily: 'Quicksand_700Bold',
    fontSize: 23,
  },
  ZajímaváFaktaTO: {
    position: 'absolute',
    width: '75%',
    top: 344,
  },
  ZajímaváFaktaBtn: {
    backgroundColor: '#F87D2D',
    height: 50,
    alignItems: 'center', 
    justifyContent: 'center',
    borderRadius: 40,
  },
  ZajímaváFaktaTxt: {
    color: '#fff',
    fontFamily: 'Quicksand_700Bold',
    fontSize: 23,
  },
  iconMars:{
    height: 135,
    width: 135,
    position: 'absolute',
    top: 460,
    left: 35,
  },
  iconSaturn:{
    height: 180,
    width: 325,
    position: 'absolute',
    bottom: 85,
    left: 65,
  },
  backgroundStars: {
    position: 'relative',
    width: '100%',
    height: '100%',
  }
});
