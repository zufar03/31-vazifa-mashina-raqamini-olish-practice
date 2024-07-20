$(document).ready(function(){
    
    let kod;

    $(".tekshir").click(function(){
        let viloyat = $("#viloyat").val()

        if (viloyat == "v") {
           $("#viloyat").css("border" , "3px solid red")
        }else 
        if (viloyat == "t") {
            kod = "01"
            $("#viloyat").css("border" , "3px solid green")
        }else 
        if (viloyat == "a") {
            kod = "60"
            $("#viloyat").css("border" , "3px solid green")
        }else 
        if (viloyat == "n") {
            kod = "50"
            $("#viloyat").css("border" , "3px solid green")
        }else 
        if (viloyat == "f") {
            kod = "40"
            $("#viloyat").css("border" , "3px solid green")
        }else 
        if (viloyat == "s") {
            kod = "30"
            $("#viloyat").css("border" , "3px solid green")
        }else 
        if (viloyat == "b") {
            kod = "80"
            $("#viloyat").css("border" , "3px solid green")
        }else 
        if (viloyat == "x") {
            kod = "85"
            $("#viloyat").css("border" , "3px solid green")
        }

        $(".raqam1").html(kod)

        let text1 = $(".text1").val()

        if (text1 == "") {
            $(".text1").css("border" , "3px solid red")
        }else {
            $(".text1").css("border" , "3px solid green")
            $(".harf").html(text1)
        }
        
        let numbr1 = $(".numbr1").val()
        
        if (numbr1 == "") {
            $(".numbr1").css("border" , "3px solid red")
        }else {
            $(".numbr1").css("border" , "3px solid green")
            $(".raqam2").html(numbr1)
        }
        
        let text2 = $(".text2").val()

        if (text2 == "") {
            $(".text2").css("border" , "3px solid red")
        }else {
            $(".text2").css("border" , "3px solid green")
            $(".harf2").html(text2)
        }
        

        let shaxs = $(".shaxs").val()

        if (shaxs == "yur") {
            
            $(".harf").html("")
            $(".harf2").html(text1 + text2)
            $(".raqam2").html(numbr1)
        }


        if ((numbr1 *1) % 111 == 0 ) {
            $("h2").html("250 mln")
        }else
        if (text1 == "z" && text2 == "zz") {
            $("h2").html("150 mln")
        }else
        if (text1 == "z" && text2 == "zz" && (numbr1 *1) % 111 == 0) {
            $("h2").html("550 mln")
        }else
        if (text1 == "z" && text2 == "zz" && (numbr1 *1) == 777) {
            $("h2").html("700 mln")
        }else
        if (text1 == "z" && text2 == "zz" && (numbr1 *1) == 701) {
            $("h2").html("150 mln")
        }else
        if (text1 == "z" && text2 == "zz" && (numbr1 *1) == 501) {
            $("h2").html("85 mln")
        }else
        if ((numbr1 *1) == "001" || (numbr1 *1) == "002" || (numbr1 *1) == "003" || (numbr1 *1) == "004" || (numbr1 *1) == "005" || (numbr1 *1) == "006" || (numbr1 *1) == "007" || (numbr1 *1) == "008" || (numbr1 *1) == "009" ) {
            $("h2").html("180 mln")
        }else
        if ((numbr1 *1) == "010" || (numbr1 *1) == "020" || (numbr1 *1) == "030" || (numbr1 *1) == "040" ) {
            $("h2").html("30 mln")
        }else{
            $("h2").html("850 ming")
        }
        

        event.preventDefault()
    })




})