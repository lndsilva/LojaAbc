import React from 'react';
import {Text} from 'react-native';
import Estilo from './estilos';

export default (param) => {
  console.warn(param);
  return (
        <Text style={Estilo.txtGrande}>
            O valor x é maior que o valor y
        </Text>
  );
};

