
//Start signature to Callback event to Q_CUENTAAT_MR83
task.executeQueryCallback.Q_CUENTAAT_MR83 = function(entities, executeQueryCallbackEventArgs) {
     
    if(entities.Cuenta._data.length>0){
        
        contDatos++;
        
        origen={
          'apellido':entities.Cuenta._data[0].apellidoCliente,
            'cedula':entities.Cuenta._data[0].cedulaCliente,
            'nombre':entities.Cuenta._data[0].nombreCliente,
            'cuenta':entities.Cuenta._data[0].numeroCuenta,
            'saldo':entities.Cuenta._data[0].saldo,
            'tipoCuenta':entities.Cuenta._data[0].tipoCuenta
        };
        
        if(contDatos==2){
            executeQueryCallbackEventArgs.commons.api.viewState.show('VA_CANTIDADENSMJMI_254526');
            executeQueryCallbackEventArgs.commons.api.viewState.show('VA_VAIMAGEBUTTONNN_869526');
        }
        
    }
};
