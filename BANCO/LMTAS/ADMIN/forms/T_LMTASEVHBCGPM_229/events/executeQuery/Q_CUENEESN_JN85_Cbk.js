
//Start signature to Callback event to Q_CUENEESN_JN85
task.executeQueryCallback.Q_CUENEESN_JN85 = function(entities, executeQueryCallbackEventArgs) {
    
    if(entities.CuentaDestino._data.length>0){
       contDatos++;
        
        destino={
        'cuenta':entities.CuentaDestino._data[0].numeroCuenta,
        'saldo':entities.CuentaDestino._data[0].saldo,
        'cedula':entities.CuentaDestino._data[0].cedulaCliente,
        'nombre':entities.CuentaDestino._data[0].nombreCliente,
        'apellido':entities.CuentaDestino._data[0].apellidoCliente,
        'tipoCuenta':entities.CuentaDestino._data[0].tipoCuenta
        };
    }
    
    if(contDatos==2){
    executeQueryCallbackEventArgs.commons.api.viewState.show('VA_CANTIDADSLHRTSR_486827');
    executeQueryCallbackEventArgs.commons.api.viewState.show('VA_VAIMAGEBUTTONNN_604827');   
    }
 
};
