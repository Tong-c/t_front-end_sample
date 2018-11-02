function insertAfter(newElement, targetElement){
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement){
        parent.appentChild = newElement;
    }else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}