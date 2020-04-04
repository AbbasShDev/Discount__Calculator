$(".calc").on("click" , function(){

    if ($(".orgPrice").val() === "") {
        alert("Original Price Can Not Be Empty");
        e.stopPropagation();  
    }
    if ($(".DiscAmount").val() === "") {
        alert("Discount Can Not Be Empty");
        e.stopPropagation();  
    }
    
    var orgPrice1 = $(".orgPrice").val();
    var DiscAmount1 = $(".DiscAmount").val();
    if(Number(DiscAmount1) >= 100){
        alert("Discount can not be more than or 100%");
    }else if(Number(DiscAmount1) < 0){
        alert("Discount can not be less than 0%");        
    }else if(Number(DiscAmount1) === 0 ){
        alert("Discount can not be 0%");    
    }else {
    var discPrice = orgPrice1 * DiscAmount1 / 100;
    var result1 = orgPrice1 - discPrice;
    $(".displayOriginal").text(orgPrice1 + "$");
    $(".displayDiscount").text(discPrice + "$");
    $(".displayResult").text(result1 + "$");
    }
});