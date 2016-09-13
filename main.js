$( document ).ready(function() {
  $('#search').click(function () {
    var query = $('#query').val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ query +"&format=json&callback=?";

    if(query !== ""){
      $('.contain').addClass('hidden');
      $('#reSearch').removeClass('hidden');
      var wikiData = $.getJSON(url);

      wikiData.done(function(data) {
        for (var i = 0; i < data[1].length; i++) {
          $('#wikiList').append('<li><div><h1><a href="' + data[3][i] + '">' + data[1][i] + '</a></h1><p>' + data[2][i] + '</p></div></li>');
        }
      });

      wikiData.fail(function() {
        $('#wikiList').append('<p>Oh no, something went wrong!</p>');
      });
    }
  });
});
