

//Entity: Retiro
//Retiro.cantidad (TextInputBox) View: formRetiroCuenta
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_CANTIDADDHIOCRO_697863 = function(  entities, changedEventArgs ) {
    
    let valor = entities.Retiro.cantidad;
    let saldo=entities.Cuenta._data[0].saldo;
    
    
    if(valor>saldo){
        changedEventArgs.commons.messageHandler.showMessagesWarning("Valor por encima de su Saldo!", false, null, 3000);
        changedEventArgs.commons.api.viewState.disable('VA_VAIMAGEBUTTONNN_507863');
    }else if(valor<0){
        changedEventArgs.commons.messageHandler.showMessagesWarning("Cantidad no valida!", false, null, 3000);
        changedEventArgs.commons.api.viewState.disable('VA_VAIMAGEBUTTONNN_507863');
    }else{
        changedEventArgs.commons.api.viewState.enable('VA_VAIMAGEBUTTONNN_507863');
    }
    
    
    changedEventArgs.commons.execServer = false;

};