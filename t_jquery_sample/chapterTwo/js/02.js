$(document).ready(function(){
    $("#selected-plays > li").addClass('horizontal');
    $("#selected-plays li:not(horizontal)").addClass('sub-level');

    $("a[href^='mailto:']").addClass("mailto");
    $("a[href$='.pdf']").addClass("pdflink");

    $("a[href^='http'][href*='henry'").addClass("henrylink");

    $("tr:nth-child(odd)").addClass("alt");
    $("td:contains(Henry)").addClass("highlight");

    $("a").filter(function(){
        return this.hostname && this.hostname != location.hostname;
    }).addClass("external");

    $(document).ready(function(){
        $("td:contains(Henry)").nextAll().addClass("highlight");
    });
    $(document).ready(function(){
        $("td:contains(Henry)").nextAll().addBack().addClass("highlight");
    });
    $(document).ready(function(){
        $("td:contains(Henry)").parent().children().addClass("highlight");
    });
    
    
});