// // 1 swicth case 
// let a = 2 + 2;

// switch (a) {
//   case 3:
//     alert( 'Маловато' );
//     break;
//   case 4:
//     alert( 'В точку!' );
//     break;
//   case 5:
//     alert( 'Перебор' );
//     break;
//   default:
//     alert( "Нет таких значений" );
// }

// let x = prompt("Введите число", "")
// x = +x;
// switch (x) {
//     case 3:
//         alert("yo");
//         break;
//     case 2:
//         alert("you3")
//         break;
//     default:
//         alert("Гтчешл");
// }


// // while
// let i = 0;
// while (i < 3) { // выводит 0, затем 1, затем 2
//   alert( i );
//   i++;
// }

// // for 
// for (let i = 0; i < 3; i++) { // выведет 0, затем 1, затем 2
//     alert(i);
//   }


//   // Пузырьковая сортировка
//   function bubbleSortConcept1(arr) {
//     for (let j = arr.length - 1; j > 0; j--) {
//       for (let i = 0; i < j; i++) {
//         if (arr[i] > arr[i + 1]) {
//           let temp = arr[i];
//           arr[i] = arr[i + 1];
//           arr[i + 1] = temp;
//         }
//       }
//     }
//   }


// //   сортировки данных по возрастанию:
//   function compareFunc(a,b){    
//         if(a>b)        
//             return 1;    
//         else if(b>a)        
//             return -1;    
//         else        
//             return 0; 
//     }

//     var arr = [10,1,3,33,6]; // 1 3 6 10 33 
//     arr.sort(compareFunc);
//     // сортировка по убыванию
//     function compareFunc(a,b){
//         if(a>b)     
//            return -1;   
//         else if(b>a)     
//             return 1;   
//         else    
//             return 0; 
//     } 
//     var arr = [10,1,3,33,6]; // 33 10 6 3 1 
//     arr.sort(compareFunc); 
//     alert(arr);


//     // Поиск слов в строке
//     var str = "test it is test sun test no"; 
//     var counter = 0; 
//     var wordToFind = "test"; 
//     var index = str.indexOf(wordToFind); 
//     while(index != -1){    
//         counter++;      
//         index = str.indexOf(wordToFind,index+1); 
//     } // 3 
//     alert(counter);



//     let userdata = prompt("Enter your birthday in                year-month-day format", "2002-08-14");
//     let birthday = new Date(userdata) == 'Invalid Date' ? new Date() : new Date(userdata); 
//     console.log(birthday); 
//     let days = ['sunday', 'monday', 'tuesday', 'wednesday','thursday', 'friday', 'saturday']; 
//     alert("You were born on " + days[birthday.getDay()]);

//1. Пример класса
// class Reactungle {
//   width;
//   height;

//   constructor(w,h) {
//     this.width = w;
//     this.height = h;
//   }

//   calcArea(){
//     return console.log(this.width * this.height);
//   }
// }

// const rect = new Reactungle(5, 10)
// rect.calcArea()
// const rect2 = new Reactungle(5, 100)
// rect2.calcArea()


class User {
  name;
  secondName;
  old;

  constructor (name,secondName,old) {
    this.name = name;
    this.secondName = secondName;
    this.old = old;
    // let date = 25;
  };

  sayHello(){
  
    console.log(`Привет! Меня зовут ${this.name} ${this.secondName} Мне ${this.old} Лет`)
  }
}


const nikita = new User("Никита", "Елагин", 25)
nikita.sayHello();


class Worker extends User{
  expirieance;
  constructor(name,secondName,old, exp){
    super(name,secondName,old)
    this.expirieance = exp
  };

  sayHello(){
  
    console.log(`Привет! Я программист. Меня зовут ${this.name} ${this.secondName} Мне ${this.old} Лет`)
  }

}

const nikitaWorker = new Worker("Никита", "Елагин", 27, 5)
nikitaWorker.sayHello()


const personsList = [nikita,nikitaWorker]

function massHello(persons){
  for (let i = 0; i < persons.length; i++){
    const person = persons[i];
    person.sayHello()
  }
}
massHello(personsList)
