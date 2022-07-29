class Person {
    speed = 0;
    name = null;

    constructor(name) {
        this.name = name;
    }
    
    Go(speedType) {
        if( speedType === "middle") {
            this.speed = 5;
        }
        console.log(`Is going with speed ${this.speed}`);
    }

    Run() {
        console.log(`${this.name} is running`);
    }
}

class Woman extends Person {

    Go(speedType) {
        if( speedType === "middle") {
            this.speed = 3;
        }
        console.log(`${this.name} is going with speed ${this.speed}`);
    }
}

class Man extends Person {

    Go(speedType) {
        if( speedType === "middle") {
            this.speed = 6;
        }
        console.log(`${this.name} is going with speed ${this.speed}`);
    }
}

const eugene = new Man('Eugeniy');
eugene.Run();

const someGirl = new Woman('Alice');
someGirl.Run();

const anotherGirl = new Woman('Kate');
anotherGirl.Run();