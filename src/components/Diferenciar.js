import React from 'react';
import {Text, Platform} from 'react-native';
import Estilo from './estilos';

export default props => {
  if (Platform.OS === 'android') {
    return <Text style={Estilo.txtGrande}>Android</Text>;
  } else if (Platform.OS === 'macos') {
    return <Text style={Estilo.txtGrande}>IOS</Text>;
  } else {
    return <Text style={Estilo.txtGrande}>Outros!!!</Text>;
  }
};
