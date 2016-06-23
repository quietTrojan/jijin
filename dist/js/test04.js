$(function(){
    $('#textInput').on('input',function(){
        var inputVal=$(this).val();
        $(this).val(inputVal.replace(/\D*/g,""));
    });
});
