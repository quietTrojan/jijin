/**
 * 虚拟数字键盘构造器
 * @constructor
 * @param jsonObj json格式的参数对象
 */
function NumkeyBoard(jsonObj){
    var inputSpans=jsonObj.inputBox.find('span');
    this.inputBox=jsonObj.inputBox;
    this.input=inputSpans.eq(0);
    this.pholder=inputSpans.eq(1);
    this.cursorSpan=inputSpans.eq(2);
    this.verifyFn=jsonObj.verifyFn;
    this.init();
}
NumkeyBoard.prototype={
    "constructor":NumkeyBoard,
    "htmlStr":'<div class="num_keyBoardBox">'+
    '    <div class="header">'+
    '        <a href="javascript:;" class="okBtn">完成</a>'+
    '    </div>'+
    '    <div class="panel">'+
    '        <div class="lineItme">'+
    '            <div class="cellItem" data-num="1">'+
    '                <span>1</span>'+
    '                <span></span>'+
    '            </div>'+
    '            <div class="cellItem" data-num="2">'+
    '                <span>2</span>'+
    '                <span>abc</span>'+
    '            </div>'+
    '            <div class="cellItem" data-num="3">'+
    '                <span>3</span>'+
    '                <span>def</span>'+
    '            </div>'+
    '        </div>'+
    '        <div class="lineItme">'+
    '            <div class="cellItem" data-num="4">'+
    '                <span>4</span>'+
    '                <span>ghi</span>'+
    '            </div>'+
    '            <div class="cellItem" data-num="5">'+
    '                <span>5</span>'+
    '                <span>jkl</span>'+
    '            </div>'+
    '            <div class="cellItem" data-num="6">'+
    '                <span>6</span>'+
    '                <span>mno</span>'+
    '            </div>'+
    '        </div>'+
    '        <div class="lineItme">'+
    '            <div class="cellItem" data-num="7">'+
    '                <span>7</span>'+
    '                <span>pqrs</span>'+
    '            </div>'+
    '            <div class="cellItem" data-num="8">'+
    '                <span>8</span>'+
    '                <span>tuv</span>'+
    '            </div>'+
    '            <div class="cellItem" data-num="9">'+
    '                <span>9</span>'+
    '                <span>wxyz</span>'+
    '            </div>'+
    '        </div>'+
    '        <div class="lineItme">'+
    '            <div class="cellItem operator" data-num=".">'+
    '                <span class="dit">.</span>'+
    '            </div>'+
    '            <div class="cellItem" data-num="0">'+
    '                <span class="zero">0</span>'+
    '            </div>'+
    '            <div class="cellItem operator del">'+
    '            </div>'+
    '        </div>'+
    '    </div>'+
    '</div>'+
    '<div class="num_keyBoardEmpty"></div>',
    "init":function(){
        var keyBoardBox=null;
        if($('.num_keyBoardBox').size()!=0){
            this.keyBoard=$('.num_keyBoardBox');
            this.keyBoardEmpty=$('.num_keyBoardEmpty');
        }else{
            keyBoardBox=$(this.htmlStr).appendTo($(document.body));
            this.keyBoard=keyBoardBox.filter('.num_keyBoardBox');
            this.keyBoardEmpty=keyBoardBox.filter('.num_keyBoardEmpty');
        }
        if(emptyReg.test(this.input.text())){
            this.pholder.show();
        }
        this.bindEvent();
    },
    "bindEvent":function(){
        var keyBoard=this.keyBoard;
        var _this=this;
        keyBoard.on('touchstart','.cellItem',function(event){
            event.preventDefault();
            if(!$(this).hasClass('operator')){
                $(this).addClass('aniRun');
            }
        });
        keyBoard.on('touchend','.cellItem',function(){
            event.preventDefault();
            var curNum=$(this).data('num');

            $(this).removeClass('aniRun');
            if(typeof curNum != "undefined"){
                _this.output(curNum);
            }else if($(this).hasClass('del')){
                _this.delput();
            }
        });
        keyBoard.find('.okBtn').click(function(){
            _this.hide();
        });
        this.inputBox.on('click',function(){
            _this.show();
        });
    },
    "output":function(curNum){
        var verifyFn=this.verifyFn;
        var inputText=this.input.text();

        if(typeof verifyFn !="undefined"){
            curNum=verifyFn.apply(this,[curNum,inputText]);
        }
        this.updateInputVal(inputText+curNum);
    },
    "delput":function(){
        var inputText=this.input.text();
        inputText=inputText.substr(0,inputText.length-1);
        this.updateInputVal(inputText);
    },
    "updateInputVal":function(newText){
        this.input.text(newText);
    },
    "show":function(){
        this.pholder.hide();
        this.keyBoard.show();
        this.cursorSpan.css({
            'visibility':'visible'
        });
        this.calculateDis();
    },
    "hide":function(){
        this.keyBoard.hide();
        this.keyBoardEmpty.hide();
        this.cursorSpan.css({
            'visibility':'hidden'
        });
        if(typeof this.oldScrollTop != "undefined"){
            $(window).scrollTop(this.oldScrollTop);
        }
        if(emptyReg.test(this.input.text())){
            this.pholder.show();
        }
    },
    "calculateDis":function(){
        var inputBox=this.inputBox;
        var disTobottom=0;
        var addVal=0;
        var oldScrollTop=this.oldScrollTop=$(window).scrollTop();
        var tarScrollTop=0;

        disTobottom=$(window).height()-(inputBox.outerHeight()+inputBox.offset().top-$(window).scrollTop());
        addVal=disTobottom-220-20;
        if(addVal<0){
            this.keyBoardEmpty.height(-addVal).show();
            tarScrollTop=oldScrollTop+(-addVal);
            $(window).scrollTop(tarScrollTop);
        }
    }
}
$(function(){
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
