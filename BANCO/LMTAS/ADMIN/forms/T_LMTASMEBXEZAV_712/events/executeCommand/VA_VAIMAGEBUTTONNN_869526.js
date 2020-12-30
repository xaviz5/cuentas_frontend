

//Entity: Transferencia
//Transferencia. (ImageButton) View: formTransferenciaCuenta
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VAIMAGEBUTTONNN_869526 = function(  entities, executeCommandEventArgs ) {
    
    entities.Transferencia.cuentaOrigen=origen.cuenta;
    entities.Transferencia.cuentaDestino=destino.cuenta;
    entities.Transferencia.tipoCuenta=origen.tipoCuenta;
    entities.Transferencia.tipoCuentaDestino=destino.tipoCuenta;
    
    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.Transferencia = true;

};