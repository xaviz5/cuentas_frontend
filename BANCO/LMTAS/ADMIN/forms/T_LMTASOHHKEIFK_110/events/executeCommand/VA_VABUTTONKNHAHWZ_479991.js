

//Entity: CuentaAhorCorri
//CuentaAhorCorri. (Button) View: formConsultarCliente
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONKNHAHWZ_479991 = function(  entities, executeCommandEventArgs ) {
    executeCommandEventArgs.commons.api.vc.model.CuentaAhorCorri.idCliente=codCliente;
    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.CuentaAhorCorri = true;

};