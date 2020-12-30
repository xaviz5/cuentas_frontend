
    
//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: formRetiroCuenta
task.render = function (entities, renderEventArgs){

    renderEventArgs.commons.api.viewState.disable('VA_CANTIDADDHIOCRO_697863');
    renderEventArgs.commons.api.viewState.disable('VA_VAIMAGEBUTTONNN_507863');
    
    renderEventArgs.commons.execServer = false;

};