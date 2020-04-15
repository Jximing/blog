/*
<section class="card">
          <header class="card__header">
            <div class="header__number">
              <span>1</span>
            </div>
            <h2 class="header__title">
              <span class="title__date">2019-03-09</span>
              <span class="title__sub">副标题</span>
            </h2>
          </header>
          <article class="card__article">
            <p>今天是个好日子</p>
            <p>完成了时间线，感觉还可以，部分优化与适配留到之后处理。</p>
          </article>
        </section>

*/

var list = [
    { date: '2012-09', title: '大学生涯', contents: ['合肥工业大学'] },
    { date: '2016-10', title: '接触Java', contents: ['工作之余学习Java'] },
    { date: '2017-09', title: '转行成功', contents: ['正式以Java谋生'] },
    { date: '2019-03', title: '搭建Hexo博客', contents: ['记录自己技术成长'] }
];

var cardsContent = '';
// 遍历list
for (var i = 0; i < list.length; i++) {
    var item = list[i];
    cardsContent = cardsContent + '<section class="card">';
    cardsContent = cardsContent + '<header class="card__header">';
    cardsContent = cardsContent + '<div class="header__number"><span>' + (i + 1) + '</span></div>';
    cardsContent = cardsContent + '<h2 class="header__title"><span class="title__date">' + item.date + '</span><span class="title__sub">' + item.title + '</span></h2>';
    cardsContent = cardsContent + '</header>';
    cardsContent = cardsContent + '<article class="card__article">';
    var contents = item.contents;
    if (contents && contents.length > 0) {
        for (var j = 0; j < contents.length; j++) {
            var cont = contents[j];
            cardsContent = cardsContent + '<p>' + cont + '</p>';
        }
    }
    cardsContent = cardsContent + '</article>';
    cardsContent = cardsContent + '</section>';
}


var cardsId = 'mytimelineCards';
var cardsBody = document.getElementById(cardsId);
cardsBody.innerHTML = cardsContent;