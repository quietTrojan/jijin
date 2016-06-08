var trendDataArr=[
    [1,2,3,4,5,6],
    [4,5,6,1,2,3],
    [1,4,5,2,3,6],
    [1,2,6,3,4,5]
];
function createPieBox(){
    $('#pieBox').highcharts({
        chart: {
            margin: 0,
            spacing:0,
            type: 'pie'
        },
        credits: {
            enabled:false
        },
        colors: ['#F98A97','#3DB1D7','#B18CCB','#FFDC84'],
        legend:{
            enabled:false
        },
        title: {
            text: '<div class="pieTitle"><p>总规模(万元)</p><p>2.345</p></div>',
            useHTML: true
        },
        tooltip: {
            enabled: false
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled:false
                },
                innerSize: '65',
                size:140,
                borderWidth: 0,
                states: {
                    hover: {
                        enabled: false
                    }
                }
            },
            //通用配置
            series: {
                animation: false
            }
        },
        series: [{
            data: [
                {
                    name: "股票",
                    y: 25
                },
                {
                    name: "债券",
                    y: 10
                },
                {
                    name: "银行",
                    y: 40
                },
                {
                    name: "其它",
                    y: 25
                }
            ]
            /*data: [
                {
                    name: "股票",
                    y: 125
                },
                {
                    name: "债券",
                    y: 0
                },
                {
                    name: "银行",
                    y: 0
                },
                {
                    name: "其它",
                    y: 0
                }
            ]*/
        }]
    });
}
$(function(){
    $('#trendBox').highcharts({
        chart: {
            spacingRight:0,
            spacingBottom:0,
            marginBottom:10,
            backgroundColor:'rgba(255,255,255,0)',
            animation:false
        },
        title: {
            text:null //让title标题隐藏
        },
        xAxis: {
            title: {
                text: null
            },
            lineWidth:0,
            tickWidth:0,
            labels: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text:null
            },
            gridLineWidth:0,
            labels:{
                enabled:true
            }
        },
        tooltip: {
            enabled: false
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            //区域图
            area: {
                fillColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                    stops: [
                        [0, 'rgba(255,156,60,0.3)'],
                        [1,'rgba(255,156,60,0)']
                    ]
                },
                lineColor:'#ff9c3c'
            },
            //通用配置
            series: {
                animation: false,
                lineWidth: 2,
                states: {
                    hover: {
                        enabled: false
                    }

                },
                marker: {
                    enabled: false,
                    states: {
                        hover: {
                            enabled: false
                        }
                    }
                }
            }
        },
        credits: {
            enabled: false // 禁用版权信息
        },
        series: [
            {
                type: 'area',
                data: trendDataArr[0].concat()
            }
        ]
    });


//    tab切换
    $('#tabHeader').on('click','li',function(){
        if($(this).hasClass('active')){
            return;
        }
        var curIndex=$(this).index();
        var tabContItems=$('#tabContWrap .tabContItem');
        $(this).siblings().removeClass('active');
        $(this).addClass('active');

        tabContItems.hide();
        tabContItems.eq(curIndex).show();
        if(curIndex==1 && !$(this).data('pieIsinit')){
            createPieBox();
            $(this).data('pieIsinit',true);
        }
    });

    $('#tabBtnBox').on('click','a',function(){
        var trendChart=$('#trendBox').highcharts();
        var curIndex=$(this).index();
        if($(this).hasClass('active')){
            return;
        }

        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        trendChart.series[0].setData(trendDataArr[curIndex]);
    });

});