## Вопросы по javascript

<details>
<summary>Что-такое хэш-таблица?</summary>
<div> 
	<br />
	<p>Хэш-табли́ца или хеш-табли́ца — это структура данных, реализующая интерфейс ассоциативного массива, а именно, она позволяет хранить пары (ключ, значение) и выполнять три операции: операцию добавления новой пары, операцию поиска и операцию удаления пары по ключу.</p>
	<p>Подробней: https://ru.wikipedia.org/wiki/Хеш-таблица</p>
</div>
</details>

<details>
<summary>Что такое web workers и зачем они нужны?</summary>
<div> 
	<br />
	<p>Web Workers предоставляют простое средство для запуска скриптов в фоновом потоке. Поток Worker'а может выполнять задачи без вмешательства в пользовательский интерфейс. К тому же, они могут осуществлять ввод/вывод, используя XMLHttpRequest (хотя атрибуты responseXML и channel всегда будут равны null). Существующий Worker может отсылать сообщения в JavaScript код, который его создал, отправляя сообщения в обработчик событий, указанный этим кодом (и наоборот).</p>
	<p>Подробней: https://developer.mozilla.org/ru/docs/DOM/Using_web_workers</p>
</div>
</details>

<details>
<summary>Какие ограничения накладываются на поток Web Worker?</summary>
<div> 
	<br />
	<p>Потоки web worker не могут изменять HTML элементы, глобальные переменные и некоторые свойства окон, такие как window.location. Вы можете использовать типы данных javascript, вызовы XMLHttpRequest и прочее.</p>
</div>
</details>

<details>
<summary>Как создать поток web worker в JavaScript?</summary>
<div> 
	<br />
	<b>Подробней:</b>
	<ul>
		<li>https://developer.mozilla.org/ru/docs/DOM/Using_web_workers</li>
		<li>https://habrahabr.ru/post/132785/</li>
	</ul>
</div>
</details>

<details>
<summary>Как уничтожить объект web worker?</summary>
<div> 
	<br />
	<p>w.terminate();</p>
</div>
</details>

<details>
<summary>Зачем в HTML 5 введены события server-sent?</summary>
<div> 
	<br />
	<p>Подробней:</p>
	<ul>
		<li>https://ru.wikipedia.org/wiki/Server-sent_events</li>
		<li>https://habrahabr.ru/post/120429/</li>
	</ul>
</div>
</details>

<details>
<summary>Что такое неопределенные (undefined) и необъявленные (undeclared) переменные?</summary>
<div> 
	<br />
	<ul>
		<li>undefined - значение</li>
		<li>undeclared - ошибка ReferenceError</li>
	</ul>
	<p>Подробней: https://habrahabr.ru/post/159313/</p>
</div>
</details>

<details>
<summary>Что такое замыкание и как/для чего его используют?</summary>
<div> 
	<br />
	<p>Замыкания — это функции, ссылающиеся на независимые (свободные) переменные. Другими словами, функция, определённая в замыкании, «запоминает» окружение, в котором она была создана.</p>
	<b>Подробней</b>
	<ul>
		<li>https://htmlacademy.ru/blog/195-lets-learn-javascript-closures</li>
		<li>https://habrahabr.ru/post/38642/</li>
	</ul>
</div>
</details>

<details>
<summary>Объясните "JavaScript module pattern" и где он (паттерн) применяется?</summary>
<div> 
	<br />
	<p>Первостепенная задача не засорять пространство имен, но с модульностью ES2015 как таковая необходимость отпала.</p>
	<p>Вторстепенная задача классическое ООП. Публичные члены класса доступны всем, приватные только самому классу.
	В первой части есть ссылка на реальный пример модуля в ts</p>
</div>
</details>

<details>
<summary>Как Вы организуете свой код? (module pattern, наследование)?</summary>
<div> 
	<br />
	<p>Подробней: https://habrahabr.ru/post/131714/</p>
</div>
</details>

<details>
<summary>В чем разница между host-объектами и нативными объектами?</summary>
<div> 
	<br />
	<p><b>Встроенные объекты:</b> String, Math, RegExp, Object, Function и т.д. - основные предопределенные объекты, всегда доступные в JavaScript. Определено в спецификации ECMAScript.</p>
	<p><b>Объекты хоста:</b> объекты типа window, XmlHttpRequest, узлы DOM и т.д., которые предоставляются средой браузера. Они отличаются от встроенных объектов, потому что не все окружения будут иметь одни и те же объекты хоста. Если JavaScript работает за пределами браузера, например, на языке сценариев на стороне сервера, например, в Node.js, будут доступны разные объекты хоста.</p>
	<p><b>Объекты пользователя:</b> объекты, определенные в JavaScript-коде.</p>
</div>
</details>

<details>
<summary>В чем разница между .call и .apply?</summary>
<div> 
	<br />
	<ul>
		<li>.call() - вызывает ту же функцию с указанными аргументами</li>
		<li>.apply() - вызывает ту же функцию с аргументами, указанными в массиве</li>
		<li>.bind() - создает новую функцию с тем же самым телом функции с заданным значением this (первый аргумент) и возвращает эту функцию.</li>
	</ul>
	<p>Во всех случаях первый аргумент используется как значение this внутри функции.</p>
	<b>Подробней:</b>
	<br>
	<ul>
		<li>https://learn.javascript.ru/call-apply</li>
		<li>https://habrahabr.ru/sandbox/33838/</li>
	</ul>
</div>
</details>

<details>
<summary>Что делает и для чего нужна функци Function.prototype.bind?</summary>
<div> 
	<br />
	<p>Метод bind() создаёт новую функцию, которая при вызове устанавливает в качестве контекста выполнения this предоставленное значение. В метод также передаётся набор аргументов, которые будут установлены перед переданными в привязанную функцию аргументами при её вызове.</p>
	<p>Подробней: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/bind</p>
</div>
</details>

<details>
<summary>Объясните, как работает наследование в JavaScript?</summary>
<div> 
	<br />
	<p>Модель наследования в JavaScript может озадачить опытных разработчиков на высокоуровневых объектно-ориентированных языках (таких, например, как Java или C++), поскольку она динамическая и не включает в себя реализацию понятия class (хотя ключевое слово class, бывшее долгие годы зарезервированным, и приобрело практическое значение в стандарте ES2015, однако, Class в JavaScript ES>=6 представляет собой лишь "синтаксический сахар" поверх прототипно-ориентированной модели наследования).</p>
	<p>В плане наследования JavaScript работает лишь с одной сущностью: объектами. Каждый объект имеет внутреннюю ссылку на другой объект, называемый его прототипом. У объекта-прототипа также есть свой собственный прототип и так далее до тех пор, пока цепочка не завершится объектом, у которого свойство prototype равно null.  По определению, null не имеет прототипа и является завершающим звеном в цепочке прототипов.</p>
	<p>Хотя прототипную модель наследования некоторые относят к недостаткам JavaScript, на самом деле она мощнее классической. К примеру, поверх неё можно предельно просто реализовать классическое наследование, а вот попытки совершить обратное непременно вынудят вас попотеть.</p>
	<b>Подробней:</b>
	<ul>
		<li>https://developer.mozilla.org/ru/docs/Web/JavaScript/Inheritance_and_the_prototype_chain</li>
		<li>https://learn.javascript.ru/class-inheritance</li>
		<li>https://habrahabr.ru/post/131714/</li>
	</ul>
</div>
</details>

<details>
<summary>Задача, что смущает в этом коде?</summary>
```js
setInterval(() => {
	document.getElementById('bigCookie').click()
}, 100)
```
<div> 
	<br />
	<p>
	(()=> {
		var cookie = document.querySelector('#bigCookie');
		setInterval(()=> {
			cookie.click();
		}, 100);
	})()
	</p>
	<p>Чтобы не дергать DOM на каждом цикле</p>
	<p>setInterval(c => c.click(), 100, bigCookie), ибо любой легальный для js-идентификаторов id элемента: это одноимённое свойство глобального объекта. Но, он может быть переопределен находящемся на странице скриптом.</p>
</div>
</details>
