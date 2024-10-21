var resultado="";
const apellidosAlemanes = [
    "Müller", "Schmidt", "Schneider", "Fischer", "Weber",
    "Meyer", "Wagner", "Becker", "Hoffmann", "Schulz",
    "Koch", "Richter", "Klein", "Wolf", "Schröder",
    "Neumann", "Schwarz", "Zimmermann", "Braun", "Hartmann",
    "Lange", "Schmitt", "Werner", "Krause", "Meier",
    "Sommer", "König", "Engel", "Herrmann", "Walter",
    "Lange", "Pohl", "Richter", "Fuchs", "Busch",
    "Schreiber", "Zimmer", "Jansen", "Günther", "Vogel",
    "Hermann", "Hofmann", "Keller", "Wolf", "Braun",
    "Engelhardt", "Graf", "Albrecht", "Wiegand", "Günther",
    "Schulte", "Seidel", "Huber", "Schubert", "Roth",
    "Stiegler", "Dietrich", "Schrader", "Möller", "Lorenz",
    "Kiefer", "Götz", "Krauß", "Riedel", "Arnold",
    "Günzel", "Beck", "Dreyer", "Witt", "Putz",
    "Huber", "Baumann", "Bock", "Engel", "Fröhlich",
    "Krüger", "Meyer", "Keller", "Wolf", "Wenzel",
    "Weiss", "Otten", "Schulze", "Meyer", "Schmitt",
    "Möller", "Schreiber", "Fischer", "Schmitt", "Pfeiffer",
    "Fiedler", "Ziegler", "Engel", "Senger", "Friedrich",
    "Sauter", "Moser", "Eberhardt", "Zufall", "Schneckenburger"
];

const apellidosEspanoles = [
"García", "Fernández", "González", "Rodríguez", "López",
"Martínez", "Sánchez", "Pérez", "Gómez", "Martín",
"Díaz", "Moreno", "Muñoz", "Álvarez", "Romero",
"Jiménez", "Molina", "Vázquez", "Castro", "Ortiz",
"Ramos", "Delgado", "Navarro", "Torres", "Salazar",
"Cruz", "Reyes", "Hernández", "Jiménez", "Luna",
"Márquez", "Aguilar", "Ríos", "Cano", "Pacheco",
"Bermúdez", "Vega", "Serrano", "Hidalgo", "Cardenas",
"Silva", "Maldonado", "Cordero", "Valdez", "Pérez",
"Téllez", "Santos", "Alonso", "Cabrera", "Ríos",
"Quintero", "Ceballos", "Montoya", "Camacho", "Castillo",
"Solano", "Figueroa", "Duarte", "Villarreal", "Castañeda",
"Pérez", "Ocampo", "Orozco", "Gutiérrez", "Salas",
"Acosta", "Villar", "Peña", "Coronado", "Arce",
"Mora", "Núñez", "Bautista", "Ramírez", "Paniagua",
"Gonzales", "Mena", "Correa", "Sánchez", "Serrato",
"Montes", "Salgado", "Aguilera", "Aranda", "Tovar",
"Solares", "Zapata", "Contreras", "Ferrer", "Salvador",
"Medina", "Pérez", "Arroyo", "Lara", "Saavedra", "Noriega", 
"Burgos", "Savedra", "Marrufo", "Abril"
];

const nombresEspanol = [
"Sofía", "Liam", "Valentina", "Mateo", "Camila",
"Lucas", "Isabella", "Diego", "Mía", "Sebastián",
"Emma", "Daniel", "Lucía", "Alejandro", "Victoria",
"Mateo", "Natalia", "Pablo", "María", "Gonzalo",
"Elena", "Nicolás", "Ana", "Javier", "Laura",
"Santiago", "Clara", "Manuel", "Paula", "Rafael",
"Carla", "Samuel", "Sofía", "Rocío", "Fernando",
"Marcos", "Alba", "Antonio", "Alicia", "David",
"Bruno", "Julieta", "Martín", "Nina", "Maximiliano",
"Carmen", "Salvador", "Teresa", "Álvaro", "Gema",
"Diego", "Sabrina", "Iván", "Verónica", "Julio",
"Camilo", "Sara", "Roberto", "Candela", "Hugo",
"Patricia", "Lucas", "Jazmín", "Fabián", "Inés",
"Esteban", "Rosa", "Simón", "Marina", "Oscar",
"Valeria", "Cristian", "Tania", "Julio", "Bárbara",
"Sergio", "Luciana", "Diego", "Gabriela", "Ángela"
];

const nombresChinos = [
"Li Wei", "Wang Fang", "Zhang Wei", "Liu Yang", "Chen Li",
"Yang Lei", "Zhao Min", "Huang Jing", "Wu Tao", "Xu Na",
"Zhou Jie", "Ma Qiang", "Hu Min", "Zheng Fei", "He Ping",
"Gong Wei", "Lin Li", "Gao Feng", "Lu Yao", "Liang Jun",
"Zhong Li", "Song Wei", "Fu Hua", "Deng Wei", "Ruan Mei",
"Xue Gang", "Fu Xue", "Qiu Li", "Qian Wei", "Yu Ting",
"Shen Wei", "Cai Ling", "Xiong Liang", "Li Dan", "Duan Mei",
"Jia Hui", "Peng Gang", "Feng Jian", "Jiang Yu", "Cheng Lei",
"Deng Li", "Lin Jing", "Zhao Yu", "Pan Yan", "Wei Feng",
"Pang Wei", "He Jing", "Ge Mei", "Shen Tao", "Zhong Wei",
"Yin Yan", "Cai Wei", "Wang Yang", "Lü Jun", "Qiu Yun",
"Li Ting", "Wang Qiang", "Liu Li", "Zhu Wei", "Chen Wei",
"Sun Li", "Ma Ning", "Feng Wei", "Hu Wei", "Shen Wei",
"Li Ying", "Cai Qian", "Yin Qiang", "Wang Yi", "Liu Hong",
"Zhou Ping", "Wang Ming", "Li Jing", "Zhang Qiang", "Chen Yan",
"Zhao Lei", "Liu Qiang", "Ma Li", "Yin Yong", "Wang Wei"
];

function generarFechaAleatoria(inicio, fin) {
    // Convierte las fechas de entrada a milisegundos
    const fechaInicio = new Date(inicio).getTime();
    const fechaFin = new Date(fin).getTime();

    // Genera un timestamp aleatorio entre las dos fechas
    const timestampAleatorio = Math.random() * (fechaFin - fechaInicio) + fechaInicio;

    // Crea un objeto Date a partir del timestamp aleatorio
    const fechaAleatoria = new Date(timestampAleatorio);

    // Formatea la fecha en año-mes-día
    const año = fechaAleatoria.getFullYear();
    const mes = String(fechaAleatoria.getMonth() + 1).padStart(2, '0'); // +1 porque los meses son 0-indexados
    const dia = String(fechaAleatoria.getDate()).padStart(2, '0');

    return `${año}-${mes}-${dia}`;
}


function generar() {
    resultado=`CREATE DATABASE IF NOT EXISTS sistema_escolar; <br>
    USE sistema_escolar;<br>
    DROP TABLE IF EXISTS alumnos; <br>
    
    CREATE TABLE IF NOT EXISTS alumnos ( <br>
    matricula BIGINT UNSIGNED NOT NULL UNIQUE CHECK(CHAR_LENGTH(matricula)=9), <br>
    PRIMARY KEY (matricula), <br>
    apellido1 VARCHAR(255) NOT NULL, <br>
    apellido2 VARCHAR(255), <br>
    nombres VARCHAR(255) NOT NULL, <br>
    correo VARCHAR(255) NOT NULL, <br>
    fecha_nacimiento DATE NOT NULL <br>
    ); <br>

    INSERT INTO alumnos(matricula, apellido1, apellido2, nombres, correo, fecha_nacimiento) VALUES ` ;
    var matricula = 223090001;

    for (let i = 0; i < 50000; i++) {
       resultado+= `('${matricula++}',
         '${apellidosAlemanes[Math.floor(Math.random()*100)]}', '${apellidosEspanoles[Math.floor(Math.random()*100)]}', '${Math.floor(Math.random()*2)+1 ==1 ? nombresEspanol[Math.floor(Math.random()*80)] : nombresChinos[Math.floor(Math.random()*80)] + " " + nombresEspanol[Math.floor(Math.random()*80)]}',
         '${matricula-1}@unikino.edu.mx',
         '${generarFechaAleatoria('1930-01-01', '2005-12-31')}'),
         <br>`;
    }
    resultado=resultado.slice(0,-15)+";";
    document.getElementById("parrafo").innerHTML = resultado;

    
}

    function generar_archivo (){
        var archivo = document.createElement("a");
        var salida = resultado.replace(/<br>/g,"\n").trim();
        archivo.setAttribute("href","data:text/plane;charset=utf-8,"+encodeURIComponent(salida));
        archivo.setAttribute("download","sistema_escolar.sql");
        archivo.style.display="none";
        document.body.appendChild(archivo);
        archivo.click();
        document.body.removeChild(archivo);   

    } 
    } 
