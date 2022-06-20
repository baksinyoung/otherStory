$(document).ready(function(){
	
	setInterval(move,1800); //1.5초 간격으로 호출
	
	function move(){
		//"-47vw"
		let w1 = $("#slide img").css("width") ;  //output   "1417px"  px문자가 있어서 안됐던것
		console.log(w1);
		let w2 =  parseInt( w1)  * (-1) + "px";
		console.log(w2);
		$("#slide").animate({left: w2  },1000,function(){
			$("#slide").append($("#slide img:first-child"));
			$("#slide").css("left",0);
		});
	}
	$(".menu01").mouseover(function(){
			$(".dept01").stop().slideDown(500);
			$(".dept01").stop().animate({height:"14vw"});
		});
		
	
	$(".menu01").mouseleave(function(){
		$(".dept01").stop().slideUp(500);
		$(".dept01").animate({height:0})
	});

	
	/*네비바*/
	/*
	$("ul li").mouseover(function(){
		$("ul nav").stop().slideDown(500);
		//$("ul li").animate({height:"150px"});
	});
	$("ul li").mouseleave(function(){
		$("ul nav").stop().slideUp(500);
		//$("ul li").animate()
	}); */
	/*슬라이드*/
	/*
	const $slide = $("#slideArea div");
	const $auto = setInterval(move , 1500);
	function move(){
		$slide.stop().animate({left:"-500px"},"slow",function(){
			$slide.append($slide.children().first());   /*append 뒤에 추가 한다. 즉, 1번에 있던 자식이 맨 뒤로 이동한다.*/
			/*
		$slide.css("left",0); /*빨간 박스 앞으로 온 img를 없애준다*/
		/*
		});
	}
	*/
});