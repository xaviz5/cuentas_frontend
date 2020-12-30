
//TransaccionQuery Entity: Transaccion
task.executeQuery.Q_TRANCNSC_DO97 = function(executeQueryEventArgs){
    executeQueryEventArgs.parameters.numCuenta=executeQueryEventArgs.commons.api.vc.model.FiltroCuenta.numeroCuenta;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.Transaccion = true;
};