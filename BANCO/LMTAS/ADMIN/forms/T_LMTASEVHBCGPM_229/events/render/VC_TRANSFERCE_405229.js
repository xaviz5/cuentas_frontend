
    
//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: formTransferenciaCuenta
task.render = function (entities, renderEventArgs){
    
    renderEventArgs.commons.api.viewState.hide('VA_CANTIDADSLHRTSR_486827');
    renderEventArgs.commons.api.viewState.hide('VA_VAIMAGEBUTTONNN_604827');
    
    renderEventArgs.commons.execServer = false;

};