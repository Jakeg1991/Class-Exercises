
console.log("Example with class");

// Instead of a function that creates a car,
// we define a class Car

// A class looks much cleaner, and has many other advantages.

class Car {

    // The constructor initializes the properties.
    // It gets called when we do: new Car(some_brand)
    constructor(brand, model) {
        this.brand = brand
        this.model = model
        this.speed = 0
    }

    // methods:

    // (notice that now we don't say "function" and that we
    //  don't put a comma after closing brace of the function)
    

    accelerate(amount) {
        this.speed += amount;
    }

    brake(amount) {
        this.speed -= amount;
        if (this.speed < 0) {
            this.speed = 0
        }

    }

    status() {
        return this.brand + " " + this.model + " running at " + this.speed + " km/h";
    }
    
    emergencyBrake() {
        this.speed = 0
    }
    
    runningQuery() {
        if (this.speed > 0){
            console.log("Car is running")
        }
        else {
            console.log("Car isn't running")
        }
    }
}


//// Now we use create a Car object using the class
//
//var car = new Car("Ford", "Mondeo");
//
//console.log(car.status());
//car.accelerate(50);
//console.log(car.status());
//car.accelerate(100);
//console.log(car.status());
//car.brake(15);
//console.log(car.status());
//car.runningQuery();
//console.log(car.status());
//car.emergencyBrake();
//console.log(car.status());
//
//
//// We may create other cars easily
//
//var car2 = new Car("Ferrari", "812");
//car2.accelerate(200);
//console.log(car2.status());

class TV {
    constructor(brand) {
        this.brand = brand
        this.channel = 1
        this.volume = 50
        this.resetVolume = this.volume
        this.resetchannel = this.channel
    }
    status() {
        return  "TV Diagnostics --- "+
                "Brand: "+this.brand+
                ", Channel: "+this.channel+
                ", Volume: "+this.volume
    }
    volumeUp(amount){
        this.volume += amount
        if  (this.volume>100){this.volume=100}
    }
    volumeDown(amount){
        this.volume -= amount
        if  (this.volume<0){this.volume=0}
    }
    setChannel(channel){
        if (channel>60 || channel<0){}
        else (this.channel = channel)
    }
    reset(){
    this.volume = this.resetVolume
    this.channel = this.resetchannel
    }
    }
//    
//    
//
//var television = new TV ("Pansasonic")
//television.volumeUp(34)
//television.setChannel(53)
//console.log(television.status())
//television.reset()
//console.log(television.status())



