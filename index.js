var arrList = ['triangle_left','triangle_right','btn','arrow','clue1','clue2','clue3','clue4','left1','right1','middle1','left2','right2','middle2','left3','right3','middle3','left4','right4','middle4','left5','right5','middle5','left6','right6','middle6','left7','right7','middle7','left8','right8','middle8','left9','right9','middle9','left10','right10','middle10','left11','right11','middle11','left12','right12','middle12','futrue'];
var arrObj = {};

window.onload = function() {
	
	var p1 = document.getElementById('page1').clientHeight;
	var p2 = document.getElementById('page2').clientHeight;
	var p3 = document.getElementById('page3').clientHeight;
	var p4 = document.getElementById('page4').clientHeight;
	var p5 = document.getElementById('page5').clientHeight;

	for(var i=0; i < arrList.length; ++i) {
		arrObj[arrList[i]] = document.getElementById(arrList[i]);
	}

	window.addEventListener('scroll', function(e) {
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

		if(scrollTop > 0 && scrollTop < p1*0.5 ){
			arrObj.triangle_left.classList.add('triangle_left');
			arrObj.triangle_right.classList.add('triangle_right');
			arrObj.btn.classList.add('add_btn');
			arrObj.arrow.classList.add('add_arrow');
		}
		if(scrollTop > p1*0.5 && scrollTop < p1 + p2){
			for(var i =0;i < 4;++i) {
				arrObj['clue' + (i + 1)].classList.add('add_clue' + (i + 1));
			}
		}
		if(scrollTop > (p1 + p2*0.1)){
			for(var i = 0;i < 4;++i){
				arrObj['left' + (i + 1)].classList.add('left_' + (i + 1));
				arrObj['right' + (i + 1)].classList.add('right_' + (i + 1));
				arrObj['middle' + (i + 1)].classList.add('middle_' + (i + 1));
			}
		}
		if(scrollTop > (p1 + p2*0.5)){
			for(var i = 4;i < 8;++i){
				arrObj['left' + (i + 1)].classList.add('left_' + (i + 1));
				arrObj['right' + (i + 1)].classList.add('right_' + (i + 1));
				arrObj['middle' + (i + 1)].classList.add('middle_' + (i + 1));
			}
		}
		if(scrollTop > (p1 + p2)){
			for(var i = 8;i < 12;++i){
				arrObj['left' + (i + 1)].classList.add('left_' + (i + 1));
				arrObj['right' + (i + 1)].classList.add('right_' + (i + 1));
				arrObj['middle' + (i + 1)].classList.add('middle_' + (i + 1));
			}
		}
		if(scrollTop > p1 + p2 + p3 + p4*0.3){
			arrObj.futrue.classList.add('add_futrue');
		}
		
	});
}