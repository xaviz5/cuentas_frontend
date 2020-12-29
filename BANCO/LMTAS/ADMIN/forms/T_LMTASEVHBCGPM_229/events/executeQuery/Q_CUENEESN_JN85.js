
//CuentaDestinoQuery Entity: CuentaDestino
task.executeQuery.Q_CUENEESN_JN85 = function(executeQueryEventArgs){
    executeQueryEventArgs.parameters.numCuenta=executeQueryEventArgs.commons.api.vc.model.FiltroCuentaDestino.numCuentaDestino;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.CuentaDestino = true;
};