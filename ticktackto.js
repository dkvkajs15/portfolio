var b1 = document.body;
var table1 = document.createElement('table');
var julldle = [];
var candle  =[];
var turn = 'X';

var callback = function (Event ){
    
	var mutjull = julldle.indexOf(Event.target.parentNode);
	console.log('mutjull', mutjull);
	var mutcan = candle[mutjull].indexOf(Event.target);
	console.log('mutcan', mutcan);

	if(candle[mutjull][mutcan].textContent !== '') {
		console.log('NOT Empty Can');
    } 
    else{ // ��ĭ �� ���
        
        console.log('Empty Can');
        candle[mutjull][mutcan].textContent = turn;
        
        var full = false;
        
        //������ �˻�
        if(
            candle[mutjull][0].textContent === turn &&
            candle[mutjull][1].textContent === turn &&
            candle[mutjull][2].textContent === turn
        ) {
            full = true;
        }
        
        //������ �˻�
        if (
            candle[0][mutcan].textContent === turn &&
            candle[1][mutcan].textContent === turn &&
            candle[2][mutcan].textContent === turn
        ) {
            full = true;
        }
        
        //�밢�� �˻�
        if(mutjull = mutcan === 0 || Math.abs(mutjull - mutcan) === 2) {
            if(
                candle[0][0].textContent === turn &&
                candle[1][1].textContent === turn &&
                candle[2][2].textContent === turn
            )  {
                full = true;
            }
        }
        
    if(full) {
        console.log(turn + ' User Win');
    }
        
    else { // �� ��á����
        if(turn == 'X'){
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




