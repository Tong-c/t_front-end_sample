function displayAccesskeys(){
    if(!document.getElementsByTagName) return false;
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;

    //取得文檔中所有鏈接
    var links = document.getElementsByTagName("a");

    //創建一個數組，保存訪問鍵
    var aKeys = new Array();

    //遍歷鏈接
    for(var i = 0; i < links.length; i++){
        var current_link = links[i];

        //如果沒有accesskey屬性，繼續循環
        if(!current_link.getAttribute("accesskey")) continue;

        //取得accesskey的值
        var key = current_link.getAttribute("accesskey");

        //取得鏈接文本
        var text = current_link.lastChild.nodeValue;

        //添加到數組
        aKeys[key] = text;
    }

    //創建列表
    var list = document.createElement("ul");

    //遍歷訪問鍵
    for(key in aKeys){
        var text = aKeys[key];

        //創建放到列表項的字符串
        var str = key + ":" + text;

        //創建列表項
        var item = document.createElement("li");
        var item_text = document.createTextNode(str);
        item.appendChild(item_text);

        //把列表項添加到列表中
        list.appendChild(item);
    }

    //創建標題
    var header = document.createElement("h3");
    var header_text = document.createTextNode("Accesskeys");
    header.appendChild(header_text);

    //把標題添加到頁面主體
    document.body.appendChild(header);

    //把列表添加到頁面主體
    document.body.appendChild(list);

}

addLoadEvent(displayAccesskeys);