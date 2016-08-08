$( document ).ready(function() {
  $('#search').click(function () {
    $('.contain').addClass('hidden');
    var query = $('#query').val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ query +"&format=json&callback=?";

    $.ajax({
      url: url,
      type: "GET",
      dataType: "json",
      success: function(results){
        console.log(results)
        for (var i = 0; i < results[1].length; i++) {
          $('#wikiList').append('<li><div><h1><a href="' + results[3][i] + '">' + results[1][i] + '</a></h1><p>' + results[2][i] + '</p></div></li>')
        }
      }
    });
  });

});
