$(document).ready(function(){

	let autoSlide=setInterval(leftMove,2500);
	
	function leftMove(){
		clearInterval(autoSlide);
		$("#slide").stop().animate({left:"-1600px"},1000,function(){
			$("#slide").append($(this).children().first());
			$("#slide").css("left","-800px");
			autoSlide=setInterval(leftMove,2500);
		});
	}
	//  <화살표누르면 오른쪽 방향으로 이동
	$(".arr1").click(function(){
		rightMove();
	});
	//  >화살표누르면 왼쪽 방향으로 이동
	$(".arr2").click(function(){
		leftMove();
		});	
		
	function rightMove(){
		clearInterval(autoSlide);
		$("#slide").stop().animate({left:0},1000,function(){
			$("#slide").prepend($(this).children().last());
			$("#slide").css("left","-800px");
			autoSlide=setInterval(leftMove,2500);
		});	
	}
	
/*
	//자동슬라이드 (왼쪽방향으로)
	let z = setInterval( y, 2000 );

	//왼쪽화살표버튼(왼쪽방향으로 이동)
	$(".arr1").click(function(){
			y();
	}); ////왼쪽화살표버튼. 끝
	
	//오른쪽화살표버튼(오른쪽방향으로 이동)
	$(".arr2").click(function(){
			x();
	});////오른쪽화살표버튼. 끝
	
	//오렌지색 원형아이콘 index
	let i = $("#circle button.active").index();
	
	function x(){//수동으로 오른쪽방향 이동
		clearInterval(z);
		i = $("#circle button.active").index();
		$("#slide").stop().animate({left:0},1000,function(){  //#slide를 css에서 -800px  해두었기 때문에 left 0으로하면 오른쪽으로 이동하는 것으로 보임
				i--;
				if(i == -1){
					i=4;
				}
				$("#circle button").removeClass("active");
				$("#circle button").eq(i).addClass("active");
				$("#slide").prepend( $(this).children().last() );
				$("#slide").css("left", "-800px");
				z = setInterval( y, 2000 );
		});
	}	//오른쪽방향이동. 끝
		
	function y(){//왼쪽방향이동
		clearInterval(z);
		i = $("#circle button.active").index();	
		$("#slide").stop().animate({ left : "-1600px" },1000,function(){ 
				i++;
				if(i==5){
					i=0;
				}
				$("#circle button").removeClass("active");
				$("#circle button").eq(i).addClass("active");
				$("#slide").append( $(this).children().first() );
				$("#slide").css("left", "-800px");
				z = setInterval( y, 2000 );
		});
	}//왼쪽방향이동. 끝
	
	//원형아이콘 클릭
	$("#circle button").click(function(){
			clearInterval(z);	
			i = $("#circle button.active").index();
			let j = $(this).index();
			let jj = j-i;//0-4=-4;
			console.log("원래" + i + "클릭한곳" + j + "증감" + jj);
			if(jj>0){				
				for( let x = 0; x<jj; x++){
					$("#slide").stop().animate({ left : "-1600px" },"fast",function(){
							$("#slide").append( $(this).children().first() );
							$("#slide").css("left", "-800px");							
					});					
				}
				$("#circle button").removeClass("active");
				$(this).addClass("active");
				z = setInterval( y, 2000 );
			}
			if(jj<0){
				for( let x = 0; x>jj; x--){
					$("#slide").stop().animate({ left :0 },"fast",function(){		
							$("#slide").prepend( $(this).children().last() );
							$("#slide").css("left", "-800px");							
					});
				}
				$("#circle button").removeClass("active");
				$(this).addClass("active");
				z = setInterval( y, 2000 );
			}			
	});	////원형아이콘 클릭. 끝
	*/
	
});