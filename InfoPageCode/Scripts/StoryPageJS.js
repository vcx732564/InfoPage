// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("StoryChapter1");

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
    return true;
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

        $('div[id^=StoryChapter]').each(function () {

            var ShowSpeed = parseInt($(this).attr('Showspeed'));

            if ($(this).attr('fadeIn') == "N") {
                $(this).animate({
                    opacity: 1,
                    left: '-=30'
                }, ShowSpeed, function () {
                    // Animation complete.
                });

                $(this).attr('fadeIn', 'Y')
            }


        });

        //if ($('#test1').attr('fadeIn')=="N") {
        //    $('#test1').animate({
        //        opacity: 1,
        //        left: '-=50'
        //    }, 400, function () {
        //        // Animation complete.
        //    });

        //    $('#test1').attr('fadeIn','Y')
        //}
        

        //if ($('#test2').attr('fadeIn') == "N") {
        //    $('#test2').animate({
        //        opacity: 1,
        //        left: '-=50'
        //    }, 500, function () {
        //        // Animation complete.
        //    });

        //    $('#test2').attr('fadeIn', 'Y')
        //}
    } else {
        $('div[id^=StoryChapter]').each(function () {

            var ShowSpeed = parseInt($(this).attr('Showspeed'));

            if ($(this).attr('fadeIn') == "Y") {
                $(this).animate({
                    opacity: 0,
                    left: "+=30"
                }, ShowSpeed, function () {
                    // Animation complete.
                });

                $(this).attr('fadeIn', 'N')
            }

        });


        //if ($('#test1').attr('fadeIn') == "Y") {
        //    $('#test1').animate({
        //        opacity: 0,
        //        left: "+=50"
        //    }, 400, function () {
        //        // Animation complete.
        //    });

        //    $('#test1').attr('fadeIn', 'N')
        //}

        //if ($('#test2').attr('fadeIn') == "Y") {
        //    $('#test2').animate({
        //        opacity: 0,
        //        left: "+=50"
        //    }, 500, function () {
        //        // Animation complete.
        //    });

        //    $('#test2').attr('fadeIn', 'N')
        //}
    }
});

