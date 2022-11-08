import React, {useState,useRef} from 'react'
import {View, Text, Button} from 'react-native'
import { BotonCalc } from '../components/BotonCalc'
import { styles } from '../theme/appTheme'
import { useCalculadora } from '../hooks/useCalculadora'

export const CalculadoraScreen=()=>{

    const {numero, numeroAnterior, limpiar, botonDividir, botonMultiplicar, botonSumar,botonRestar,armarNumero,del,positivoNegativo,calcular} = useCalculadora()

    return(
        <View style={styles.calculadoraContainer}>
            {(numeroAnterior!=='0' ) && (
                <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>

            )}
            <Text style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit
            >{numero}</Text>

            <View style={styles.row}>
               <BotonCalc number='c' color='#9B9B9B' colorText='black' accion={limpiar}  />
               <BotonCalc number='+/-' color='#9B9B9B' accion={positivoNegativo} colorText='black'/>
               <BotonCalc number='del' accion={del} color='#9B9B9B' colorText='black'/>
               <BotonCalc number='÷' accion={botonDividir} color='#FF9427'/>
            </View>
            <View style={styles.row}>
               <BotonCalc number='7'  accion={armarNumero}/>
               <BotonCalc number='8'  accion={armarNumero}/>
               <BotonCalc number='9'  accion={armarNumero}/>
               <BotonCalc number='X' accion={botonMultiplicar} color='#FF9427'/>
            </View>
            <View style={styles.row}>
               <BotonCalc number='4'  accion={armarNumero}/>
               <BotonCalc number='5'  accion={armarNumero}/>
               <BotonCalc number='6'  accion={armarNumero}/>
               <BotonCalc number='-'  accion={botonRestar} color='#FF9427'/>
            </View>
            <View style={styles.row}>
               <BotonCalc number='1'   accion={armarNumero}/>
               <BotonCalc number='2'  accion={armarNumero}/>
               <BotonCalc number='3'  accion={armarNumero}/>
               <BotonCalc number='+'  accion={botonSumar} color='#FF9427'/>
            </View>
            <View style={styles.row}>
               <BotonCalc number='0' accion={armarNumero} ancho={true} />
               <BotonCalc number='.' accion={armarNumero}/>
               <BotonCalc number='='  accion={calcular} color='#FF9427' />
            </View>
        </View>
    )
}