function ejercicio4(){
    console.log('ejercicio4');
    var numero1=ej4.n1.value;
    var numero2=ej4.n2.value;
    
    suma =  parseInt(ej4.n1.value)+parseInt(ej4.n2.value);
    resta = numero1 - numero2;
    multiplicar = numero1 * numero2;
    division = numero1 / numero2;
    resto = numero1 % numero2; 

   respuesta4.innerHTML="la resta es: " + resta + "<br>" + 
            "suma: " + suma + "<br>" +
            "multiplicar: " + multiplicar + "<br>" +
            "division: " + division + "<br>" +
            "resto: " + resto;
}

function ejercicio5(){
    
    let horastrabaja=ej5.n1.value;
    let preciohora=ej5.n2.value;
    let irpf=ej5.n3.value;

    sueldo = horastrabaja * preciohora;

    irpfnumero = irpf / 100;
    
    descuentoirpf = sueldo * irpfnumero ;

    sueldofinal = sueldo - descuentoirpf;

    respuesta5.innerHTML="el sueldo final es: " + sueldofinal;


}

function ejercicio6(){


conversion=parseInt((ej6.n1.value)*(60)*(60))+parseInt((ej6.n2.value)*(60))+parseInt(ej6.n3.value);


respuesta6.innerHTML=
"La conversion en segundos: " + conversion;
}

function ejercicio7(){
   
    
        let preciounidad=ej7.n1.value;
        let iva=ej7.n2.value;
        let cantidad=ej7.n3.value;
        let descuento=ej7.n4.value;
        
        bruto= preciounidad * cantidad ;
    
        descuentounidad = descuento / 100; //transformacion del descuento en %
      

         descuentocantidad = bruto * descuentounidad; // descuento de todas las unidades juntas

         descuentoresta = bruto - descuentocantidad; // la resta del descuento

        ivaporcentaje = iva / 100; // Iva en porcentaje
       
         descuentoconiva = descuentoresta * ivaporcentaje; // cantidad final * el iva


         preciofinal = descuentoresta + descuentoconiva; //operacion final


        respuesta7.innerHTML="el precio final es: " + preciofinal;
    
    
    }

    
/* function ejercicio7(){
   
    
       let preciounidad=ej7.n1.value;
       let iva=ej7.n2.value;
       let cantidad=ej7.n3.value;
       let descuento=ej7.n4.value;
        
    bruto= preciounidad * cantidad ;

     ivaporcentaje = iva / 100; // Iva en porcentaje
       
     descuentoconiva = (bruto - (bruto * (descuento / 100))) * ivaporcentaje; // cantidad final * el iva
      preciofinal = descuentoresta + descuentoconiva; //operacion final
     respuesta7.innerHTML="el sueldo final es: " + preciofinal;
    
} */


    

function ejercicio8(){
   
    

    
    totaliva=(ej8.n1.value);
        iva = 21/100;

        valor_iva = totaliva * iva;
        neto = totaliva-(valor_iva);


    

respuesta8.innerHTML="el IVA es " + valor_iva + " y el precio neto es de " + neto;
}

function ejercicio9(){
    
    let numero=(ej9.n1.value);
    let exponente=(ej9.n2.value);
    
    respuesta9.innerHTML="el precio final es: " + Math.pow(numero, exponente);

} 

function ejercicio10(){
    horas=(ej10.n1.value);
    const HORASMENSUALES=160

    let pagonormal=(ej10.n2.value);

    let pagoextra=(ej10.n3.value);

    let irpf=(ej10.n4.value);

    if(horas < 160) { 
        horasextras = horas - HORASMENSUALES;
        extras= horasextras * pagoextra;
        irpf = (irpf/100);
    }
    else(horas >= HORASMENSUALES) 
        phorasnormales = pagonormal * HORASMENSUALES;

        
    
    }







