
//Start signature to Callback event to Q_CUENAIIO_UZ47
task.executeQueryCallback.Q_CUENAIIO_UZ47 = function(entities, executeQueryCallbackEventArgs) {
     
    if(entities.CuentaDestino._data.length>0){
        
        contDatos++;
        
        destino={
          'apellido':entities.CuentaDestino._data[0].apellidoCliente,
            'cedula':entities.CuentaDestino._data[0].cedulaCliente,
            'nombre':entities.CuentaDestino._data[0].nombreCliente,
            'cuenta':entities.CuentaDestino._data[0].numeroCuenta,
            'saldo':entities.CuentaDestino._data[0].saldo,
            'tipoCuenta':entities.CuentaDestino._data[0].tipoCuenta
        };
        
        if(contDatos==2){
            executeQueryCallbackEventArgs.commons.api.viewState.show('VA_CANTIDADENSMJMI_254526');
            executeQueryCallbackEventArgs.commons.api.viewState.show('VA_VAIMAGEBUTTONNN_869526');
        }
        
    }
};
