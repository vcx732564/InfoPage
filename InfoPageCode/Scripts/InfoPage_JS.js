//========================個人資訊相關的JS Start==============================
$(".tab_content").hide();
$(".tab_content:first").show();

/* if in tab mode */
$("ul.tabs li").click(function () {

    $(".tab_content").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();
    //變動高度 桌面模式不變動高度
    //$(".Info_Page").height(String(500 + parseInt($("#" + activeTab).height()) + 30) + 'px');
    //$(".Info_Page").animate({ "height": String(500 + parseInt($("#" + activeTab).height()) + 30) + 'px' });


    $("ul.tabs li").removeClass("active");
    $(this).addClass("active");

    $(".tab_drawer_heading").removeClass("d_active");
    $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");

});
/* if in drawer mode */
$(".tab_drawer_heading").click(function () {

    //判斷目前文字框是否是開啟狀態
    var now_Text_Area = $(this).attr('rel');
    if ($('#' + now_Text_Area).is(":hidden")) {
        //$(".tab_content").fadeOut();
        $(".tab_content").hide();

        var d_activeTab = $(this).attr("rel");
        $("#" + d_activeTab).fadeIn();
        
        //變動高度 行動模式才要變動高度
        //$(".Info_Page").height(String(500 + parseInt($("#" + d_activeTab).height()) + 30) + 'px');
        $(".Info_Page").animate({ height: 500 + parseInt($("#" + d_activeTab).height()) + 30 + 'px' });
        //$(".Info_Page").animate({"height": String(500 + parseInt($("#" + activeTab).height()) + 30) + 'px'});

        $(".tab_drawer_heading").removeClass("d_active");
        $(this).addClass("d_active");

        $("ul.tabs li").removeClass("active");
        $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");

        //location.href = '#' + d_activeTab + '_btn';

    } else {

        //關閉文字區塊
        $('#' + now_Text_Area).hide();
        $(".Info_Page").animate({ height: 500 });
        //$(".Info_Page").height(String(530) + 'px');

    }

});

$('ul.tabs li').last().addClass("tab_last");
//========================個人資訊相關的JS End==============================



/*================回到頂端的事件 Start=================*/
$("#gotop").click(function () {
    jQuery("html,body").animate({
        scrollTop: 0
    }, 1000);
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $('#gotop').fadeIn("fast");
    } else {
        $('#gotop').stop().fadeOut("fast");
    }
});
/*================回到頂端的事件 End=================*/