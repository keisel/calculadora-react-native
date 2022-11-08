import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import { styles } from '../theme/appTheme'

interface Props{
    number:string;
    color?:string;
    colorText?:string,
    ancho?:boolean,
    accion: (numeroTexto:string) => void;
}

export const BotonCalc=({number, color='#2D2D2D', colorText='white', ancho=false,accion}:Props)=>{

        return(
            <TouchableOpacity onPress={()=>accion(number)}>
                <View style={{...styles.boton, backgroundColor:color, width:ancho ? 180 : 80}}>
                    <Text style={{...styles.botonText,color:colorText}}>{number}</Text>
                </View>
            </TouchableOpacity>
        )

}