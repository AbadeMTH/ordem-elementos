import Elementos from './src/Telas/Elementos';
import { useFonts, Signika_400Regular, Signika_700Bold } from '@expo-google-fonts/signika';
import { SafeAreaView, StatusBar } from 'react-native';

import AppLoading from 'expo-app-loading';

import mock from './src/mocks/mock';

export default function App() {

  const [fonteCarregada] = useFonts({
    'SignikaRegular': Signika_400Regular,
    'SignikaBold': Signika_700Bold
  });

  if(!fonteCarregada){
    return <AppLoading/>
  }

  return (
    <SafeAreaView>
      <StatusBar/>
      <Elementos {...mock}/>
    </SafeAreaView>
  );
}
