function handleSubmit(){
    let fn=document.getElementById('fname').value;
    let ln=document.getElementById('lname').value;
    let pw=document.getElementById('pwd').value;
    let cpw=document.getElementById('cpwd').value;
    let msg1=document.getElementById('alert1');
    let msg2=document.getElementById('alert2');
    let msg3=document.getElementById('alert3');
    msg1.innerHTML=``;
    msg2.innerHTML=``;
    msg3.innerHTML=``;
    if(fn.length<=2){
        msg1.innerHTML=`(At least 3 characters required)`;
        return false;
    }
    if(ln.length<=2){
        msg2.innerHTML=`(At least 3 characters required)`;
        return false;
    }
    if(pw.length==0){
        msg3.innerHTML=`(Password is mandatory)`;
        return false;
    }
    if(cpw.length==0||cpw!=pw){
        msg3.innerHTML=`(Passwords do not match)`;
        return false;
    }
    return true;
}