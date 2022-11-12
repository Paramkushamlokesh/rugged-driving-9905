var arr=JSON.parse(localStorage.getItem("shopfrogcart"));
    funji();
    function funji(){
        document.querySelector("#disproduct").innerHTML="" || [];
        arr.forEach(element => {
            let d=document.createElement("div");
            d.setAttribute("id","innerproducts")
            let i=document.createElement("img");
            i.src=element.ab;
            i.style="weigth:80px;height:80px;box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;margin:8px"
            var p1=document.createElement("p");
            p1.innerText=element.bc;
            let p2=document.createElement("p");
            p2.innerText=element.cd.substr(0,7);

            let p3=document.createElement("div");
                    let m1=document.createElement("button");
                    m1.innerHTML="-";
                    // m1.style="display:block"
                    m1.addEventListener("click",()=>{
                        if(m00.value>1){
                            m00.value--;
                            element.de=m00.value;
                            localStorage.setItem("shopfrogcart",JSON.stringify(arr));
                            funji();
                        }   
                    })
                    let m00=document.createElement("input");
                    m00.value=element.de;
                    m00.style="width:40px"
                    let m2=document.createElement("button");
                    m2.innerHTML="+";
                    m2.addEventListener("click",()=>{
                        m00.value++;
                        element.de=m00.value;
                        localStorage.setItem("shopfrogcart",JSON.stringify(arr));
                        funji();
                    })
                p3.append(m1,m00,m2);
            let p4=document.createElement("p");
            let sellp=((element.cd.substr(0,7)).replace("$",""))
            let dsell=+(sellp);
            p4.innerText=dsell*m00.value;

            let p5=document.createElement("p");
            p5.innerText="delete";
            p5.addEventListener("click",()=>{
                p5.style="color:red";
                delfun(element,i);
            })
            let ina=document.createElement("div");
            ina.style="display:flex;width:55%;"
            let ina2=document.createElement("div");
            ina2.style="width:40%;display:flex;justify-content:space-between"
            ina.append(i,p1)
            ina2.append(p2,p3,p4,p5)
            d.append(ina,ina2);
            document.querySelector("#disproduct").append(d);
        });
        document.querySelector("#ct4>p>span").innerHTML=arr.length;
    }
    document.querySelector("#pay").addEventListener("click",()=>{
        document.querySelector("#pay").style="color:red";
    })
    delfun=(ele,i)=>{
        arr.splice(i,1);
        localStorage.setItem("shopfrogcart",JSON.stringify(arr));
        funji();
    }
    document.querySelector("#pay").addEventListener("click",()=>{
        location.href='./payment.html';
    })