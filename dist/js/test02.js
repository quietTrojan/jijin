$(function(){
    var submitLink=$('<a href="javascript:;"></a>');
    submitLink.attr('href','http://www.baidu.com');
    $('#btn').on('click',function(){
        submitLink.get(0).click();
        //submitLink.trigger('click');
    });
    $('#testLink').on('click',function(event){
        $(this).attr('href','http://www.baidu.com');
        //event.preventDefault();
    })
});