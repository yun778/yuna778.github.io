var fruit=[
    {name:'사과', price:'21000', count:'10'},
    {name:'참외', price:'18000', count:'20'},
    {name:'귤', price:'15000', count:'30'}
]

for(var i=0; i<3; i++) {
    var fname=document.getElementById("data1"+i);
    fname.textContent='이름 : ' + fruit[i].name;
    var fprice=document.getElementById("data2"+i);
    fprice.textContent='가격 : ' + fruit[i].price;
    var fcount=document.getElementById("data3"+i);
    fcount.textContent='개수 : ' + fruit[i].count;
}