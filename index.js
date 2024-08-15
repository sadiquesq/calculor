
dispaly=document.getElementById("display");

 function fun(input)
{
   dispaly.value += input
}
function decrease()
{
   dispaly.value = dispaly.value.slice(0,-1)
}
function clearfun()
{
   dispaly.value = dispaly.value="";

}
function calculate()
{
   dispaly.value = eval(dispaly.value)
}