import React from 'react';
import {Text} from 'react-native';
import Estilo from './estilos';

export default props => (
  <>
    <Text style={Estilo.txtGrande}>{props.principal}</Text>
    <Text>{props.secundario}</Text>
  </>
);
