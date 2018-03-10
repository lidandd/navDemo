/**
 * 导航效果
 */
$(function () {
    var flag=0; //开关
    $(document).on("mouseenter",".nav-center li",function () {
        flag=1;
        $(".nav-center li a").css("color","#58789a");
        $("a",this).stop().css("color","#fff");
        $(".float").stop().animate({//滑块效果
            left:this.offsetLeft,width:this.offsetWidth,height:5,right:'0'
        },200);
        //悬浮下拉框效果
        $(this).addClass("current").siblings().removeClass('current');
        $(".nav-modal").show();
        $(".nav-modal").stop().animate({"height":"460px"},500);
        $(".nav-modal-list").eq($(this).index()).show().siblings(".nav-modal-list").hide();
        //显示滑过对象的内容
        navModal(".nav-product-list ul li",".nav-product-cloud"); //产品
        navModal(".nav-product-cloud ul li"); //产品
        navModal(".nav-solve-list ul li"); //解决方案
        navModal(".nav-zoology-list ul li",".nav-zoology-con"); //合作与生态
        navModal(".nav-zoology-con ul li"); //合作与生态
        navModal(".nav-support-list ul li"); //支持
    });
    $(document).on("mouseleave",".nav-center li",function () {
        if(flag){
            $(".float").stop().animate({
                left:this.offsetLeft,width:this.offsetWidth,height:5
            },200);
            flag=0;
        }
        // $(".nav-center li a").css("color","#58789a");
    });
    //鼠标离开悬浮框事件
    $(document).on("mouseleave",".nav-modal",function (event) {
        event.preventDefault();
        $(".nav-modal").hide();
        $('.nav_modal>*').show();
        flag=1;
        $(".nav-center .float").stop().animate({
            left:this.offsetLeft,width:this.offsetWidth
        },200);
        $(".nav-center li a").css("color","#58789a");
    });
});
/* 显示滑过对象的内容
* obj1 对象
* obj2 对象的内容
* */
function navModal(obj1,obj2) {
    $(obj1).on("mouseenter",function () {
        $(this).addClass("highlight").siblings().removeClass('highlight');
        $(obj2).eq($(this).index()).show().siblings(obj2).hide();
    });
}
