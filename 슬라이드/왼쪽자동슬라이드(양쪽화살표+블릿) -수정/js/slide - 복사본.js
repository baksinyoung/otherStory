$(document).ready(function(){
	
	// 1. 왼쪽방향 자동 슬라이드
	let  autoSlide =  setInterval(  leftMove1  ,   2000);
	
	// 2-1. 왼쪽방향 이동하는 스크립트 ((공통))
	function leftMove1(){
		clearInterval( autoSlide );
		$(".arr2").attr("disabled", true);
		let n2 = $(".orange").index();
		n2++;
		//console.log(  n2  );
		if(n2 ==5 ) {n2 =0;}
		$("#circle button").eq(  n2 ).addClass("orange").siblings().removeClass("orange");	
		$( "#slide" ).stop().animate({  left : "-1600px"  } , 500 ,  function(){
				$( "#slide" ).append(    $(this).children().first()    );
				$( "#slide" ).css("left" , "-800px");
				autoSlide =  setInterval(  leftMove1  ,   2000);
				$(".arr2").attr("disabled", false);
		});
	}	
	
	// 2-2. 왼쪽방향 이동하는 스크립트
	function leftMove2(){
		clearInterval( autoSlide );
		$(".arr2").attr("disabled", true);
		let n2 = $(".orange").index();
		n2=n2+2;
		if(n2 ==5 ) {n2 =0;}
		$("#circle button").eq(  n2 ).addClass("orange").siblings().removeClass("orange");	
		$( "#slide" ).stop().animate({  left : "-2400px"  } , 500 ,  function(){
				$( "#slide" ).append(    $(this).children().first()    );
				$( "#slide" ).append(    $(this).children().first()    );
				$( "#slide" ).css("left" , "-800px");
				autoSlide =  setInterval(  leftMove1  ,   2000);
				$(".arr2").attr("disabled", false);
		});	
	}
	
	// 2-3. 왼쪽방향 이동하는 스크립트
	function leftMove3(){
		clearInterval( autoSlide );
		$(".arr2").attr("disabled", true);
		let n2 = $(".orange").index();
		n2=n2+3;
		if(n2 ==5 ) {n2 =0;}
		$("#circle button").eq(  n2 ).addClass("orange").siblings().removeClass("orange");	
		$( "#slide" ).stop().animate({  left : "-3200px"  } , 500 ,  function(){
				$( "#slide" ).append(    $(this).children().first()  );
				$( "#slide" ).append(    $(this).children().first()  );
				$( "#slide" ).append(    $(this).children().first()  );
				$( "#slide" ).css("left" , "-800px");
				autoSlide =  setInterval(  leftMove1  ,   2000);
				$(".arr2").attr("disabled", false);
		});	
	}
	
	// 2-4. 왼쪽방향 이동하는 스크립트
	function leftMove4(){
		clearInterval( autoSlide );
		$(".arr2").attr("disabled", true);
		let n2 = $(".orange").index();
		n2=n2+4;
		if(n2 ==5 ) {n2 =0;}
		$("#circle button").eq(  n2 ).addClass("orange").siblings().removeClass("orange");	
		$( "#slide" ).stop().animate({  left : "-4000px"  } , 500 ,  function(){
				$( "#slide" ).append(    $(this).children().first()  );
				$( "#slide" ).append(    $(this).children().first()  );
				$( "#slide" ).append(    $(this).children().first()  );
				$( "#slide" ).append(    $(this).children().first()  );
				$( "#slide" ).css("left" , "-800px");
				autoSlide =  setInterval(  leftMove1  ,   2000);
				$(".arr2").attr("disabled", false);
		});	
	}
			
	//3. [ < ] 모양 화살표 클릭하면 오른쪽 방향으로 이동..
	$(".arr1").click(function(){
				 rightMove();
	});
	
	//4.  [ > ] 모양 화살표 클릭하면 왼쪽 방향으로 이동..
	$(".arr2").click(function(){ 
				leftMove1();
	});	
	
	//5.  오른쪽방향 이동하는 스크립트 ((공통))
	function rightMove(){
		clearInterval( autoSlide );
		$(".arr1").attr("disabled", true);
		let n1 = $(".orange").index();		
		n1--;		
		$("#circle button").eq(  n1 ).addClass("orange").siblings().removeClass("orange");		
		$("#slide").stop().animate({ left :  0  } , 500 , function(){
				$( "#slide" ).prepend(    $(this).children().last()    );
				$( "#slide" ).css("left" , "-800px");
				autoSlide =  setInterval(  leftMove1  ,   2000);
				$(".arr1").attr("disabled", false);
		});
	}
	
	//6.  원형 블릿 클릭, 슬라이드
	$("#circle button").click(function(){	
		let  i = $(".orange").index();// 클릭하기 전 '오렌지'버튼의  index번호
		//console.log( i );
		let  j = $(this).index();//  클릭한 버튼의  index번호
		//console.log( j );
		let p1 = i  - j;
		let p2 = 0;
		
		if( p1 < 0) {  
				p1 = Math.abs(i  - j);//절대값  
				p2=p1;
		}		
		
		else {				
			if(p1 == 1 ) {p2=4;}
			if(p1 == 2 ) {p2=3;}
			if(p1 == 3 ) {p2=2;}
			if(p1 == 4 ) {p2=1;}
		}
		
		switch(p2) {
			case 0 : 		break;
			case 1 : 		leftMove1(); 	break;
			case 2 :		leftMove2();  break;
			case 3 :		leftMove3(); 	break;
			default  :  	leftMove4(); 
		}		
		$(this).addClass("orange").siblings().removeClass("orange");	
	
	});
	
	
});////////////////////////// 전체 끝