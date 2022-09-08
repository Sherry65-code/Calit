function exitApp()
{
    document.getElementById('body').style.transform = "scale(0)";
    setTimeout(forceExit, 1000);
}
function forceExit()
{
    window.close();
}
function calculate()
{
    x = document.getElementById('screen').value;
    document.getElementById('screen').value =  eval(x);
}
function addText(text1)
{
    document.getElementById('screen').value += text1;
}
function remText()
{
    document.getElementById('screen').value = "";
}