
//gridRowSelecting QueryView: QV_FX83_ONY44
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task.gridRowSelecting.QV_FX83_ONY44 = function (entities,gridRowSelectingEventArgs) {  
     
     numCuenta=entities.Cuenta._data[0].numeroCuenta;
     tipoCuenta=entities.Cuenta._data[0].tipoCuenta;
    
    gridRowSelectingEventArgs.commons.api.viewState.enable('VA_CANTIDADFMNTACI_487304');
    gridRowSelectingEventArgs.commons.api.viewState.enable('VA_VAIMAGEBUTTONNN_941304');
    
     gridRowSelectingEventArgs.commons.execServer = false;

};




