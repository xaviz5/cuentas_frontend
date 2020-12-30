
//CuentaQuery Entity: Cuenta
task.executeQuery.Q_CUENTAAT_MR83 = function(executeQueryEventArgs){
    
    executeQueryEventArgs.parameters.numCuenta=executeQueryEventArgs.commons.api.vc.model.FiltroCuenta.numeroCuenta;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.Cuenta = true;
};