

//Entity: Transferencia
//Transferencia. (ImageButton) View: formTransferenciaCuenta
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VAIMAGEBUTTONNN_604827 = function(  entities, executeCommandEventArgs ) {

    entities.Transferencia.cuentaDestino=destino.cuenta;
    entities.Transferencia.cuentaOrigen=origen.cuenta;
    entities.Transferencia.tipoCuentaDestino=destino.tipoCuenta;
    entities.Transferencia.tipoCuentaOrigen=origen.tipoCuenta;   
    
    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.Transferencia = true;

};