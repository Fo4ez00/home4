//Напишіть функцію isString, яка перевірятиме, чи є передане значення рядком. Потім використовуйте її для звуження типу змінної.
function isString(value: (string | number)): value is string {
    return typeof value === 'string';
  }
  
  function narrowingType(input: (string | number)) {
    if (isString(input)) {
      console.log(input.toUpperCase()); 
    } else {
      console.log('Не є рядком');
    }
  }
//У вас є масив з елементами різних типів. Напишіть функцію, яка приймає цей масив і фільтрує його так, щоб у підсумку в ньому залишилися тільки рядки. Використовуйте захисника типу для цього завдання.
  function filterStrings(arr: (string | number | boolean)[]): string[] {
    return arr.filter((item): item is string => typeof item === 'string');
  }
//Створіть кілька захисників типу, кожен з яких перевіряє певний аспект об'єкта (наприклад, наявність певної властивості або її тип). Потім напишіть функцію, яка використовує цих захисників у комбінації для звуження типу об'єкта до більш конкретного типу.
  class Animal {
    type: 'animal';
    name: string;
  }
  
  class Dog extends Animal {
    name:'Dog'
    species: string;
  }

  function isAnimal(obj: any): obj is Animal {
    return obj.type === 'animal';
  }
  
  function isDog(pet: any): pet is Dog {
    return pet.type === 'Dog';
  }
  function processAnimal(animal: Animal) {
     if (isDog(animal)) {
      console.log(`Dog: ${animal.name}, Species: ${animal.species}`);
    } else if (isAnimal(animal)) {
      console.log(`Animal: ${animal.name}`);
    } else {
      console.log('Unknown animal type');
    }
  }


//У вас є об'єкт, який може містити довільні властивості. Напишіть функцію, яка приймає цей об'єкт і повертає значення однієї з властивостей, якщо воно існує і має певний тип.
function getPropertyByType(
  obj: { [key: string]: any },
  propertyName: string,
  expectedType: () => any
): any | undefined {
  if (obj.hasOwnProperty(propertyName) && typeof obj[propertyName] === 'function' && obj[propertyName] instanceof expectedType) {
    return obj[propertyName];
  }
  return undefined;
}

  //У вас є змінна, яка може бути одного з декількох типів (наприклад, рядок або число). Напишіть функцію, яка приймає цю змінну і виконує довільні операції, специфічні для кожного з типів.
  function processVariable(input: string | number)  {
    if (typeof input === 'string') {
      console.log(`Когда строка: ${input.toUpperCase()}`);
    } else if (typeof input === 'number') {
      console.log(`Когда число: ${input * 2}`);
    } else {
      console.log(`${typeof input}`);
    }
  }

//Створіть захисник типу, який перевірятиме, чи є передане значення функцією. Потім напишіть функцію, яка використовує цей гард для звуження типу змінної і викликає передану функцію, якщо вона існує.
  function isFunction(value: any): value is Function {
    return typeof value === 'function';
  }

  function callFunction(func: Function | undefined, ...args: any[]): void {
    if (isFunction(func)) {
      func(...args);
    } else {
      console.log('Функция не существует.');
    }
  }


//Створіть класи з ієрархією успадкування і потім напишіть функцію, яка використовує захисник типу для звуження типу об'єктів, що базуються на цій ієрархії.
  class Animals{
    constructor(public type: string) {}
  }
  
  
  class Bird extends Animals {
    constructor(type: string, public species: string) {
      super(type);
    }
  
    fly() {
      console.log(`Flying ${this.type} ${this.species}`);
    }
  }
  
  class Cat extends Animals {
    constructor(type: string, public view: string) {
      super(type);
    }
  
    go() {
      console.log(`Walking a ${this.type} ${this.type}`);
    }
  }
  
  function processAnimals(animals: Animals): void {
    if (animals instanceof Bird) {
      animals.fly();
    } else if (animals instanceof Cat) {
      animals.go();
    } else {
      console.log('Unknown animals type');
    }
  }
