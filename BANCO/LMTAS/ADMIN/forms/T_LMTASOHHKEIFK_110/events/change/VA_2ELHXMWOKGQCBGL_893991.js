

//Entity: CuentaAhorCorri
//CuentaAhorCorri.saldo (TextInputBox) View: formConsultarCliente
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_2ELHXMWOKGQCBGL_893991 = function(  entities, changedEventArgs ) {
    console.log('Valor de saldo');
	let valor = entities.CuentaAhorCorri.saldo;
	if(estado == "A"){
		if(!(valor>= 50 && valor <= 200)){
            changedEventArgs.commons.messageHandler.showMessagesInformation('El valor de estar entre 50 y 200');
            changedEventArgs.commons.api.viewState.disable('VA_VABUTTONKNHAHWZ_479991');
        }else{
            changedEventArgs.commons.api.viewState.enable('VA_VABUTTONKNHAHWZ_479991');
        }
	}else if(estado == "C"){
		if(!(valor>= 50 && valor <= 100)){
            changedEventArgs.commons.messageHandler.showMessagesInformation('El valor de estar entre 50 y 100');
            changedEventArgs.commons.api.viewState.disable('VA_VABUTTONNTTFTXU_845991');
        }else{
            changedEventArgs.commons.api.viewState.enable('VA_VABUTTONNTTFTXU_845991');
        }
	}
    changedEventArgs.commons.execServer = false;

};