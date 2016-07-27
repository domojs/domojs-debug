var vorlonWrapper = require('vorlon-node-wrapper');

module.export={
    start:function(host, port){
        vorlonWrapper.start($('url').format({host:host || 'localhost', port:port || 1337}), dashboardSession, true, function (result, errorMessage) {
            
        });        
    }
}