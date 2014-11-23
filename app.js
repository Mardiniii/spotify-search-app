$(document).ready(function(){
  var source = $('#spotify-template').html();
  var template = Handlebars.compile(source);
  
  function procesarDatos(data){
    var results = {
        result: data.tracks.items
    }
    var html = template(results);
    $('#resultList').html(html);
    console.log(data);
  }
  
  $('#input').keyup(function(event){     //Analiza el tipo de tecla que digita el usuario
    var keycode = event.keyCode;         //Almacene el keycode de cada tecla que digita el usuario
    if(keycode == '13'){                 //Si el keycode es igual a 13 agregue tarea
      var artistToSearch = $(this).val();      //Almacene el nombre de la tarea en task
      var toSearch = "https://api.spotify.com/v1/search?q="+artistToSearch+"&type=track";
      $.getJSON(toSearch,function(response){
        procesarDatos(response);
      });
      $("#input").val('');
    }
  });
  
});