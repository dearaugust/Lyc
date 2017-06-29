window.onload=function(){

	var show = document.getElementById('nowTime')
	var time = function(){
		var date = new Date();
		let year = date.getFullYear()
		let month = date.getUTCMonth()
		let today = date.getDate()
		let hour = date.getHours();
		let minute = date.getMinutes();
		let second = date.getSeconds();
		if(hour<10){
			hour = '0'+hour;
		}
		if(minute<10){
			minute= '0'+minute;
		}
		if(second<10){
			second= '0'+second;
		}
		show.innerHTML = ('现在时间:'+year+'年'+(month+1)+'月'+today+'日'+hour+':'+minute+':'+second);
	}
	time();
	var t = setInterval(time,1000);

	$("nav button").click(function(){
        let num = $(this).index()
        $(this).addClass('active')
        $(this).siblings().removeClass('active')
        $("section>div").eq(num).removeClass("none");
        $("section>div").eq(num).siblings('div').addClass("none")
    })
    $(".img").height($(".pano").height())
    $(".img").width($(".pano").width())

    $('.navHover').hover(function(){
		$(this).find('span').addClass('aHover').parent().siblings().find('span').removeClass('aHover');
	},function(){
		$(this).find('span').removeClass('aHover');
	})
}
