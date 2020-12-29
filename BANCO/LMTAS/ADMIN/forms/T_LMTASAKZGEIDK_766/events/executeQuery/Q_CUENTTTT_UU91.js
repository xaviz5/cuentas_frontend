
//CuentaQueryRetiro Entity: Cuenta
task.executeQuery.Q_CUENTTTT_UU91 = function(executeQueryEventArgs){
    executeQueryEventArgs.parameters.numCuenta=executeQueryEventArgs.commons.api.vc.model.CuentaAux.numeroCuenta;
    
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.Cuenta = true;
    
};