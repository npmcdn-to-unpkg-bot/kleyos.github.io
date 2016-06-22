function powMath(a,b){
	var result = 1;
	for (var i = 1; i <= b; i++) {
		result = result*a;
	}
	return result;
}
function masNames(){
	var arr = [], 
		findName, 
		flag = false;
	for (var i = 0; i < 5; i++) {
		arr.push(prompt("Введите имя в массив", ""));
		console.log(arr);
	}
	findName = prompt("Введите имя для входа", "");
	for (var i = 0; i < arr.length; i++){
		if(findName == arr[i]){
			flag = true;
		}
	}
	if (flag == true){
		alert(findName+", вы успешно вошли");
	}
	else{
		alert(findName+" не найдено!");
	}
}
var a = parseInt(prompt("Введите первое число", "")),
 	b = parseInt(prompt("Введите степень", ""));

console.log(powMath(a,b));
masNames();