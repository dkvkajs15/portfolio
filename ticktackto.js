var b1 = document.body;
var table1 = document.createElement('table');
var julldle = [];
var candle  =[];
var turn = 'X';
var result = document.createElement('div');

var callback = function (Event ){

	var mutjull = julldle.indexOf(Event.target.parentNode);
	console.log('mutjull', mutjull);
	var mutcan = candle[mutjull].indexOf(Event.target);
	console.log('mutcan', mutcan);

	if(candle[mutjull][mutcan].textContent !== '') {
		console.log('NOT Empty Can');
    }
    else{ // 빈칸 일 경우

        console.log('Empty Can');
        candle[mutjull][mutcan].textContent = turn;

        var full = false;

        //가로줄 검사
        if(
            candle[mutjull][0].textContent === turn &&
            candle[mutjull][1].textContent === turn &&
            candle[mutjull][2].textContent === turn
        ) {
            full = true;
        }

        //세로줄 검사
        if (
            candle[0][mutcan].textContent === turn &&
            candle[1][mutcan].textContent === turn &&
            candle[2][mutcan].textContent === turn
        ) {
            full = true;
        }

        //대각선 검사
        console.log("역 대각선 : "+Math.abs(mutjull+mutcan));
        if(mutjull = mutcan === 0 || Math.abs(mutjull - mutcan) === 2) {
		        console.log('대각선 통과');
            if((
                candle[0][0].textContent === turn &&
                candle[1][1].textContent === turn &&
                candle[2][2].textContent === turn
            ) || (candle[0][2].textContent === turn &&
                  candle[2][0].textContent === turn &&
                  candle[1][1].textcontent === turn)) {
                full = true;
            }
        }

    if(full) {
        console.log(turn + ' User Win');
        body.append(result);

        turn = 'X';
        candle.forEach(function(jull){
            jull.forEach(function(can) {
                can.textContent=' ';
            });
        });
    }else { // 다 안찼으면
        if(turn ==='X'){
			turn = '0';
		}
      else{
        turn = 'X';
      }
    }
	}
};




for(i=1; i<=3; i++){
	var jull = document.createElement('tr');

	julldle.push(jull);
	candle.push([]);

	for(var j=1; j<=3; j+=1){
		var can = document.createElement('td');

		can.addEventListener('click', callback);
		candle[i - 1].push(can);

		jull.appendChild(can);
	}
	table1.appendChild(jull);
}
b1.appendChild(table1);
console.log(julldle, candle);
