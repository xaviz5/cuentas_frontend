

//Entity: Transferencia
//Transferencia.cantidad (TextInputBox) View: formTransferenciaCuenta
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_CANTIDADENSMJMI_254526 = function(  entities, changedEventArgs ) {
    let valor = entities.Transferencia.cantidad;
    
    if(valor>origen.saldo){
        changedEventArgs.commons.messageHandler.showMessagesWarning("Valor por encima de su Saldo!", false, null, 1000);
        changedEventArgs.commons.api.viewState.disable('VA_VAIMAGEBUTTONNN_869526');
    }else if(valor<0){
        changedEventArgs.commons.messageHandler.showMessagesWarning("Cantidad no valida!", false, null, 1000);
        changedEventArgs.commons.api.viewState.disable('VA_VAIMAGEBUTTONNN_869526');
    }else{
        changedEventArgs.commons.api.viewState.enable('VA_VAIMAGEBUTTONNN_869526');
    }
    
    changedEventArgs.commons.execServer = false;

};