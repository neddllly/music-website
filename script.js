function albuminfo() {
     var apiKey = "d08e4477b13c3411085f5bc2a561fb2e";
    var ap = new XMLHttpRequest();
     var url = "/2.0/?method=artist.gettoptracks&artist=cher&api_key=" +apiKey+ "&format=json";
    ap.open("GET", url, true);
    
    var albumsArray = []; // Создаем пустой массив для хранения данных об альбомах
    
    ap.onreadystatechange = function() {
        if (ap.readyState == 4 && ap.status == 200) {
            var data = JSON.parse(ap.responseText);

            console.log(data); // Выводим массив альбомов в консоль
        }
    };
    
    ap.send();
}

albuminfo();