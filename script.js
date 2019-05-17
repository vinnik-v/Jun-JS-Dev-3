
var divClick = document.querySelectorAll('.block');

var start = document.querySelector('.buttons');

var colors = ['red','pink','brown','yellow','green','blue','violet','dark-blue'];

var timer = function(millis){

		var minutes = 0;
		var seconds = 0;
		var time;
		
		if (millis >=1000){
			seconds++;
			millis = 0;
		}

		if (seconds >= 60){
			minutes++;
			seconds = 0;
		}
		
		time = minutes+':'+seconds+':'+millis/10;
		console.log(time);

		millis++;

}

start.onclick = function() {

	var status = true;

	var millis = 0;

	setTimeout(console.log("хуй"), 1000);

	// while (status){

	// 	setTimeout(timer(millis), 1);
		
	// }
	

	// var timer = function(){

	// 	return cnt++

	// }

	// var time = setTimeout(timer(), 1);

	// console.log(time);

	for (var i = 0; i < divClick.length; i++ ){

		for (var j = 0; j < colors.length; j++ ){

			divClick[i].classList.remove(colors[j]);
		}

	}

	var randCols = [];

	var randomSort = function(a, b){

		return Math.random() - 0.5;
	}

	for (var i = 0; i < 2; i++){

		colors.sort(randomSort);

		for (var j = 0; j < colors.length; j++) {

			randCols.push(colors[j]);
		}

	}

	for ( var i = 0; i < divClick.length; i++ ){

		divClick[i].classList.add(randCols[i]);
		divClick[i].classList.add('white');

	}

	var compare = [];
	var ids = [];
	var idsTrue = [];

	for ( var i = 0; i < divClick.length; i++ ){

		//console.dir(divClick[i].id);


		divClick[i].onclick = function(){

			if (idsTrue.indexOf(this.id) < 0){

				if (compare.length < 2){

					compare.push(this.classList[1]);
					ids.push(this.id);
					this.classList.remove('white');
				//console.dir('id '+ids);

			}

			if (compare.length == 2 && compare[0] == compare[1]){

				//console.log("заебись");
				//console.log(ids);
				for (var j = 0; j < ids.length; j++){

					idsTrue.push(ids[j]);
					console.log(idsTrue);

				}

				compare = [];
				ids = []
				

			} 

			if (compare.length == 2 && compare[0] != compare[1]){

				//console.log("нихуя");

				divClick[ids[0]].classList.add('white');
				divClick[ids[1]].classList.add('white');
				ids = []
				compare = [];
			}
		}

	}
}
}

