function id(_id){
    return document.getElementById(_id)
}



    let users = [];

class Login
    {
        constructor(email,password){
        this.email=email;
        this.password=password;
        }
    
    }



class Person extends Login
    {
        constructor(name,email,password){
        super(email,password);
        this.name=name;
        }
    }



function login(){

    let finted = false;
    let user = null;
    for(let l of users){
        if(id("email_login").value==l.email && id("password_login").value==l.password){
            finted =true;
            user = l;
        }
    }
    if(finted==true){
            localStorage.User = JSON.stringify(user);
            location.href ="products.html";
                }
            else{
                alert("mail ve ya parol duzgun deyil")
            }

}


function register(){

   let _name=id("name").value;
   let _email=id("email").value;
    let _password=id("password").value
    
    if(_password==id("passwordew").value){
        let user = new Person(_name, _email,_password);
        users.push(user);
        return false;
    }
    else{
        alert("parol ust -uste dushmur");
    }

}

document.addEventListener("DOMContentLoaded",function(event){
    if(localStorage.User!=null);
});

function logout(){
    if(localStorage.User!=null){
        document.location.href = "index.html";
         localStorage.clear();
        
    }
   
}

function sell(){
    location.href= "sell.html"
}





//Product js
let products =[];

class Product
{
    constructor(name,model,price,color)
    {
    this.name = name;
    this.model = model;
    this.price = price;
    this.color = color;
    }
}

let pd1 = new Product("Acer", "AC-005", 500, "black");
let pd2 = new Product("Samsung", "PR-305", 450, "white");
let pd3 = new Product("Apple", "Note", 1000, "white");
let pd4 = new Product("Asus", "GT-506P", 800, "white");
let pd5 = new Product("Toshiba", "SR-CR", 300, "black");

products.push(pd1,pd2,pd3,pd4,pd5);




function create(){
    for(let p of products){
    let div = document.createElement("div");
    div.className = "listItem"
    let pName= document.createElement("p")
    pName.innerText=p.name;
    let pModel = document.createElement("p")
    pModel.innerText=p.model;
    let pPrice = document.createElement("p")
    pPrice.innerText=p.price;
    let pColor = document.createElement("p")
    pColor.innerText=p.color;
    document.body.appendChild(div);
     div.appendChild(pName);
     div.appendChild(pModel);
     div.appendChild(pPrice);
     div.appendChild(pColor);
    }

}



//sell js


class ObjAdd
{
    constructor(name,model,price,color){
        this.name = name;
        this.model = model;
        this.price = price;
        this.color = color;
    }
}

function add(){

    let name = id("name").value
    let model = id("model").value
    let price = id("price").value
    let color = id("color").value

    let obj = new ObjAdd(name,model,price,color); 
    let i = +localStorage.count    
    i++;
    localStorage.count = i;
    localStorage.setItem("pro-"+i, JSON.stringify(obj));
    location.href ="products.html";


}
