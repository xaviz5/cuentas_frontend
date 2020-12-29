
//gridRowSelecting QueryView: QV_DK85_YQT98
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task.gridRowSelecting.QV_DK85_YQT98 = function (entities,gridRowSelectingEventArgs) {

    codCliente=entities.Cliente._view[0].idCliente;
    
    gridRowSelectingEventArgs.commons.api.viewState.show('VA_1RDGUOVTNTZPKDK_138991');
    gridRowSelectingEventArgs.commons.api.viewState.show('VA_2ELHXMWOKGQCBGL_893991');
    //gridRowSelectingEventArgs.commons.api.viewState.show('CM_TLMTASOH_91L');
    
    gridRowSelectingEventArgs.commons.execServer = false;   
    

};




