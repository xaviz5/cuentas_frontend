

//Entity: Deposito
//Deposito. (ImageButton) View: formDepositarCuenta
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VAIMAGEBUTTONNN_236554 = function(  entities, executeCommandEventArgs ) {

    entities.Deposito.numeroCuenta=numCuenta;
    entities.Deposito.tipoCuenta=tipoCuenta;
    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.Deposito = true;

};