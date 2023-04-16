let islerim = ["Yataklari düzelt", "(x) Evi süpür", "Camasirlari yika", "(x) Yemegi yap", "Alisverise git", "Cocugu okuldan al"];

//let a = "\n\r"

for (i = 0; i < islerim.length; i++) {

    if (!islerim[i].includes("(x)")) {

        //alert("YAPMAN GEREKENLER" + a + islerim[i])
        let b=document.createElement("p")
        b.innerHTML=islerim[i]
        document.querySelector(".dont").appendChild(b);
    }
}

for (i = 0; i < islerim.length; i++) {

    if (islerim[i].includes("(x)")) {

        console.log(islerim[i])
        
        let is = document.createElement("p")
        is.innerHTML = islerim[i] + "  bitti"
        document.querySelector(".adam").appendChild(is);
    }
    if(islerim[i].includes("(x)")){

        let a=[]
        a.push(islerim[i])

        if(a.length==islerim.length){

            alert("TUM ISLER BITTI")
        }else{

            alert ("YAPILACAK ISLER VAR")
        }

    }
}
