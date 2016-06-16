/*
var state = {
    'page_id': 1,
    'user_id': 5
};
var title = 'Hello World';
var url = '/jijin_v1.0/dist/xieyi.html';

history.pushState(state, title, url);
*/
$(function(){
    var numInput=$('#numInput');
    numInput.on({
        'focus':function(){
           $(this).attr('type','number');
        },
        'blur':function(){
            $(this).attr('type','text');
        }
    })
});