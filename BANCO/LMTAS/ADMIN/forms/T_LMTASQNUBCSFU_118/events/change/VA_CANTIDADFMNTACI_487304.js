

//Entity: Deposito
//Deposito.cantidad (TextInputBox) View: formDepositoCuenta
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_CANTIDADFMNTACI_487304 = function(  entities, changedEventArgs ) {
    
    let valor = entities.Deposito.cantidad;
    let saldo=entities.Cuenta._data[0].saldo;
    
    if(valor<=0){
        changedEventArgs.commons.messageHandler.showMessagesWarning("Cantidad no valida!", false, null, 3000);
        changedEventArgs.commons.api.viewState.disable('VA_VAIMAGEBUTTONNN_941304');
    }else{
        changedEventArgs.commons.api.viewState.enable('VA_VAIMAGEBUTTONNN_941304');
    }
    
    changedEventArgs.commons.execServer = false;

};