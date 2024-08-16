let disp=document.querySelector("#display");
function append(num){
    disp.innerHTML+=num;
}
function clean(){
    disp.innerHTML="0";
}
function calc(){
    try{
        disp.innerHTML=eval(disp.innerHTML);
    }
    catch(error){
        disp.innerHTML="Error";
        setTimeout(() => {
            if (disp.innerHTML==="Error") 
            {
                disp.innerHTML="0";
            }
        },2000);
    }
}