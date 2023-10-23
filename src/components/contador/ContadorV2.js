import React, {useState} from 'react';
import {Text} from 'react-native';
import Estilo from '../estilos';

import ContadorDisplay from './ContadorDisplay';

export default props => {
    const [num, setNum] = useState(0)
  return (
    <>
      <Text style={Estilo.txtGrande}>Contador</Text>
      <ContadorDisplay num={num}/>
    </>
  );
};
