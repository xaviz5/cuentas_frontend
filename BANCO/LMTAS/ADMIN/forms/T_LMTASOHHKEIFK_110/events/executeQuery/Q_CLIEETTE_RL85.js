
//ClienteQuery Entity: Cliente
task.executeQuery.Q_CLIEETTE_RL85 = function(executeQueryEventArgs){
    executeQueryEventArgs.parameters.estado=executeQueryEventArgs.commons.api.vc.model.Filtro.numCed;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.Cliente = true;
};