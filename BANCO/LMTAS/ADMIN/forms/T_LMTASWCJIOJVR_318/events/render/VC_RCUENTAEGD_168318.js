
    
//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: formDepositarCuenta
task.render = function (entities, renderEventArgs){
    renderEventArgs.commons.api.viewState.disable('VA_CANTIDADXSIQVPR_573554');
    renderEventArgs.commons.api.viewState.disable('VA_VAIMAGEBUTTONNN_236554');
    
    renderEventArgs.commons.execServer = false;

};