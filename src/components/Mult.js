import React from 'react';
import {Text} from 'react-native';
import Estilo from './estilos';
import estilos from './estilos';

function Comp() {
  return <Text style={estilos.txtGrande}>Comp #Oficial</Text>;
}
function Comp1() {
  return <Text style={estilos.txtGrande}>Comp #01</Text>;
}
function Comp2() {
  return <Text style={estilos.txtGrande}>Comp #02</Text>;
}

export {Comp1, Comp2};
export default Comp;
