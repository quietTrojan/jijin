$(function(){
    var submitLink=$('<a href="javascript:;"></a>');
    submitLink.attr('href','http://www.baidu.com');
    $('#btn').on('click',function(){
        submitLink.get(0).click();
    });
});