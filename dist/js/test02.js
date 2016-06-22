$(function(){
    var submitLink=$('<a href="javascript:;"></a>');
    submitLink.attr('href','http://www.baidu.com');
    $('#btn').on('click',function(){
        submitLink.get(0).click();
        //submitLink.trigger('click');
    });
    $('.testLink').on('click',function(event){
        var flag=$(this).data('flag');
        if(flag){
            $(this).attr('href','http://www.baidu.com');
        }else{
            event.preventDefault();
        }
        //event.preventDefault();
    })
});