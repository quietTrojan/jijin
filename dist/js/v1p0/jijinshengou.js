$(function(){
    var ratePopBox=$('#ratePopBox');
    var maskDiv=$('#maskDiv');
    $('#rateWrap').on('click',function(){
        //maskDiv.add(ratePopBox).show();
        alert($(window).height()+'*'+$(window).width());
    });
    $('#btn_know').on('click',function(){
        maskDiv.add(ratePopBox).hide();
    });
    $('#moneyInput').on('input',function(){
        var inputVal=$(this).val();
        var newVal='';
        if(/^\d+\.\d{3,}$/.test(inputVal)){
            newVal=inputVal.match(/^\d+\.\d{2}/)[0];
            $(this).val(newVal);
        }
    });
});