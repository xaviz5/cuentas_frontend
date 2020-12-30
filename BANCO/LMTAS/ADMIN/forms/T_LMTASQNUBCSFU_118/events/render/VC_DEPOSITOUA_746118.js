
    
//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: formDepositoCuenta
task.render = function (entities, renderEventArgs){
        
    renderEventArgs.commons.api.viewState.disable('VA_CANTIDADFMNTACI_487304');
    renderEventArgs.commons.api.viewState.disable('VA_VAIMAGEBUTTONNN_941304');
    
    renderEventArgs.commons.execServer = false;

};