

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
    "Sauter", "Moser", "Eberhardt"
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
"Medina", "Pérez", "Arroyo", "Lara", "Saavedra"
];

const nombresChino = [
    "Mei Ling", "Li Wei", "Chen Xi", "Jing Yi", "Hong Yu",
    "Zhi Hao", "Xiao Feng", "Lan Tian", "An Ming", "Bai He",
    "Cai Wen", "De Ming", "Fang Hua", "Gao Jie", "Hai Yan",
    "Hui Ying", "Jian Guo", "Jun Li", "Kai Xin", "Lei Feng",
    "Ming Yue", "Ning Hua", "Ping An", "Qiao Lin", "Rui Ming",
    "Shan Shan", "Tian Hao", "Wei Zhong", "Xiang Li", "Yi Ling",
    "Zhao Yang", "Bo Rong", "Chang Hua", "Dong Mei", "Er Xiang",
    "Fu Wen", "Gui Ying", "He Lan", "Ji Fang", "Ke Long",
    "Li Hua", "Mo Ling", "Nuo Ya", "Ou Yang", "Pei Xuan",
    "Qing Shui", "Ran Xin", "Shan Yu", "Tong Fang", "Wen Yue",
    "Xue Yi", "Ying Jie", "Zhen Hao", "Bao Lin", "Cheng Fang",
    "Di Wen", "Fen Lan", "Guang Ming", "Hao Ran", "Jian Ning",
    "Kang Jun", "Ling Zhi", "Meng Yu", "Nian Hua", "Ping Rui",
    "Qing Mei", "Ran Feng", "Shu Yi", "Tian Yu", "Wan Ying",
    "Xi Rui", "Yan Mei", "Zhi Hui", "Ao Rong", "Bin Xiao",
    "Chong Wei", "De Zhi", "Fang Lan", "Guo Feng", "Hua Xi",
    "Jing Rui", "Kai Lun", "Lan Hua", "Min Qi", "Nan Xiang",
    "Qing Rui", "Rong Wei", "Si Jing", "Tao Li", "Wei Qiang",
    "Xi Yue", "Yi Fan", "Zhen Yu", "Bo Wen", "Cheng Ming",
    "Dong Rui", "Fei Ying", "Guang Xi", "Hui Fang", "Jian Feng"
];
const nombresEspanol = [
    "Alejandro", "María", "Juan", "Sofía", "Carlos",
    "Lucía", "José", "Ana", "Miguel", "Elena",
    "Luis", "Carmen", "David", "Isabel", "Francisco",
    "Gabriela", "Fernando", "Daniel", "Laura", "Javier",
    "Andrés", "Patricia", "Pablo", "Mónica", "Antonio",
    "Raquel", "Roberto", "Beatriz", "Diego", "Rosa",
    "Alberto", "Julia", "Hugo", "Claudia", "Ricardo",
    "Marcos", "Sara", "Enrique", "Lorena", "Sergio",
    "Valeria", "Ramón", "Teresa", "Óscar", "Esther",
    "Víctor", "Inés", "Tomás", "Silvia", "Manuel",
    "Natalia", "Alfonso", "Marina", "Raúl", "Eva",
    "Ángel", "Luz", "Ignacio", "Elisa", "Eduardo",
    "Emilio", "Paula", "Félix", "Alicia", "Rubén",
    "Gloria", "Rafael", "Victoria", "Adrián", "Marta",
    "Cristina", "Santiago", "Verónica", "Mario", "Ariadna",
    "Clara", "Alonso", "Irene", "Guillermo", "Esteban",
    "Federico", "Olga", "Marcos", "Elsa", "Héctor",
    "Álvaro", "Montserrat", "Iván", "Bárbara", "Nicolás",
    "Eladio", "Manuela", "Joaquín", "Pilar", "Sebastián",
    "Gonzalo", "Leonor", "Diana", "Jaime", "Cecilia"
];

function generarFechasAleatorias(cantidadBloques) {
    const fechas = [];

    // Función para generar una fecha aleatoria entre dos fechas
    function generarFechaAleatoria() {
        const inicio = new Date(1970, 0, 1); // Fecha mínima: 1 de enero de 1970
        const fin = new Date(2024, 11, 31);  // Fecha máxima: 31 de diciembre de 2024
        const fechaAleatoria = new Date(inicio.getTime() + Math.random() * (fin.getTime() - inicio.getTime()));
        
        const anio = fechaAleatoria.getFullYear();
        const mes = String(fechaAleatoria.getMonth() + 1).padStart(2, '0'); // Mes va de 0 a 11, por eso se suma 1
        const dia = String(fechaAleatoria.getDate()).padStart(2, '0');
        
        return `${anio}-${mes}-${dia}`;
    }

    // Generar los bloques de fechas
    for (let i = 0; i < cantidadBloques; i++) {
        const bloque = [];
        for (let j = 0; j < 1; j++) {
            bloque.push(generarFechaAleatoria());
        }
        fechas.push(bloque);
    }

    return fechas;
}

// Ejemplo de uso: generar 10 bloques de 5 fechas aleatorias
const fechasAleatorias = generarFechasAleatorias(1);
console.log(fechasAleatorias);



function generar() {
    var resultado=""
    
    var matricula = 223090001;

     

    for (let i = 0; i < 50000; i++) {
       resultado+= `('${matricula++}'),
         '${apellidosAlemanes[Math.floor(Math.random()*100)]}',
         '${apellidosEspanoles[Math.floor(Math.random()*100)]}', 
         '${Math.floor(Math.random() * 2 + 1) == 1 ?
           nombresEspanol[Math.floor(Math.random() * 100)] :
           nombresChino[Math.floor(Math.random() * 100)] + " "
           + nombresEspanol[Math.floor(Math.random() * 100)]}' ,
         '${matricula-1}@unikino.edu.mx',
        '${fechasAleatorias}')<br>`;}
    //resultado+= `;` ;
    resultado+=resultado.slice(0,-4)+";";

    document.getElementById("parrafo").innerHTML = resultado;

   

}

