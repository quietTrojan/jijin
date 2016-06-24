$(function(){
    var ratePopBox=$('#ratePopBox');
    var maskDiv=$('#maskDiv');
    $('#rateWrap').on('click',function(){
        maskDiv.add(ratePopBox).show();
    });
    $('#btn_know').on('click',function(){
        maskDiv.add(ratePopBox).hide();
    });
    var numkeyBoard=new NumkeyBoard({
        "inputBox":$('.keyBoardInput'),
        "verifyFn":function(curNum,inputText){
            if(inputText.indexOf('.')!=-1){
                if(curNum=="."){
                    return "";
                }
            }
            if(/\.\d{2}/.test(inputText)){
                return "";
            }
            return curNum;
        }
    });
});