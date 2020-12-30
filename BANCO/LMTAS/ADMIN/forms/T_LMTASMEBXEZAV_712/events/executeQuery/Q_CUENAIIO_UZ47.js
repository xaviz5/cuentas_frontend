
//CuentaDestinoQuery Entity: CuentaDestino
task.executeQuery.Q_CUENAIIO_UZ47 = function(executeQueryEventArgs){
    executeQueryEventArgs.parameters.nroCuenta=executeQueryEventArgs.commons.api.vc.model.FiltroCuentaDestino.numeroCuenta;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.CuentaDestino = true;
};