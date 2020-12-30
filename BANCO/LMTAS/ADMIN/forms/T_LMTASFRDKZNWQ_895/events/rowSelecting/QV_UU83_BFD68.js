
//gridRowSelecting QueryView: QV_UU83_BFD68
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task.gridRowSelecting.QV_UU83_BFD68 = function (entities,gridRowSelectingEventArgs) {

     numCuenta=entities.Cuenta._data[0].numeroCuenta;
     tipoCuenta=entities.Cuenta._data[0].tipoCuenta;
    
    gridRowSelectingEventArgs.commons.api.viewState.enable('VA_CANTIDADDHIOCRO_697863');
    gridRowSelectingEventArgs.commons.api.viewState.enable('VA_VAIMAGEBUTTONNN_507863');
    
     gridRowSelectingEventArgs.commons.execServer = false;

};




