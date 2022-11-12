fetch("./dealdata.json")
    .then((rs)=>rs.json())
    .then((da)=>display(da.dealdata));


    fetch("./run_results.json")
    .then((rs)=>rs.json())
    .then((da)=>displaycopy(da.outdoor_products));


    fetch("https://recommender.scarabresearch.com/merchants/116571D43669AB19/?pv=356248641&xp=1&f=f%3ARELATED%2Cl%3A5%2Co%3A0%7Cf%3AALSO_BOUGHT%2Cl%3A5%2Co%3A0&v=i%3A17662%2Ct%3APERSONAL%2Cc%3AAAAA&cp=1&vi=64E2415F88EC3EF&p=25517%7C1667909828&prev_url=https%3A%2F%2Fwww.geekbuying.com%2F")
    .then((res)=>res.json())
    .then((res)=>{
        let a=res.features.RELATED.items;
        let b=res.products;
            display2(a,b);
    });
    function display(a){
        var iddata=[];
        for(let i=0;i<4;i++){
            iddata.push(a[i]);
        }
        iddata.forEach(ele => {
            let d=document.createElement("div")
            d.addEventListener("click",dealspage);
            let i=document.createElement("img")
            i.src=ele.img;
            let h=document.createElement("h4")
            h.innerText=ele.discount;
            let c=document.createElement("h5")
            c.innerText=ele.price;
            d.append(i,h,c)
            document.querySelector("#cyc").append(d)

        });
    }
    function displaycopy(a){
        
        var iddata=[];
        for(let i=0;i<4;i++){
            iddata.push(a[i]);
        }
        iddata.forEach(ele => {
            let d=document.createElement("div")
            d.addEventListener("click",()=>{
                displaypro(ele);
            })
            let i=document.createElement("img")
            i.src=ele.img;
            let pa=document.createElement("p")
            pa.innerText=ele.name.substr(0,10);
            let c=document.createElement("h5")
            c.innerText=ele.price.substr(0,7);
            d.append(i,pa,c)
            document.querySelector("#cyc2").append(d)

        });
    }

    function display2(a,b){
        var iddata2=[];
        for(let i=0;i<5;i++){
            iddata2.push(a[i].id);
        }
        iddata2.forEach(ele => {
            let d=document.createElement("div")
            let i=document.createElement("img")
            i.src=b[ele][3];
            let h=document.createElement("h4")
            h.innerText=b[ele][6];
            let c=document.createElement("h5")
            c.innerText=b[ele][7];
            d.append(i,h,c)
            document.querySelector("#tri").append(d)

        });
    }
    var sliderarr=[
        "https://img.gkbcdn.com/s3/bn/2211/740x670-636b8aec2b40c926007db2b0.jpg",
        "https://img.gkbcdn.com/bn/2211/740x670-6369b73f2b40c95728c3e707._p1_.jpg",
        "https://img.gkbcdn.com/bn/2211/740x670-636382c52b40c94424fc21e0._p1_.jpg",
        "https://img.gkbcdn.com/bn/2210/740x670-635f8c012b40c90c8c92734d._p1_.jpg",
        "https://img.gkbcdn.com/bn/2211/740x670-63647bec2b40c94fac2af423._p1_.jpg",
        "https://img.gkbcdn.com/bn/2211/740x670-63647c282b40c94fac2af425._p1_.jpg",
        "https://img.gkbcdn.com/bn/2211/740x670-63647ba22b40c94fac2af421._p1_.jpg",
        "https://img.gkbcdn.com/bn/2211/740x670-636328c82b40c92ed8b1d35e._p1_.jpg"
    ]
    var i=-1;
    setInterval(sld,4000);
    sld();
    
    function sld(){
        if(i<sliderarr.length-1){
            i++;
        }
        else{
            i=0;
        }
        var sscld=document.querySelector("#slider>img");
        sscld.src=sliderarr[i];
        sscld.addEventListener("click",dealspage);
    }
    function dealspage(){
        document.querySelector("#land").innerHTML="";
        fetch("./dealdata.json")
        .then((res) => res.json())
        .then((data)=>dd(data.dealdata))

        function dd(data){
            let hhh=document.createElement("h1");
                hhh.innerText="Flash Deals";
                hhh.style="margin-left:45%"
            document.querySelector("#land").append(hhh);
            data.forEach(function(ele){
                var griddiv=document.createElement("div");
                griddiv.addEventListener("click",()=>{
                        displaypro(ele);
                })

                var ig=document.createElement("img");
                ig.src=ele.img;
                var h4=document.createElement("h4");
                h4.innerText=ele.name.substr(0,48);
                h4.style="font-size:14px"
                var h3=document.createElement("h3");
                h3.innerText=ele.price;
                h3.style="color:#D81414;font-size:18px"
                var sp=document.createElement("span")
                sp.innerText=ele.mrp;
                sp.style="text-decoration:line-through;display:block";
                var dis=document.createElement("h6")
                dis.innerText=ele.discount;
                dis.style="padinng:10px;background-color:red;display:inline;font-size:18px"
               


                griddiv.append(ig,h4,h3,sp,dis);
                
               
                document.querySelector("#delgd").append(griddiv);
            })
           
        }
       
    }
    let ww=document.querySelectorAll("#flow>.dropdown>li");
    for(let i=0;i<4;i++){
        ww[i].addEventListener("click",()=>{
            (i==0)? allcatpage("./ware1.json",i):
           (i==1)? allcatpage(("./run_results.json"),i):
           (i==2)? allcatpage(("./run_results.json"),i)
           :null;
            
        })
    }
    document.querySelector("#searchbox").addEventListener("input",()=>{
        
        fetch("./run_results.json")
        .then((rs)=>rs.json())
        .then((da)=>{
            let srch=document.querySelector("#searchbox").value.toLowerCase();
            var alliarr=[]
            for(let i in da){
                    alliarr.push(...da[i]);
            }
            let newiarr=alliarr.filter((ele)=>{
                var srt=ele.name.toLowerCase();
              return  srt.includes(srch);
            })
            dd(newiarr);
        });
    });
    function allcatpage(url,type){
        document.querySelector("#land").innerHTML="";
        fetch(url)
        .then((res) => res.json())
        .then((data)=>{
            if(type==0) dd(data.AAA);
            if(type==1) dd(data.outdoor_products);
            if(type==2) dd(data.exercise_products)
        });
    }
        function dd(data){
            document.querySelector("#delgd").innerHTML="";
            document.querySelector("#land").innerHTML="";
            document.querySelector("#delgd2").innerHTML="";
            data.forEach(function(ele){
                var griddiv=document.createElement("div");
                griddiv.addEventListener("click",()=>{
                        displaypro(ele);
                })

                var ig=document.createElement("img");
                ig.src=ele.img;
                var h4=document.createElement("h4");
                h4.innerText=ele.name.substr(0,48);
                h4.style="font-size:14px"
                var h3=document.createElement("h3");
                if(!ele.price){
                   h3.innerText=ele.mrp;
                }
                else h3.innerText= ele.price.substr(0,6)

                h3.style="color:#D81414;font-size:18px"
                var sp=document.createElement("span")
                sp.innerText=ele.mrp;
                sp.style="text-decoration:line-through;display:block";
                griddiv.append(ig,h4,h3,sp);
                
               
                document.querySelector("#delgd").append(griddiv);
            })
           
        }
       
    
    displaypro=(e)=>{
            document.querySelector("#delgd").innerHTML="";
            document.querySelector("#land").innerHTML="";
            document.querySelector("#delgd2").innerHTML="";
            var d=document.createElement("div");
            d.setAttribute("id","singlewin");
            var div1=document.createElement("div");
            var div2=document.createElement("div");
            div2.id="delgdcld2";
            let i=document.createElement("img");
            i.src=e.img;
            let hed=document.createElement("h3");
            hed.innerText=e.name;
            let pr=document.createElement("h2");
            pr.innerText=e.price.substr(0,7) || e.mrp;
            let mrps=document.createElement("span");
            mrps.innerText=e.mrp;
            mrps.style="text-decoration:line-through"
            let dis=document.createElement("p");
            dis.innerText=e.discount || "Nodiscount";
            dis.style="color:blue"
            let qt=document.createElement("span");
            qt.innerText="QTY:";
            qt.style="margin-right:30px"
            let scop=document.createElement("input");
            scop.type=Number;
            scop.value=1;
            let mi=document.createElement("button");
            mi.innerHTML="-";
            mi.style="width:20px"
            mi.addEventListener("click",()=>{
                if(scop.value>1){
                    scop.value--;
                }
            })
            scop.style="width:20px;"
            let ma=document.createElement("button");
            ma.innerHTML="+";
            ma.style="width:20px"
            ma.addEventListener("click",()=>{
                scop.value++;
            })
            let atc=document.createElement("button");
            atc.innerHTML="Add to cart";
            atc.style="margin-right:20px;padding:5px"
            atc.addEventListener("click",()=>{
                var arr=JSON.parse(localStorage.getItem("shopfrogcart")) || [];
                e.qty=scop.value;
                let ab=e.img;
                let bc=e.name;
                let cd=e.price || e.mrp;
                let de=e.qty;
                
                

                let obj={ab,bc,cd,de};
                let prom=new Promise((res,rej)=>{
                    arr.forEach((ele)=>{
                        if(bc==ele.bc){
                            rej("Product already in Cart");
                        }
                    })
                    res();
                })
                .then((res)=>{
                    alert("added to cart");
                    arr.push(obj);
                    localStorage.setItem("shopfrogcart",JSON.stringify(arr));
                })
                .catch((rest)=>alert(rest));
            })
            let by=document.createElement("button");
            by.innerHTML="Buy Now";
            by.style="margin-right:20px;padding:5px"
            let r=document.createElement("br");


            div1.append(i);
            div2.append(hed,pr,mrps,dis,qt,mi,scop,ma,r,atc,by)
            d.append(div1,div2);
            document.querySelector("#delgd2").append(d);

    }
    //var products_bike_api="https://recommender.scarabresearch.com/merchants/116571D43669AB19/?pv=353371885&xp=1&f=f%3APERSONAL%2Cl%3A8%2Co%3A0&cp=1&vi=64E2415F88EC3EF&p=25517%7C1667909828";
    //var timmer_api="https://recommender.scarabresearch.com/merchants/116571D43669AB19/?pv=356248641&xp=1&f=f%3ARELATED%2Cl%3A5%2Co%3A0%7Cf%3AALSO_BOUGHT%2Cl%3A5%2Co%3A0&v=i%3A17662%2Ct%3APERSONAL%2Cc%3AAAAA&cp=1&vi=64E2415F88EC3EF&p=25517%7C1667909828&prev_url=https%3A%2F%2Fwww.geekbuying.com%2F";