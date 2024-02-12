// Complete the js code
function Car(make, model) {
    constructor(make:string, model:string)
	{
		this.make=make;
		this.model=model;
	}
	getMakeModel(){
		return this.make , this.model;
	}

	
}

function SportsCar(make, model, topSpeed) {
    constructor(make: string, model: string, topSpeed: number){
		this.make=make;
		this.model=model;
		this.toSpeed=topSpeed;
	}
	getTopSpedd(){
		return this.speed;
	}
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;


