var j = 0;
function count(){
    for (var i = 0; i < 200000 ; i++) {
        j = i;
    }
    postMessage(j);
}
count();