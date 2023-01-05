alert ("BIENVENIDO A HOTEL AMSTERDAM ")


function menuPrincipal(){
    let total = 0
    let menu

    menu = prompt ("¿Desea reservar una habitación en nuestro hotel? \n 1- SI \n 2- NO" )
    menu = parseInt(menu)
    switch (menu){
        case 1 : reservarHabitacion()
        break
        case 2 : alert("Gracias por su visita!!!")
        break
        default : alert ("opcion invalida")
    }
    //do{
    //} while (menu !=3)

    function reservarHabitacion(){
        let acumulador = 0
        
        let tipo = prompt ("Ingrese la habitación que desea reservar: \n 1 - Suite Vip con terraza \n 2 - Suite Vip con balcón francés \n 3 - Habitación Panorámica \n 4 - Habitación Superior \n 5 - Habitación Ejecutiva \n 6 - Habitación Estándar")
        

        tipo = parseInt(tipo)
        
        switch (tipo){
            case 1 : acumulador = acumulador + 18000
            alert ("El valor de la habitaciòn es de: $"+ acumulador)
            break
            case 2 : acumulador = acumulador + 15000 
            alert  ("El valor de la habitaciòn es de: $"+ acumulador)
            break
            case 3 : acumulador = acumulador + 12000
            alert  ("El valor de la habitaciòn es de: $"+ acumulador)
            break
            case 4 : acumulador = acumulador + 12000 
            alert  ("El valor de la habitaciòn es de: $"+ acumulador)
            break
            case 5 : acumulador = acumulador + 10000 
            alert  ("El valor de la habitaciòn es de: $"+ acumulador)
            break
            case 6 : acumulador = acumulador + 8000 
            alert  ("El valor de la habitaciòn es de: $"+ acumulador)
            break
            default : alert ("opcion invalida")
            }
            return acumulador
    }

}



//function reservarAdicionales(){}

menuPrincipal()