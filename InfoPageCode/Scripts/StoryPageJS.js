// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
    $.ajax({
        //要求資料的網頁
        url: "./TextFile/Test.txt?a=4",
        //非同步處理 這要加 很重要
        async: false,
        //格式
        dataType: "text",
        //成功時做的事情
        success: function (data) {
            $("#StoryContent").html(data);
            $("#chapter_title").html("第一章");
            $("#chapter_content").html("出生至國小");
        },
        //失敗時做的事情
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.responseText);
        }
    });
    modal.style.display = "block";

}

$("#myBtn2").click(function () {

    $.ajax({
        //要求資料的網頁
        url: "./TextFile/Test2.txt?a=4",
        //非同步處理 這要加 很重要
        async: false,
        //格式
        dataType: "text",
        //成功時做的事情
        success: function (data) {
            $("#StoryContent").html(data);
            $("#chapter_title").html("第二章"); 
            $("#chapter_content").html("國中至高中時期");
        },
        //失敗時做的事情
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.responseText);
        }
    });
    modal.style.display = "block";
});


// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




//網頁滾動時要做的動畫
$(window).scroll(function () {
    if ($(this).scrollTop() > $("div[class=MainPage]").offset().top - 150) {
        $('#myBtn').fadeIn("fast");
        $('#myBtn2').fadeIn("fast");
    } else {
        $('#myBtn').fadeOut("fast");
        $('#myBtn2').fadeOut("fast");
    }
});

