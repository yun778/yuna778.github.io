var fruits=new Array (
    ['사과', 21000, 10],
    ['참외', 18000, 20],
    ['귤', 15000, 30]
);

for(var i=0; i<3; i++) {
    var fname=document.getElementById("fruits"+i);
    fname.textContent=fruits[i];
}