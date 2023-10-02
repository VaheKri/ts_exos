interface Pet {
    name: string;
    age: number;
    speak(): string;
}

class Dog implements Pet {
    
    name: string;
    age: number;
    
    constructor(name: string, age: number) { 
        this.name = name;
        this.age = age;
    }

    speak(): string {
        return 'woof';
    }
}

class Cat implements Pet {
    
    name: string;
    age: number;
    
    constructor(name: string, age: number) { 
        this.name = name;
        this.age = age;
    }

    speak(): string {
        return 'Meow!';
    }
}

class Perrot implements Pet {
    
    name: string;
    age: number;
    words!: string[]
    
    constructor(name: string, age: number) { 
        this.name = name;
        this.age = age;
        this.words = ['bonjour', 'rouge', 'bleu', 'merci'];
    }

    speak(): string {
        return this.words.join(', ');
    }
}

let dogObject = new Dog('Dogi', 12);

let catObject = new Cat('Cati', 18)

let perrotObjet = new Perrot('Perroti', 6);

console.log('Chien : ' + dogObject.name + ' ' + dogObject.age + ' ans' + ' ' + dogObject.speak() + ', ' + 'Chat : ' + catObject.name + ' ' + catObject.age + ' ans' + ' ' +  catObject.speak() + ', ' + 'Perroquet : ' + perrotObjet.name + ' ' + perrotObjet.age + ' ans' + ' '  + perrotObjet.speak())