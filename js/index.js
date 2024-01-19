// Establece la fecha de finalización (puedes ajustarla según tus necesidades)
  var countDownDate = new Date("Mar 23, 2023 00:00:00").getTime();

  // Actualiza el contador cada segundo
  var x = setInterval(function() {
    // Obtiene la fecha y hora actual
    var now = new Date().getTime();
  
    // Calcula la diferencia entre la fecha de finalización y la fecha actual
    var distance = countDownDate - now;
  
    // Calcula días, horas, minutos y segundos restantes
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Actualiza el contenido de los elementos HTML con las variables calculadas
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
  
    // Si el contador llega a cero, muestra un mensaje (o ejecuta alguna acción)
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "¡Tiempo Agotado!";
    }
  }, 1000);
