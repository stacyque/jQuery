$(document).ready(function(){
    $("h1").click(function(){
        $("p").toggle();
    }),

    $("#btn1").hover(function(){
        $("#box1").slideToggle(1000);
    }),

    $("#input1").hover(function(){
        alert("Mouse Leave")
        //$(this).backgroundColor="red";
        }),
        
        
    }),

    $("btn2").click(function(){
        $("box2").fadeToggle("slow");

    }),

    $("a").hover(function(){
        $(this).slideToggle("very slow");
    }),

    $("p").click(function(){
        $(this).addClass("bg-pink");
    }),

    $("h1").click(function(){
        $(this).addClass("bg-purple");
    })
})