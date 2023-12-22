/**
Знайдіть теги `<div>`, які стоять безпосередньо після `<h3>` 
і перемістіть ці `<div>`-елемент так, щоб кожен з них став
безпосередньо над відповідним елементом `<h3>`.
 */
$(document).ready(function () {
  $('h3 + div').each(function(){
    const $divElems = $(this);
    console.log(this);
    $divElems.prev().before($divElems);
  });
  $("H3+div").each(function(i, el){
    $(el).insertBefore($(el).prev("h3"));
  })
});
