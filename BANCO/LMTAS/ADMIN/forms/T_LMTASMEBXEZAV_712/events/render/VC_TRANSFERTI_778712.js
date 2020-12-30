
    
//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: formTransferenciaCuenta
task.render = function (entities, renderEventArgs){
    
    renderEventArgs.commons.api.viewState.hide('VA_CANTIDADENSMJMI_254526');
    renderEventArgs.commons.api.viewState.hide('VA_VAIMAGEBUTTONNN_869526');
    
    renderEventArgs.commons.execServer = false;

};