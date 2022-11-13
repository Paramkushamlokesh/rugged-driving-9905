let arr=JSON.parse(localStorage.getItem("shopfrogcart"))
    let rst=arr.reduce(function(acc,ele){
        let sellp=((ele.cd.substr(0,7)).replace("$",""))
        let dsell=Number(sellp);
        let y=Number(ele.de);
        return acc+(dsell*y)
    },0)
    document.querySelector("#sp").innerHTML=rst;
    document.querySelector("form").addEventListener("submit",()=>{
        alert("Payment Successful");
    })