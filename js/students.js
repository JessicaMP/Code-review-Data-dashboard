var student = document.getElementById('student');
var container = document.getElementsByClassName('container')[0];
/*Variables globales por sedes*/
//Lima
var arrayAlumn20162L = data.LIM['2016-2']['students'];
var arrayAlumn20171L = data.LIM['2017-1']['students'];
var arrayAlumn20172L = data.LIM['2017-2']['students'];
// Arequipa
var arrayAlumn20162A = data.AQP['2016-2']['students'];
var arrayAlumn20171A = data.AQP['2017-1']['students'];
// Santiago
var arrayAlumn20162S = data.SCL['2016-2']['students'];
var arrayAlumn20171S = data.SCL['2017-1']['students'];
var arrayAlumn20172S = data.SCL['2017-2']['students'];
// Mexico df
var arrayAlumn20171M = data.CDMX['2017-1']['students'];
var arrayAlumn20172M = data.CDMX['2017-2']['students'];
//Arequipa
showAlumn(arrayAlumn20162A);
showAlumn(arrayAlumn20171A);
//Lima
showAlumn(arrayAlumn20162L);
showAlumn(arrayAlumn20171L);
showAlumn(arrayAlumn20172L);
//Santiago
showAlumn(arrayAlumn20162S);
showAlumn(arrayAlumn20171S);
showAlumn(arrayAlumn20172S);
//Mexico
showAlumn(arrayAlumn20171M);
showAlumn(arrayAlumn20172M);

function showAlumn(sede) {
  for (var i = 0; i < sede.length; i++) {
    if (sede[i]['active'] === true) {
      var div = document.createElement('div');
      div.classList.add('style');
      container.appendChild(div);
      // Para jalar las fotos de las estudiantes
      var picture = document.createElement('img');
      picture.classList.add('photo');
      div.appendChild(picture);
      picture.src = sede[i]['photo'];
      // Para jalar los nombres de las estudiantes
      var name = document.createElement('h3');
      name.classList.add('names');
      name.classList.add('text-Uppercase');
      div.appendChild(name);
      name.textContent = sede[i]['name'];
      // console.log(dataArray[i]['photo']);
      // Cuadro de cursos y especializacion
      var divSmall = document.createElement('div');
      divSmall.classList.add('divSmall');
      div.appendChild(divSmall);
      // Especializacion
      var specialization = document.createElement('p');
      specialization.textContent = 'Frontend Developer';
      specialization.classList.add('p');
      divSmall.appendChild(specialization);
      // Cursos
      var js = document.createElement('p');
      js.textContent = 'JAVASCRIPT';
      js.classList.add('curse');
      divSmall.appendChild(js);
      var alps = document.createElement('p');
      alps.textContent = 'APls';
      alps.classList.add('curse');
      divSmall.appendChild(alps);
      var jQuery = document.createElement('p');
      jQuery.textContent = 'JQUERY';
      jQuery.classList.add('curse');
      divSmall.appendChild(jQuery);
      //Notas
      var divNote = document.createElement('div');
      divNote.classList.add('divNote');
      div.appendChild(divNote);
      // Data Hse y Tecnico
      var sprint = sede[i]['sprints'];
      var nSprint = sprint.length;
      var promeTech = 0;
      var promeHse = 0;
      for (j = 0; j < sprint.length; j++) {
        promeTech += sprint[j]['score'].tech;
        promeHse += sprint[j]['score'].hse;
        var totalTech = promeTech / nSprint;
        var totalHse = promeHse / nSprint;
        //Tecnico
};
        var techSkill = document.createElement('p');
        var skillT = document.createElement('span');
        skillT.textContent = 'TECH SKILLS';
        skillT.classList.add('skill');
        skillT.classList.add('skillT');
        divNote.appendChild(skillT);
        techSkill.innerHTML = (totalTech / 18).toFixed(1) + '%';
        techSkill.classList.add('note');
        divNote.appendChild(techSkill);
        //Hse
        var lifeSkill = document.createElement('p');
        var skillH = document.createElement('span');
        lifeSkill.innerHTML = (totalHse / 12).toFixed(1) + '%';
        lifeSkill.classList.add('note');
        divNote.appendChild(lifeSkill);
        skillH.textContent = 'LIFE SKILLS';
        skillH.classList.add('skill');
        skillH.classList.add('skillH');
        divNote.appendChild(skillH);
        //Ingles
        var englishSkill = document.createElement('p');
        englishSkill.textContent = 'INTERM';
        //englishSkill.classList.add('note');
        englishSkill.classList.add('noteM');
        divNote.appendChild(englishSkill);
        var skillE = document.createElement('span');
        skillE.textContent = 'ENGLISH SKILLS';
        skillE.classList.add('skill');
        skillE.classList.add('skillE');
        divNote.appendChild(skillE);
        //Perfil
        var profile = document.createElement('p');
        profile.textContent = 'Ver perfil >';
        profile.classList.add('profile');
        div.appendChild(profile);
    }
  }
};
