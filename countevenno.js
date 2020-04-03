
function nocount(str)
{
var count=0;
var y;
   var Regex =/\d+/g;
{
for(i=0;i<str.length;i++)
{
if(str[i]!=(Regex))
y=count++;
console.log(str[i]);
}
}
return str;
}
var x= nocount("abc12345 def6789");

