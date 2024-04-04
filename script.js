let b=document.querySelectorAll(".button");
let u=document.querySelector(".upper");
let l=document.querySelector(".lower");
let c=0;
b.forEach((button)=>{
    button.addEventListener('click',()=>{
        let t=button.innerHTML;
        if(t=='C'){
            u.innerHTML="";
        }
        else if(t=='Back'){
            u.innerHTML=u.innerHTML.substring(0,u.innerHTML.length-1);
        }
        else if(t=='+' || t=='-' || t=='*' || t=='/' || t=='%'){
            if(u.innerHTML==""){
                u.innerHTML="Not Supported";
                setTimeout(()=>{u.innerHTML=""},500);
            }
            else if (u.textContent.endsWith('+') || u.innerHTML.endsWith('-') || u.innerHTML.endsWith('*') || u.innerHTML.endsWith('/') || u.innerHTML.endsWith('%')){
                u.innerHTML=u.innerHTML.slice(0,-1)+t;
            }
            else{
                u.innerHTML=u.innerHTML+t;
            }  
        }
        else if(t=='='){
            l.innerHTML=u.innerHTML;
            u.innerHTML=eval(l.innerHTML);
        }
        else if(t=='()'){
            if (u.textContent.endsWith('+') || u.innerHTML.endsWith('-') || u.innerHTML.endsWith('*') || u.innerHTML.endsWith('/') || u.innerHTML.endsWith('%') || u.textContent.endsWith('(') || u.textContent.endsWith('')){
                u.innerHTML=u.innerHTML+'(';
                c++;
            }
            else if(c>0){
                u.innerHTML=u.innerHTML+')';
                c--;
            }
        }
        else{
            u.innerHTML=u.innerHTML+t;
        }
    })
})
let but=document.querySelector("#but");
but.addEventListener('click',()=>{
    u.innerHTML="";
    l.innerHTML="";
})
