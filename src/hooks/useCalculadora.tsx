import {useState,useRef} from 'react'

enum Operadores{
    sumar, restar, multiplicar, dividir
}

export const useCalculadora=()=>{

    const [numero, setNumero] = useState('0')
    const [numeroAnterior, setNumeroAnterior]=useState('0')
    
    const  ultimaOperacion = useRef<Operadores>()
    
    const limpiar=()=>{
        setNumero('0')
        setNumeroAnterior('0')
    }

    const botonDividir=()=>{
        cambiarNumero()
        ultimaOperacion.current=Operadores.dividir
    }

    const botonMultiplicar=()=>{
        cambiarNumero()
        ultimaOperacion.current=Operadores.multiplicar
    }

    const botonSumar=()=>{
        cambiarNumero()
        ultimaOperacion.current=Operadores.sumar
    }

    const botonRestar=()=>{
        cambiarNumero()
        ultimaOperacion.current=Operadores.restar
    }

    const armarNumero=(numeroTexto:string)=>{
        // Si el numero completo ya tiene un punto, y el numero que esta tocando el usuario
        // es el punto, entonces se omite esta nuevo punto


        if(numero.includes('.') && numeroTexto=='.')return;

        if(numero.startsWith('0') || numero.startsWith('-0')){

            if(numeroTexto==='.'){
                setNumero(numero+numeroTexto)

                //evaluar si hay otro cero y hay un punto 
            }else if(numeroTexto==='0' && numero.includes('.')){
                setNumero(numero+numeroTexto)

                // evaluar si es diferente de cero y no tiene  otro punto
            }else if(numeroTexto!=='0' && !numero.includes('.')){
                setNumero(numeroTexto)

            }else if(numeroTexto==='0' && !numero.includes('.')){
                setNumero(numero)
            }else{
                setNumero(numero+numeroTexto)
            }

        }else{
            setNumero(numero+numeroTexto)
        }

    }

    const del=(numeroText:string)=>{
        if(numeroText=='del'){
            if(numero.startsWith('-') && numero.length==2){
                setNumero('0')
            }
            else if(numero.length==1){ 
                setNumero('0')
            }else{
                setNumero(numero.slice(0,numero.length-1))
            }
        }
    }

    const cambiarNumero=()=>{ 
        if(numero.endsWith('.')){
            setNumeroAnterior(numero.slice(0,-1))
        }else{
            setNumeroAnterior(numero)
        }
        setNumero('0')
    }

    const positivoNegativo=()=>{
        if(numero.includes('-')){
            setNumero(numero.replace('-',''))
        }else {
            setNumero('-'+ numero)
        }
    }

    const calcular=()=>{
        const num1 = Number(numero)
        const num2 = Number(numeroAnterior)

        switch (ultimaOperacion.current) {
            case Operadores.sumar:
                setNumero(`${num1 + num2}`)
                break;
            case Operadores.restar:
                setNumero(`${num2 -num1  }`)
                break;
            case Operadores.multiplicar:
                setNumero(`${num1 * num2}`)
                break;
            case Operadores.dividir:
                setNumero(`${num2 /num1  }`)
                break;
            default:
                break;
        }
        setNumeroAnterior('0')
    }
        
    return{numero, numeroAnterior, limpiar, botonDividir, botonMultiplicar, botonSumar,botonRestar,armarNumero,del,cambiarNumero,positivoNegativo,calcular}
}