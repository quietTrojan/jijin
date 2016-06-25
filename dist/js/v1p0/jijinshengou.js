$(function(){
    var ratePopBox=$('#ratePopBox');
    var maskDiv=$('#maskDiv');
    $('#rateWrap').on('click',function(){
        maskDiv.add(ratePopBox).show();
    });
    $('#btn_know').on('click',function(){
        maskDiv.add(ratePopBox).hide();
    });
});