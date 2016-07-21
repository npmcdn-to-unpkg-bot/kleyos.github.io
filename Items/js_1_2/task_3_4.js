var test = {
	data: [{
		question:'Вопрос №1',
		answer:['Вариант ответа №1','Вариант ответа №2','Вариант ответа №3']
		}, 
		{
		question:'Вопрос №2',
		answer:['Вариант ответа №1','Вариант ответа №2','Вариант ответа №3']	
		},
		{
		question:'Вопрос №3',
		answer:['Вариант ответа №1','Вариант ответа №2','Вариант ответа №3']	
		}
	],
	createTitle: function(){
		var tit = document.createElement('h1');
		tit.innerHTML = "Тест по программированию";
		document.body.appendChild(tit);
	},
	createForm: function(){
		var wrap = document.createElement('div'),
			// br = document.createElement('br')
			btn = document.createElement('button');
			wrap.className = "wrapper";
			
			for (var i = 0; i<this.data.length; i++){
				var divCheckbox = document.createElement('div'),
					numberQuestion = this.data[i],
					question = document.createElement('h4');
				
				question.innerHTML = numberQuestion.question;
				divCheckbox.className = "checkbox";
				divCheckbox.appendChild(question);
				
				for (var j = 0; j < numberQuestion.answer.length; j++) {
					var label = document.createElement('label');
					
					label.innerHTML = ('<input type="checkbox">'+numberQuestion.answer[j]+'<br>');
					divCheckbox.appendChild(label);
					divCheckbox.innerHTML +=('<br>');
					wrap.appendChild(divCheckbox);
				}
				divCheckbox.innerHTML +=('<br>');

			}
		btn.className = "btn btn-success btn-large";
		btn.type = "submit"
		btn.innerHTML = ('Проверить мои результаты');
		
		wrap.appendChild(btn);
		document.body.appendChild(wrap);
	}
	
};
test.createTitle();
test.createForm();
