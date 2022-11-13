document.querySelector("#cna").addEventListener("click",clickinner);
    function clickinner(e){
        e.preventDefault();
        location.href = './signup.html';
    };
    document.querySelector("form").addEventListener("submit",(e)=>{
        e.preventDefault();
        sub();
    });
    let arr=JSON.parse(localStorage.getItem("shopfrogUD")) || []
    function sub(){
    
        var int=document.querySelectorAll("input");
        let Email_address=int[0].value;
        let Password=int[1].value;
        
        let pro=new Promise((res,rej)=>{
            arr.filter((ele)=>{
            if(ele.Re==Email_address){
                if(ele.Rp==Password){
                    localStorage.setItem("shopfroglogincred",Email_address);
                    res("Login Sucessful");
                }
                else{
                    rej("wrong password");
                }
            }
            else{
                rej("Wrong Credentials");
            }
            })
        })
        .then((result)=>{
            alert(result);
            
            location.href='./index.html';
        })
        .catch((result)=>alert(result));   
    }