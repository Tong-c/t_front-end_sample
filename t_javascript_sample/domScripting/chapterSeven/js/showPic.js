

function showPic(whichpic){

    if(!document.getElementById("placeholder")) return false;
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);


    if(document.getElementById("description")){
        var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
        var description = document.getElementById("description");
        if(description.firstChild.nodeType == 3){
            description.firstChild.nodeValue = text;
        }
    }
    return true;
}


function countBodyChildren(){
    var body_element = document.getElementsByTagName("body")[0];
    alert(body_element.nodeType);
}



function prepareGallery(){
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;
   
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
   
    for(var i = 0; i < links.length; i++){
        links[i].onclick = function(){
            return !showPic(this);
        };
        // links[i].onkeypress = links[i].onclick;
    }
}


 function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload != "function"){
        window.onload = func;
    }else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
 }


 function perparePlaceHolder(){
     var placeholder = document.createElement("img");
     placeholder.setAttribute("id", "placeholder");
     placeholder.setAttribute("src", "images/placeholder.gif");
     placeholder.setAttribute("alt", "my image gallery");
    
     var description = document.createElement("p");
     description.setAttribute("id", description);
     
     var desctext = document.createTextNode("choose an image");
     description.appendChild(desctext);
     
    //  document.getElementsByTagName("body")[0].appendChild(placeholder);
    //  document.getElementsByTagName("body")[0].appendChild(description);

     var gallery = document.getElementById("imagegallery");
     gallery.parentNode.insertBefore(placeholder, gallery);
     gallery.parentNode.insertBefore(description, gallery);
 }

 function insertAfter(newElement, targetElement){
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
 }

 

 

 addLoadEvent(prepareGallery);
 addLoadEvent(perparePlaceHolder);