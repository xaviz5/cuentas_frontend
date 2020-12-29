
    
//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: formConsultarCliente
task.render = function (entities, renderEventArgs){

    renderEventArgs.commons.api.viewState.hide('VA_1RDGUOVTNTZPKDK_138991');
    renderEventArgs.commons.api.viewState.hide('VA_2ELHXMWOKGQCBGL_893991');
    //renderEventArgs.commons.api.viewState.hide('CM_TLMTASOH_91L');
    renderEventArgs.commons.api.viewState.hide('VA_VABUTTONNTTFTXU_845991');
    renderEventArgs.commons.api.viewState.hide('VA_VABUTTONKNHAHWZ_479991');
    renderEventArgs.commons.execServer = false;

};