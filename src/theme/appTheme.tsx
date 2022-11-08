
import {StyleSheet} from 'react-native'

export const styles=StyleSheet.create({
    fondo:{
        flex:1,
        backgroundColor:'black',
    },
    calculadoraContainer:{
        flex:1,
        paddingHorizontal:20,
        justifyContent:'flex-end',
    },
    resultado:{
        fontSize:60,
        color:'white',
        textAlign:'right',
        marginBottom:10
    },
    resultadoPequeno:{
        fontSize:30,
        color:'rgba(255,255,255,0.5)',
        textAlign:'right'
    },
    row:{
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:18,
        paddingHorizontal:10

    },
    boton:{
        width:80,
        height:80,
        backgroundColor:'#2D2D2D',
        borderRadius:100,
        justifyContent:'center',
        marginHorizontal:10,
    },
    botonText:{
        textAlign:'center',
        color:'white',
        padding:10,
        fontSize:30,
        fontWeight:'bold'
    }

})