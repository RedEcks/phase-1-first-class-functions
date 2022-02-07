function receivesAFunction(callback){
    return callback();
}

function returnsANamedFunction(){
    return function sayHello(){return "Hello World!"};
}


function returnsAnAnonymousFunction(){
    return function (){return "Hello World!"};
}