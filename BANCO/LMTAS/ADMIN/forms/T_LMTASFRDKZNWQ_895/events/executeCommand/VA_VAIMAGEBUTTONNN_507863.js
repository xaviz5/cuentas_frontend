

//Entity: Retiro
//Retiro. (ImageButton) View: formRetiroCuenta
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VAIMAGEBUTTONNN_507863 = function(  entities, executeCommandEventArgs ) {

    entities.Retiro.numeroCuenta=numCuenta;
    entities.Retiro.tipoCuenta=tipoCuenta;
    
    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.Retiro = true;

};