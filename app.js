const pages = [
    {
        page:"Home",
        navigate: home
    },
    {
        page: "About",
        navigate: about
    },
    {
        page: "Interact",
        navigate: interact
    }
]


function navButton(pg, pr, nv){

    let button=document.createElement("button");
    button.innerHTML=pg;
    button.addEventListener("click",function(){
        document.body.querySelector(".wrapper").innerHTML=""
        nv();
    })
    pr.appendChild(button);

}

function navigation(){

    let nav = document.createElement("nav");
    let wrapper=document.createElement("div");
    wrapper.classList.add("wrapper");
    nav.style.height="80px";
    nav.style.backgroundColor="Blue";
    // navButton("home", nav, homepage);
    // navButton("about", nav, about);
    for (obj of pages){
        navButton(obj.page, nav, obj.navigate);
    }
    document.body.appendChild(nav);
    document.body.appendChild(wrapper);

}

function home(){

    let home = document.createElement("div");
    let homeEle = document.createElement("h1");
    home.innerHTML="";
    homeEle.innerHTML = "Home";
    home.appendChild(homeEle);
    document.body.appendChild(home);
    document.body.querySelector(".wrapper").appendChild(home);
    home.body.innerHTML=""

}

function about(){

    let about = document.createElement("div");
    let aboutEle = document.createElement("h1");
    let nameEle = document.createElement("h3");
    about.innerHTML="";
    aboutEle.innerHTML = "About";
    nameEle.innerHTML = "Brody Dishman";
    about.appendChild(aboutEle);
    about.appendChild(nameEle);
    document.body.appendChild(about);
    document.body.querySelector(".wrapper").appendChild(about);

}

function interact(){

    let interact = document.createElement("div");
    let interactEle = document.createElement("h1");
    interact.innerHTML="";
    interactEle.innerHTML="Interact";
    interact.appendChild(interactEle);
    document.body.appendChild(interact);
    document.body.querySelector(".wrapper").appendChild(interact);

    number=0;
    let button = document.createElement("button");
    button.innerHTML= "Counter (Click me)";
    button.addEventListener("click",function (){
        button.innerHTML= number+1;
        number=number+1
    })

    document.body.appendChild(button);

}

navigation();
home();
about();
interact();