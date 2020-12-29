

//Entity: CuentaAhorCorri
//CuentaAhorCorri.tipoCuenta (ComboBox) View: formConsultarCliente
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_1RDGUOVTNTZPKDK_138991 = function(  entities, changedEventArgs ) {

    estado=changedEventArgs.newValue;
	
	if(estado == "A"){
		changedEventArgs.commons.api.viewState.show('VA_VABUTTONKNHAHWZ_479991');
		changedEventArgs.commons.api.viewState.hide('VA_VABUTTONNTTFTXU_845991');

	}else if(estado == "C"){
		changedEventArgs.commons.api.viewState.hide('VA_VABUTTONKNHAHWZ_479991');
		changedEventArgs.commons.api.viewState.show('VA_VABUTTONNTTFTXU_845991');
	}
    changedEventArgs.commons.execServer = false;

};