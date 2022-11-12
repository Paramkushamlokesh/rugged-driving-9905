document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault();
    sub();
});
let arr=JSON.parse(localStorage.getItem("shopfrogUD")) || []
function sub(){
    
    
    console.log("hello");
    var int=document.querySelectorAll("input");
    let nickname=int[0].value;
    let Email_address=int[1].value;
    let Password=int[2].value;
    let obj={
        Rn: nickname,
        Re: Email_address,
        Rp: Password
    };
    arr.push(obj);
    localStorage.setItem("shopfrogUD",JSON.stringify(arr));
}