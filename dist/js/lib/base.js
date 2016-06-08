var emptyReg=/^\s*$/g;
var unitObj={
    urlPara:function(){
        function getParaObj(urlStr){
            var paraObj={};
            var curParaMap=null;
            var curParaKey="";
            var curparaVal="";
            parArr=urlStr.split('&');
            for(var i= 0,max=parArr.length;i<max;i++){
                curParaMap=parArr[i].split('=');
                curParaKey=curParaMap[0];
                if(typeof curParaMap[1] != "undefined"){
                    curparaVal=encodeURIComponent(curParaMap[1]);
                }else{
                    curparaVal="";
                }
                paraObj[curParaKey]=curparaVal;
            }
            return paraObj;
        }
        return {
            getPara:function(urlStr,parName){
                if(arguments.length=1){
                    parName=urlStr;
                    urlStr=location.search.slice(1);
                }
                return getParaObj(urlStr)[parName];
            },
            getAll:function(urlStr){
                if(typeof urlStr =="undefined"){
                    urlStr=location.search.slice(1);
                }
                return getParaObj(urlStr);
            }
        }
    }()
}
function showToast(tipText){
    var toastBox=null;
    var inner=null;
    var tip_p=null;
    if($('#toastBox').size()==0){
        toastBox=$('<div class="toastBox"><div class="inner"><p class="tip_p"></p></div></div>').appendTo($(document.body));
    }else {
        toastBox=$('#toastBox');
    }
    inner=toastBox.find('.inner');tip_p=toastBox.find('.tip_p');
    tip_p.text(tipText);
    toastBox.show();
    inner.css({
        'marginTop':-inner.outerHeight()/2
    });
    toastBox.delay(500).hide(0);
}
function hideToast(){
    $('#toastBox').hide();
}
