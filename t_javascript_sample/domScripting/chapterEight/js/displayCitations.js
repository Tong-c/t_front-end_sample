
function displayCitations(){
    if(!document.getElementsByTagName) return false;
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;

    //取得所有引用
    var quotes = document.getElementsByTagName("blockquote");

    //遍歷引用
    for(var i = 0; i < quotes.length; i++){

        //如果沒有cite屬性，繼續循環
        if(!quotes[i].getAttribute("cite")) continue;

        //保存cite屬性
        var url = quotes[i].getAttribute("cite");

        //取得引用中的所有元素節點
        var quoteChildren = quotes[i].getElementsByTagName("*");

        //如果沒有元素節點，繼續循環
        if(quoteChildren.length < 1) continue;

        //取得引用中的最後一個元素節點
        var elem = quoteChildren[quoteChildren.length - 1];
        
        //創建標記
        var link = document.createElement("a");
        var link_text = document.createTextNode("source");
        link.appendChild(link_text);
        link.setAttribute("href", url);

        var superscript = document.createElement("sub");
        superscript.appendChild(link);

        //把標記添加到引用中的最後一個元素節點
        elem.appendChild(superscript);
    }
}

addLoadEvent(displayCitations);