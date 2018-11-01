

function displayAbbreviations(){

    if(!document.getElementsByTagName) return false;
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;

    //取得所有縮略詞
    var abbreviations = document.getElementsByTagName("abbr");
    
    if(abbreviations.length < 1) return false;
    var defs = new Array();

    //遍歷這些縮略詞
    for(var i = 0; i < abbreviations.length; i++){
        var current_abbr = abbreviations[i];
        var definition = current_abbr.getAttribute("title");
        var key = current_abbr.lastChild.nodeValue;
        defs[key] = definition;
    }

    //創建定義列表
    var dlist = document.createElement("dl");
    for(key in defs){
        var definition = defs[key];

        //創建定義標題
        var dtitle = document.createElement("dt");
        var dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);

        var ddesc= document.createElement("dd");
        var ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        
        //把他們添加到定義列表
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }

    //創建標題
    var header = document.createElement("h2");
    var header_text = document.createTextNode("Abbreviations");
    header.appendChild(header_text);

    //把標題添加到頁面主體
    document.getElementsByTagName("body")[0].appendChild(header);

    //把定義列表添加到頁面主體
    document.getElementsByTagName("body")[0].appendChild(dlist);
}


addLoadEvent(displayAbbreviations);