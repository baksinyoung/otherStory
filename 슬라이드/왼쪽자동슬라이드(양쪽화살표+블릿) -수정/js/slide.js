$(document).ready(function(){
	
	// 1. 왼쪽방향 자동 슬라이드 (1.5초간격으로 leftMove함수 호출. )
	let  autoSlide =  setInterval(  leftMove , 1500);
	//////////////////////////////////////////
	//3. (<)모양 화살표 클릭하면 rightMove()함수 호출
	$(".arr1").click(function(){				
				rightMove();
	});
	//////////////////////////////////////////
	//4.  (>) 모양 화살표 클릭하면 leftMove()함수 호출
	$(".arr2").click(function(){ 				
				leftMove();
	});	
	//////////////////////////////////////////
	// 2-1. 왼쪽방향 이동하는 스크립트 ((공통))
	function leftMove(){
		$(".arr2").prop( "disabled" , true );
		clearInterval( autoSlide );	
		let n2 = $( ".orange" ).index();
		n2++;
		//console.log(  n2  );
		if(n2 ==5 ) {n2 =0;}
		$( "#circle button" ).eq(  n2 ).addClass( "orange" ).siblings().removeClass( "orange" );	
		if(  $( "#slide" ).position().left <= "-3900"  ){
			 $( "#slide" ).css("left" , 0);			 
		}
		$( "#slide" ).stop().animate({  left : "-=800px"  } , 700 ,  function(){				
				autoSlide =  setInterval(  leftMove  ,   1500 );
				$( ".arr2" ).prop( "disabled" , false );					
		});		
		//console.log( $( "#slide" ).position().left  );		
	} //leftMove1() 끝.		
	/////////////////////////////////////	
	//5.  오른쪽방향 이동하는 스크립트 ((공통))
	function rightMove(){
		$(".arr1").prop( "disabled" , true );
		clearInterval( autoSlide );		
		let n2 = $( ".orange" ).index();
		n2--;
		//console.log(  n2  );
		if(n2 ==5 ) {n2 =0;}
		$("#circle button").eq(  n2 ).addClass( "orange" ).siblings().removeClass( "orange" );	
		if(  $( "#slide" ).position().left >=  "-100"  ){
			 $( "#slide" ).css(  "left" , "-4000px"  );			 
		}
		$( "#slide" ).stop().animate({  left : "+=800px"  } , 700 ,  function(){				
				autoSlide =  setInterval(  leftMove  ,   1500);
				$(".arr1").prop("disabled", false);					
		});		
		console.log( $( "#slide" ).position().left  );		
	} //rightMove1() 끝.	
	//////////////////////////////////////////
	//6.  원형 블릿 클릭, 슬라이드
	$("#circle button").click(function(){	
		clearInterval( autoSlide );
		$(".arr2" ).prop( "disabled" , true );		
		let n2 = $( ".orange" ).index();
		let  i = $(this).index();//클릭한 버튼의  index번호
		//console.log( j );
		$( "#slide" ).stop().animate({  left : (-800) * i  } , 700, function(){				
				autoSlide =  setInterval(  leftMove  ,   1500);
				$(".arr2").prop("disabled", false);
				//console.log(  $( "#slide" ).position().left  );
		});			
		$(this).addClass("orange").siblings().removeClass("orange");	
	});//원형블릿 끝.
	
	
});///////////////////////////////////////// 전체 끝