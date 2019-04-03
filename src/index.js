document.addEventListener('DOMContentLoaded', function(){  // Добавляем событие DOMContentLoaded к document, которое отработает, когда загрузится DOM

    var form = document.querySelector('.form-message'),         // Выбираем селекторы
        formResult = document.querySelector('.form-result');
        
        form.addEventListener("submit", function(event){    // Добавляем событие к форме
            
            event.preventDefault(); // Что это такое?
            
            var inputName = form.querySelector('[name=name]');
            var inputText = form.querySelector('[name=text]');
        
            if(inputName.value === ''){ // Если значение введенного поля пусто то добавим класс, иначе удалим
                inputName.classList.add('form-input-empty');
            }else{
                inputName.classList.remove('form-input-empty');
            }
        
            if(inputText.value === ''){
                inputText.classList.add('form-input-empty');
            }else{
                inputText.classList.remove('form-input-empty');
            }
            
            if(inputName.value !== '' && inputText.value !== ''){ // Если оба значения не пусты
        
                var resultItem = document.createElement('div'); // Создадим div объект
                    resultItem.classList.add('result-item'); // Добавим ему класс
            
                var resultName = document.createElement('div'); // Создадим div объект
                    resultName.classList.add('result-name'); // Добавим ему класс
                    resultName.innerHTML = inputName.value; // Добавим внутрь div значение из поля ввода input
    
                var resultValue = document.createElement('div');
                    resultValue.classList.add('result-value');
                    resultValue.innerHTML = inputText.value;

                var resultDelete = document.createElement('button');
                    resultDelete.classList.add('result-delete');
                    resultDelete.innerHTML = "X";

                    resultDelete.addEventListener('click', function(){ // Добавляем событие к кнопке
                        if(confirm('Удалить запись пользователя:'+resultName.innerHTML+'?')){ // См. confirm
                            resultItem.remove(); // удалим элемент из dom
                        }
                    });
                

                    console.log('resultItem без структуры:', resultItem);

                    resultItem.append(resultName); // добавим <div class="result-name"></div> в <div class="result-item"></div>
                    resultItem.append(resultValue); // добавим <div class="result-value"></div> в <div class="result-item"></div>
                    resultItem.append(resultDelete); // добавим <button class="result-delete"></button> в <div class="result-item"></div>
            
                    console.log('resultItem со структурой:', resultItem);


                    formResult.append(resultItem); // добавим уже набитый дивами <div class="result-item">...</div>  в '.form-result'
        
                    inputName.value = ''; // отчистим (присвоим путые данные, в скобочках пустота) значения поля ввода имени
                    inputText.value = ''; // аналогично 
            }
        
        });
        
});
