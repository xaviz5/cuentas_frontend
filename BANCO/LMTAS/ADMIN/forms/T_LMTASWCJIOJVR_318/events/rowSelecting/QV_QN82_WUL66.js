
//gridRowSelecting QueryView: QV_QN82_WUL66
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task.gridRowSelecting.QV_QN82_WUL66 = function (entities,gridRowSelectingEventArgs) {

    numCuenta=entities.Cuenta._view[0].numeroCuenta;
    tipoCuenta=entities.Cuenta._view[0].tipoCuenta;
    
    gridRowSelectingEventArgs.commons.api.viewState.enable('VA_CANTIDADXSIQVPR_573554');
    gridRowSelectingEventArgs.commons.api.viewState.enable('VA_VAIMAGEBUTTONNN_236554');
    
    gridRowSelectingEventArgs.commons.execServer = false;
    

};




