window.addEventListener('load', function() {
  var sede = document.getElementById('sede');
  var generation = document.getElementById('generation');
  var sed = '';
  var gen = '';
  students = {};

  generation.addEventListener('change', selectSedeGen);
  generation.addEventListener('change', drawChartPromeTeacher);
  generation.addEventListener('change', drawChartPromeJedi);
  generation.addEventListener('change', satisfied);
  generation.addEventListener('change', nps);

  function selectSedeGen(event) {
    var studentAct = 0;
    var studentInac = 0;
    var total = 0;

    sed = sede.value;
    gen = generation.value;
    students = data[sed][gen].students;
    // Iterando para almacenar los activos e inactivos
    for (var i = 0; i < students.length; i++) {
      if (students[i].active) {
        studentAct = studentAct + 1;
      } else if (students[i].active === false) {
        studentInac = studentInac + 1;
      }
      total = studentAct + studentInac;
    }
    // Obteniendo el porcentaje de desertoras
    var porcentaje = (Math.round((studentInac * 100) / total) + ' %');

    // navegando por el DOM
    var register = document.getElementById('TotStudents');
    var perStudentInac = document.getElementById('percentaje');
    register.textContent = students.length;
    perStudentInac.textContent = porcentaje;
    perStudentInac.style.color = 'red';
  }

  // función que devuelve promedio NPS

  function nps() { 
    var contentNps = document.getElementById('nps');
    sed = sede.value;
    gen = generation.value;
    ratings = data[sed][gen].ratings;
    var totalNps = 0;
    var total = 0;
    var getNps = 0;

    for (var i = 0; i < ratings.length; i++) {
      var difNps = ratings[i]['nps']['promoters'] - ratings[i]['nps']['detractors'];
      totalNps += difNps;
      getNps = (totalNps / ratings.length).toFixed(2) + '%';
      
    }
    contentNps.textContent = getNps;
    contentNps.style.color = 'green';
    
  }
  
  // función que devuelve porcentaje de satisfacción de las alumnas

  
  function satisfied() {
    var alumSatisfied = document.getElementById('studentSatified');
    var totalPercent = 0;
    var studentSatified = 0;
    sed = sede.value;
    gen = generation.value;
    ratings = data[sed][gen].ratings;
    for (var i = 0; i < ratings.length; i++) {
      totalPercent += ratings[i]['nps']['promoters'];

      studentSatified = (totalPercent / ratings.length).toFixed(2) + '%';
    }
    alumSatisfied.textContent = studentSatified;
  }

  // rating={};
  function drawChartPromeTeacher(event) {
    var teach = document.getElementById('teach');
    var teacher = 0;
    sed = sede.value;
    gen = generation.value;
    rating = data[sed][gen].ratings;

    for (i = 0; i < rating.length; i++) {
      if (rating[i]['teacher']) {
        teacher += (rating[i]['teacher']) / rating.length;
      }
    }
    teach.innerHTML = teacher.toFixed(1);
  }

  // Jedi
  function drawChartPromeJedi(event) {
    var jedi = document.getElementById('jedi');
    var jedis = 0;
    sed = sede.value;
    gen = generation.value;
    rating = data[sed][gen].ratings;
    for (i = 0; i < rating.length; i++) {
      if (rating[i]['jedi']) {
        jedis += (rating[i]['jedi'] / rating.length);
      }
    }
    jedi.innerHTML = jedis.toFixed(1);
  }
});
