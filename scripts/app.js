
appNs = window.appNs || {};
appNs.userDetails = window.appNs.userDetails || {};
appNs.login = function(){
    var myWindow = window;
    myWindow.appNs.userDetails.userName = "Hemant";        
    myWindow.location.href = "./about.html";
}

appNs.options = {
    url: "http:\\\\example.com.au",
    params: [{key: 'id0', value: '10'},{key: 'dept', value: 'comp'},{key: 'city', value: 'Sydney'}]
}

appNs.getQueryString = function(){
    var options = appNs.options;
    var qs = options.url + "?";
    _.each(options.params,function(element,index,list){
        qs = qs + element.key + '=' + element.value + '&';
    })
    return qs;
}

function test(){
    alert('Hello world!7');
}

test();

var qs = appNs.getQueryString();
console.log(qs);
/*test*/