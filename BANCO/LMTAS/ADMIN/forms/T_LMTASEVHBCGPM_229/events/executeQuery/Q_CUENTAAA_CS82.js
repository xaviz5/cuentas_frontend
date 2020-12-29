
//CuentaQuery Entity: Cuenta
task.executeQuery.Q_CUENTAAA_CS82 = function(executeQueryEventArgs){
    executeQueryEventArgs.parameters.nroCuenta=executeQueryEventArgs.commons.api.vc.model.FiltroCuenta.numeroCuenta;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.Cuenta = true;
};