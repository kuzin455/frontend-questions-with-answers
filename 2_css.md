## Вопросы по CSS

<details>
<summary>Расскажите о блочной модели CSS</summary>
<div> 
	<br />
	<p>Блочная модель CSS – это прямоугольное пространство вокруг элемента HTML, в котором определяются границы, поля и отступы.</p>
	<p>Границы – определяют максимальную область, в которой будет содержаться элемент. Мы можем сделать границу видимой, невидимой, определить высоту и ширину элемента и т.п. Поля – определяют расстояния между границами и элементом.</p>
	<p>Отступы – определяют расстояния между границами и соседними элементами.</p>
</div>
</details>

<details>
<summary>Что такое "reset" CSS и для чего он нужен?</summary>
<div> 
	<br />
	<p>Каждый браузер устанавливает свои значения стилей по умолчанию для различных HTML-элементов. С помощью CSS Reset мы можем нивелировать эту разницу для обеспечения кроссбраузерности стилей.</p>
	<p>Например, вы используете элемент a в вашем документе. Большинство браузеров, как Internet Explorer и Firefox, добавляют ссылке синий цвет и подчёркивание. Однако представьте, что через пять лет кто-то решил создать новый браузер (назовём его UltraBrowser). Разработчикам браузера не нравился синий цвет и раздражало подчёркивание, поэтому они решили выделять ссылки красным цветом и полужирным шрифтом. Именно исходя из этого, если вы установите базовое значение стилей для элемента a, то он гарантированно будет таким, каким вы хотите его видеть, а не как предпочитают его отображать разработчики UltraBrowser.</p>
	<p>Подробней: https://habrahabr.ru/post/45296/</p>
</div>
</details>

<details>
<summary>Что такое "normalize" CSS и для чего он нужен?</summary>
<div> 
	<br />
	<p>Normalize.css является альтернативой CSS Reset. Проект является продуктом сотен часов глубокого исследования различий между изначальными стилями браузера. Это исследование провели Николас Галахер и Джонатан Нил.</p>
	<b>Цели normalize.css:</b>
	<ul>
		<li>сохранять полезные настройки браузера, а не стирать их;</li>
		<li>нормализовать стили для широкого круга HTML-элементов;</li>
		<li>корректировать ошибки и основные несоответствия браузера;</li>
		<li>совершенствовать юзабилити незаметными улучшениями;</li>
		<li>объяснять код, используя комментарии и детальную документацию.</li>
	</ul>
	<p>Он поддерживает широкий диапазон браузеров (в том числе мобильных) и включает в себя CSS, который нормализует HTML5-элементы, типографику, списки, встраиваемый контент, формы и таблицы.</p>
	<p>Несмотря на то, что проект основан на принципе нормализации, он использует стандартные настройки там, где они предпочтительны.</p>
	<b>Подробней: </b>
	<ul>
		<li>https://htmlacademy.ru/blog/64-about-normalize-css</li>
		<li>https://habrahabr.ru/company/htmlacademy/blog/342052/</li>
	</ul>
</div>
</details>

<details>
<summary>Чем отличается reset.css от normalize.css?</summary>
<div> 
	<br />
	<p>Reset.css накладывает однородный визуальный стиль, выравнивая стили по умолчанию почти для всех элементов. В отличие от этого, normalize.css сохраняет многие полезные стили браузеров по умолчанию. Это значит, что не требуется повторно объявлять стили для всех стандартных элементов типографики.</p>
	<p>Когда элемент имеет различные стили по умолчанию в разных браузерах, normalize.css там, где это возможно, стремится сделать эти стили совместимыми и соответствующими современными стандартам.</p>
	<p>Подробней: https://htmlacademy.ru/blog/64-about-normalize-css</p>
</div>
</details>

<details>
<summary>Объясните, что такое плавающие элементы (floats) и как они работают?\*</summary>
<div> 
	<br />
	<ul>
		<li>Float определяет, по какой стороне будет выравниваться элемент, при этом остальные элементы будут обтекать его с других сторон. Плавающие (обтекающие) элементы сначала выстраиваются в нормальном потоке, затем образуется новый поток, и они сдвигаются либо вправо, либо влево (в зависимости от выбранного значения) в родительском контейнере. Иными словами, они идут по порядку друг за другом. Учитывая, что в родительском контейнере есть достаточно свободного места, эти плавающие элементы не подстраиваются и не выравниваются для распределения пространства между этими самыми элементами.</li>
		<li>Как правило, плавающий элемент обязательно должен иметь фиксированную ширину. Это гарантирует, что float ведет себя так как и ожидалось, избегая проблем в некоторых браузерах.</li>
		<li>Используя свойство clear, вы можете указать пять значений: left, right, both, inherit, и none. Это свойство определяет, по какой стороне будет выравниваться элемент, при этом остальные элементы будут обтекать его с других сторон. Например, если вы укажите «left», элемент задействует отмену обтекания с левого края плавающего элемента. При этом все другие элементы на этой стороне будут опущены вниз, и располагаться под текущим элементом.</li>
		<li>Правило, которое я обнаружил для себя, прекрасно работает для моих float-макетов.В своем HTML коде, я почти всегда сначала создаю плавающие элементы во время разметки, прежде чем добавлять простые элементы, которые могут взаимодействовать с ними. Вы экономите большую часть времени, и это дает желаемый результат.</li>
		<li>Но и тут бывают проблемы, когда вы помещаете в родительский блок плавающие элементы, родительский контейнер не может определить динамически высоту своих дочерних элементов, поэтому родительский контейнер будет иметь высоту равную нулю. Это может поломать вашу верстку. Существует метод, который позволяет родительскому элементу, определить свое пространство с учетом каких-либо плавающих элементов внутри. Можно использовать CSS свойство overflow (переполнение) со значением hidden (скрыть). Обратите внимание, что значение свойства overflow не предназначено для такого рода использования, и может вызывать некоторые проблемы, такие как скрытие нужного контента в данный момент или появление нежелательных полос прокрутки.</li>
		<li>Хак: для очистки плавающих элементов лучше применять ‘overflow:auto’ к родительскому элементу.</li>
		<li>Обратите внимание, что данный трюк не очищает плавающие элементы — он просто растягивает родительский контейнер. Вы можете принудительно очистить float, если вы добавите очищающий элемент после последнего плавающего элемента, или вы можете добавить в любом нужном вам месте, создав тем самым новый поток. Родительский элемент не умеет очищать дочерние плавающие элементы.</li>
	</ul>
	<b>9 правил:</b>
	<ul>
		<li>Плавающие элементы прижимаются к границам своих контейнеров, но не дальше.</li>
		<li>Любой плавающий элемент будет находится либо рядом, либо ниже предыдущего элемента. Если элементы прижаты влево, второй элемент появится точно справа от первого. Если они прижаты вправо, второй элемент появится слева от первого (reverse).</li>
		<li>Элемент с левым обтеканием, не может быть правее, чем элемент с правым обтеканием.</li>
		<li>Плавающие элементы не могут подняться выше верхнего края родительского контейнера (однако становится еще сложнее, когда задействованы отступы).</li>
		<li>Плавающий элемент не может быть выше своего соседа плавающего элемента.</li>
		<li>Плавающий элемент не может быть выше своего соседа строчного элемента.</li>
		<li>Плавающий элемент совместно со своим таким же соседом элементом, не могут выходить за края родительского контейнера.</li>
		<li>Плавающий элемент должен быть помещен как можно выше.</li>
		<li>Элемент с левым обтеканием должен быть помещен как можно дальше влево, как это возможно, элемент с правым обтеканием должен быть помещен как можно дальше вправо, как это возможно.</li>
	</ul>
	<p>Подробней: https://habrahabr.ru/post/273471/</p>
</div>
</details>

<details>
<summary>Какие вы знаете методы запрета обтекания (clearing) и какие где применяются?</summary>
<div> 
	<br />
	<p>Хак: для очистки плавающих элементов лучше применять ‘overflow:auto’ к родительскому элементу.</p>
</div>

```css
.clearfix:after {
  content: '';
  display: table;
  clear: both;
}
```

</details>

<details>
<summary>Что такое CSS спрайты? Как они реализуются на странице или сайте?</summary>
<div> 
	<br />
	<p>CSS спрайт — это техника оптимизации производительности, которая сочетает в себе несколько изображений в одном изображении, называемом спрайт-лист (sprite sheet) или набор плиток (tile set). Спрайты уменьшают нагрузку на сеть за счет сокращения количества загрузок с сервера, необходимых для отображения веб-страницы.</p>
	<p>Подробней: https://habrahabr.ru/post/159027/</p>
</div>
</details>

<details>
<summary>Как Вы обеспечиваете отображение страниц в старых/ограниченных браузерах?</summary>
<div> 
	<br />
	<ul>
		<li>Полифилы, кроссбраузерные решения</li>
		<li>Проверка нужной версии на спец. сервисах</li>
		<li>Скачивание старые версий браузеров(хард метод)</li>
		<li>https://caniuse.com/ (софт метод)</li>
		<li>Предупреждение о устаревшем браузере</li>
	</ul>
</div>
</details>

<details>
<summary>Какими способами можно визуально скрыть элемент (оставив его доступным для экранного диктора, screen reader)?</summary>
<div> 
	<br />
	<p>position: relative; left: -5000px</p>
</div>
</details>

<details>
<summary>Вы когда-нибудь использовали сеточную верстку (grid system, grid design)? Если да, какая Ваша любимая?</summary>
<div> 
	<br />
	<p>grid design: https://habrahabr.ru/post/23792/</p>
	<p>grid system: http://htmlbook.ru/blog/css-grid-i-flexbox-sravnenie-na-praktike</p>
</div>
</details>

<details>
<summary>Что такое flexbox?</summary>
<div> 
	<br />
	<ul>
		<li>Направлена на предоставление более эффективного способа выравнивания и распределения места между элементами в контейнере (родительском блоке), даже если их размер неизвестен или динамический.</li>
		<li>Основная идея flex-блоков, обладать способностью изменять свою ширина/высота (и другое), чтобы наилучшим образом заполнять свободное место (в основном, для поддержки адаптивности на всех видах устройств и размеров экрана).</li>
		<li>В основном элементы будут распределяться либо вдоль главной оси, либо вдоль поперечной оси контейнера.</li>
		<li>Flex-блоки лучше всего подходят для составных частей приложения и мелкомасштабных компонентов на странице, в то время как grid-блоки больше используется для компонентов на странице большого масштаба.</li>
		<li>Также как существует inline-block, inline-table, существует и inline-flex.</li>
	</ul>
	<p>Подробней: https://habrahabr.ru/post/273471/#display</p>
</div>
</details>

<details>
<summary>Как задать flexbox?</summary>
<div> 
	<br />
	<p>Для начала нам нужно выбрать, какие элементы следует выкладывать в виде flex блоков. Для этого мы устанавливаем специальное значение display в родительском элементе тех элементов, которые вы хотите оформить. display: flex;</p>
	<p><b>Примечание:</b> Вы также можете установить значение display inline-flex, если хотите расставить inline элементы как flex блоки.</p>
	<p>Подробней: https://developer.mozilla.org/ru/docs/Learn/CSS/CSS_layout/Flexbox</p>
</div>
</details>

<details>
<summary>Какие оси есть в flexbox?</summary>
<div> 
	<br />
	<ul>
		<li><b>Главная ось (main axis)</b> проходит в том направлении, вдоль которого расположены Flex элемнеты (например, в строку слева направо или вдоль колонок вниз.) Начало и конец этой оси называются main start и main end.</li>
		<li><b>Поперечная ось (сross axis)</b> проходит перпендикулярно Flex элементам. Начало и конец этой оси называются cross start and cross end.</li>
		<li>Родительский элемент, на который назначено свойство display: flex называется <b>flex container</b>.</li>
		<li>Элементы, размещённые в нём как Flex блоки называются <b>flex items</b></li>
	</ul>
	<p>Подробней: https://developer.mozilla.org/ru/docs/Learn/CSS/CSS_layout/Flexbox</p>
</div>
</details>

<details>
<summary>Какое свойство flexbox отвечает за направление flex items?</summary>
<div> 
	<br />
	<p>В Flexbox есть свойство под названием flex-direction, которое определяет направление главной оси (в каком направлении располагаются flexbox дети) — по умолчанию ему присваивается значение row, т.е. располагать дочерние элементы в ряд слева направо (для большинства языков) или справа налево (для арабских языков).</p>
	<ul>
		<li>row | row-reverse | column | column-reverse</li>
	</ul>
	<ul>
		<li><b>row</b> The flex container's main-axis is defined to be the same as the text direction. The main-start and main-end points are the same as the content direction.</li>
		<li><b>row-reverse</b> Behaves the same as row but the main-start and main-end points are permuted.</li>
		<li><b>column</b> The flex container's main-axis is the same as the block-axis. The main-start and main-end points are the same as the before and after points of the writing-mode.</li>
		<li><b>column-reverse</b> Behaves the same as column but the main-start and main-end are permuted.</li>
	</ul>
	<p>Подробней: https://developer.mozilla.org/ru/docs/Learn/CSS/CSS_layout/Flexbox</p>
</div>
</details>

<details>
<summary>Какое правило flexbox задает вывод flex items в одну строку или в несколько строк?</summary>
<div> 
	<br />
	<p>Свойство CSS flex-wrap</p>
	<ul>
		<li>nowrap | wrap | wrap-reverse</li>
	</ul>
	<p>Подробней: https://developer.mozilla.org/ru/docs/Learn/CSS/CSS_layout/Flexbox</p>
</div>
</details>

<details>
<summary>flex-flow сокращение, расскажите?</summary>
<div> 
	<br />
	<p>На этом этапе нужно заметить, что сществует сокращение для свойств flex-direction и flex-wrap — flex-flow. Например, вы можете заменить</p>
	<p>flex-direction: row; <br> flex-wrap: wrap;</p>
	<p>flex-flow: row wrap;</p>
	<p>Подробней: https://developer.mozilla.org/ru/docs/Learn/CSS/CSS_layout/Flexbox</p>
</div>
</details>

<details>
<summary>Как можно гибко изменять размеры flex элементов?</summary>
<div> 
	<br />
</div>

```css
article {
  flex: 1 200px;
}

article:nth-of-type(3) {
  flex: 2 200px;
}
```

<div>
	<p>Это просто означает, что каждому flex элементу сначала будет дано 200px от свободного места. Потом оставшееся место будет поделено в соответствии с частями пропорций.</p>
	<p>Подробней: https://developer.mozilla.org/ru/docs/Learn/CSS/CSS_layout/Flexbox</p>
</div>
</details>

<details>
<summary>сокращённое свойство flex</summary>
<div> 
	<br />
	<p><b>flex</b> это сокращённое свойство, в которым можно задать до трёх разных свойств:</p>
	<ul>
		<li>Значение пропорции. Оно может быть установлено отдельно с помощью свойства <b>flex-grow</b>.</li>
		<li>Следующее значение пропорции — <b>flex-shrink</b> — вступает в роль, когда flex элементы переполняют контейнер. Оно указывает, сколько забирается от размера каждого flex элемента, чтобы он перестал переполнять контейнер. Это продвинутая функция flexbox.</li>
		<li>Значение минимального размера, как мы обсуждали ранее. Оно может быть установлено отдельно с помощью свойства <b>flex-basis</b>.</li>
		<p>Подробней: https://developer.mozilla.org/ru/docs/Learn/CSS/CSS_layout/Flexbox</p>
	</ul>
</div>
</details>

<details>
<summary>Расскажите про flex-grow, flex-shrink, flex-basis?</summary>
<div> 
	<br />
	<ul>
		<li>Свойство CSS <b>flex-grow</b> определяет, какую часть свободного пространства может занять контейнер, в соотношении с другими контейнерами. </li>
		<li><b>flex-shrink</b> — свойство CSS, которое определяет фактор сжатия  flex-элемента. Flex-элементы будут заполнять контейнер в зависимости от значения flex-shrink, когда стандартная ширина flex-элементов шире, чем flex-контейнер.</li>
		<li><b>flex-basis</b> CSS свойство задает базовые размеры флекс элемента, а именно ширину.  Это свойство определяет размер содержимого контента,  если оно не было заданно свойством  box-sizing.</li>
	</ul>
	<b>Подробней:</b>
	<ul>
		<li>https://developer.mozilla.org/ru/docs/Web/CSS/flex-grow</li>
		<li>https://developer.mozilla.org/ru/docs/Web/CSS/flex-shrink</li>
		<li>https://developer.mozilla.org/ru/docs/Web/CSS/flex-basis</li>
	</ul>
</div>
</details>

<details>
<summary>Что такое css grid?</summary>
<div> 
	<br />
	<ul>
		<li>Значение grid позволяет нам создавать макет сетки. Она направлена на решении проблем со старыми методами компоновки блоков, имеющих float и inline-block, которые в свою очередь имеют недостатки, и действительно не предназначались для макета страницы.</li>
		<li>Основная идея grid-концепции, управлять содержимым, обеспечивая механизм распределения имеющегося пространство блоков в столбцы и строки, с помощью набора заранее установленных размеров.</li>
		<li>Вместе с этим фактом мы можем устранить проблемы, которые появляются при разработке, опираясь на старую технику разработки сайтов, теперь вы тратите меньше усилий.</li>
		<li>Не поддерживается. Только в IE10+.</li>
		<li>Также как существует inline-block, inline-table, inline-flex, существует и inline-grid</li>
	</ul>
	<b>Подробней:</b>
	<ul>
		<li>https://habrahabr.ru/post/273471/#display</li>
		<li>https://habrahabr.ru/post/325760/</li>
		<li>https://developer.mozilla.org/ru/docs/Web/CSS/CSS_Grid_Layout</li>
	</ul>
</div>
</details>

<details>
<summary>Можно ли использовать css grid и flexbox вместе?</summary>
<div> 
	<br />
	<p>Flexbox и Grid это не два противоборствующих свойства, они наоборот дополняют друг друга.
	<p>Grid - инструмент позиционирования основных блоков страницы.</p>
	<p>Flexbox - инструмент позиционирования элементов внутри блоков, спозиционированных с помощью Grid.</p>
</div>
</details>

<details>
<summary>Как оптимизировать страницы для печати?</summary>
<div> 
	<br />
	<ul>
		<li>https://habrahabr.ru/company/ruvds/blog/317776/</li>
		<li>https://habrahabr.ru/post/160997/</li>
	</ul>
</div>
</details>

<details>
<summary>Какие есть подводные камни в оптимизации производительности CSS?</summary>
<div> 
	<br />
	<ul>
		<li>
			<b>Переотрисовка (repaint):</b>
			<br>
			<p>Также известное, как redraw — это событие, которое происходит всякий раз, когда что-то делается видимым на странице, если ранее оно было скрыто (visibility:hidden, overflow:hidden, display:none, и др), или наоборот (visibility:visible, overflow:auto, display:static, и др), когда происходят какие-то изменения в макете. Примером может быть что угодно: добавление к элементу рамки, изменение цвета фона, изменение видимости стилей — все это приводит к переотрисовке страницы. Тем самым данное событие может дорого вам обойтись в плане производительности, так как нагружает браузерный движок поиском, проходами по всем элементам, чтобы определить, что является видимым уже, а что должно отобразиться.</p>
		</li>
		<li>
			<b>Перерасчет (reflow):</b>
			<br>
			<p>Перерасчет (или перекомпоновка) носит более значительный характер. Это событие будет происходить всякий раз, когда происходят манипуляции с DOM-деревом HTML документа, или когда стиль, который влияет на расположение, изменяется у элемента, это событие будет происходит всякий раз, когда атрибут class у элемента изменяется, или всякий раз, когда изменяется размер окна браузера. Цель перерасчета в том, чтобы определить, где различные части сайты теперь должны отображаться. Если вы измените родительские свойства, тогда его потомки также будут пересчитаны. Элементы, которые появляются после того, как DOM было сформировано, будут сформированы заново. Если изменяется дочерний элемент, тогда будет пересчитан и родительский элемент, чтобы учесть изменения своих потомков. Затем, происходит переотрисовка.</p>
			<p>Перерасчет также очень дорого обходится в плане производительности, и является одной из главных причин медленной работы скриптов, особенно на устройствах с низкой вычислительной мощности, таких как телефоны</p>
		</li>
		<li>
			<b>Минимальный перерасчет (minimal reflow):</b>
			<br>
			<p>Долгий перерасчет может повлиять на весь документ, всю веб-страницу. Чем больше документ, тем дольше перерасчет. Меньше HTML-кода лучше производительность. Элементы с абсолютным позиционирование или фиксированным, не влияют на структуру главного документа, так как они находятся в отдельном потоке, если в них произошли изменения, только они будут подвержены перерасчету. Конечно, документ, в котором произойдут изменения, все равно будут полностью переотрисованы, но эта проблема имеет слабый характер, чем перерасчет всего DOM-дерева.</p>
			<p>Так что анимация не должны быть применена ко всему документу, было бы лучшим, если бы анимации применялись только для позиционированных элементов. Для большинства случаев, это очень важно.</p>
		</li>
		<li>
			<b>Что вызывает перерасчет:</b>
			<br>
			<ul>
				<li>Изменение размера окна</li>
				<li>Изменение шрифта</li>
				<li>Добавлении или удалении стилей</li>
				<li>Динамическое изменение, пользователь вводит текст в поле ввода</li>
				<li>Активация CSS псевдо-классов, к примеру, событие :hover</li>
				<li>Манипулирования с атрибутом class</li>
				<li>Сценарии манипулирования с DOM-деревом</li>
				<li>Расчет значений offsetWidth и offsetHeight</li>
				<li>Задание свойств в атрибут style</li>
			</ul>
		</li>
		<li>
			<b>Как свести к минимуму влияние перерасчета на производительность:</b>
			<br>
			<ul>
				<li>Изменение атрибутов класса у элементов, делайте как можно реже (минимум манипуляций в DOM-дереве).</li>
				<li>Избегайте установки нескольких встроенных стилей.</li>
				<li>Применяйте анимацию к элементам, которые имеют фиксированное или абсолютное позиционирование.</li>
				<li>Избегайте табличной разметки. Даже незначительные изменения в ячейке таблицы вызовут перерасчет на всех остальных узлах таблицы.</li>
				<li>Не используйте «CSS expressions» (также известное, как «IE expressions»)</li>
			</ul>
		</li>
		<li>
			<b>Примечание:</b>
			<br>
			<p>Потеть над селекторами, используемых в современных браузерах, бесполезно. Большинство методов выборки сейчас настолько быстрые и эффективные, что на это действительно не стоит тратить много времени. Кроме того, есть различия в различных браузерах, и у каждого есть свои медленные селекторы.</p>
			<p>Чрезмерные неиспользуемые стили, скорее всего, они будут бить по производительность, чем любые селекторы, которые вы добавили в свой документ. Следует прибираться в своих css-стилях. 3000 строк неиспользуемых или избыточных на странице стилей, в наше время, это не редкость. Если разные стили используются на разных страницах вашего сайта, разбейте ваш один и единственный styles.css на несколько дополнительных, это будет лучшим вариантом.</p>
		</li>
	</ul>
	<p>Подробней: https://habrahabr.ru/post/273471/#repaints_and_reflows</p>
</div>
</details>

<details>
<summary>Объясните, как браузер определяет, на какие элементы накладывать CSS стили?</summary>
<div> 
	<br />
	<p>CSSOM (объектная модель CSS) — это объект, представляющий стили, связанные с DOM. Он выглядит так же как DOM, но с соответствующими стилями для каждого узла. Не имеет значения были ли стили объявлены явно или наследуются.</p>
	<p>Подробней: https://habrahabr.ru/post/320430/</p>
</div>
</details>

<details>
<summary>Слышали ли о системе БЭМ (Блок-Элемент-Модификатор)?</summary>
<div> 
	<br />
	<ul>
		<li>https://ru.bem.info/methodology/quick-start/</li>
		<li>https://habrahabr.ru/post/162385/</li>
		<li>https://habrahabr.ru/post/203440/</li>
		<li>https://medium.com/@dedguran/введение-в-методологию-бэм-e6b156e1f795</li>
	</ul>
</div>
</details>

<details>
<summary>Какие еще методологии верстки вы знаете?</summary>
<div> 
	<br />
	<ul>
		<li>https://habrahabr.ru/post/256109/</li>
		<li>https://operatino.github.io/MCSS/</li>
	</ul>
</div>
</details>