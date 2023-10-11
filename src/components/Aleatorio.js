import React from "react";
import { Text } from "react-native";
import Estilo from './estilos'

export default ({min,max}) => {
    const delta = max - min + 1
    const aleatorio = parseInt(Math.random() * delta)+ min
    return (
        <Text style={Estilo.txtGrande}>
            O valor aleatório é {aleatorio}
        </Text>
    )
}