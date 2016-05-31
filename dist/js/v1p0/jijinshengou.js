$(function(){
    var ratePopBox=$('#ratePopBox');
    var maskDiv=$('#maskDiv');
    var submitBtn=$('#submitBtn');

    $('#rateWrap').on('click',function(){
        maskDiv.add(ratePopBox).show();
    });
    $('#btn_know').on('click',function(){
        maskDiv.add(ratePopBox).hide();
    });
    $('#titleWrap').on('click',function(){
        var status_span=$(this).find('.status_span');
        if(status_span.hasClass('selected')){
            status_span.removeClass('selected');
            submitBtn.addClass('disabled');
        }else{
            status_span.addClass('selected');
            submitBtn.removeClass('disabled');
        }
    });
});