

//Entity: CuentaAux
//CuentaAux. (ImageButton) View: formRetiro
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VAIMAGEBUTTONNN_333391 = function(  entities, executeCommandEventArgs ) {
executeQueryEventArgs.parameters.numCuenta=executeQueryEventArgs.commons.api.vc.model.CuentaAux.numeroCuenta;
    executeCommandEventArgs.commons.execServer = true;

};