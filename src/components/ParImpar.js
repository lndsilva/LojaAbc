import React from 'react';
import {Text, View} from 'react-native';
import Estilo from './estilos';

export default ({num = 0}) => {
    return (
        <View>
            
                <Text style={Estilo.txtGrande}>O resultado é</Text>
                {
                num % 2 === 0
                    ? <Text style={Estilo.txtGrande}>Par</Text>
                    : <Text style={Estilo.txtGrande}>Ímpar</Text>
            }
        </View>    
    )  
};
