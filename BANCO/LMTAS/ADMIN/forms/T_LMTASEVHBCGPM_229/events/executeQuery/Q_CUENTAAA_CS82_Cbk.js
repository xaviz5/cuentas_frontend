
//Start signature to Callback event to Q_CUENTAAA_CS82
task.executeQueryCallback.Q_CUENTAAA_CS82 = function(entities, executeQueryCallbackEventArgs) {
     //here your code
    
    if(entities.Cuenta._data.length>0){
       contDatos++;
        
        origen={
        'cuenta':entities.Cuenta._data[0].numeroCuenta,
        'saldo':entities.Cuenta._data[0].saldo,
        'cedula':entities.Cuenta._data[0].cedulaCliente,
        'nombre':entities.Cuenta._data[0].nombreCliente,
        'apellido':entities.Cuenta._data[0].apellidoCliente,
        'tipoCuenta':entities.Cuenta._data[0].tipoCuenta
        };
    }
    
    if(contDatos==2){
    executeQueryCallbackEventArgs.commons.api.viewState.show('VA_CANTIDADSLHRTSR_486827');
    executeQueryCallbackEventArgs.commons.api.viewState.show('VA_VAIMAGEBUTTONNN_604827');   
    }
    
    
    
};
