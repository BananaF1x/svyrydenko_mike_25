class Human {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
}

class Apartment {
    residents = [];

    addResident(resident) {
        this.residents.push(resident);
    }
}

class House {
    constructor(maxApartments) {
        this.apartments = [];
        this. maxApartments = maxApartments;
    }

    addApartment(apartment) {
        if(this.apartments.length > this.maxApartments) {
            console.log("Перевищена максимальна кількість квартир");
        } else {
            this.apartments.push(apartment);
        }
    }
}

const firstPersone = new Human("Mike", "male");
const secondPersone = new Human("Anna", "female");
const thirdPersone = new Human("Alex", "male");

const firstApartment = new Apartment();
const secondApartment = new Apartment();
const thirdApartment = new Apartment();

firstApartment.addResident(firstPersone);
secondApartment.addResident(secondPersone);
thirdApartment.addResident(thirdPersone);

const firstHouse = new House(4);

firstHouse.addApartment(firstApartment);
firstHouse.addApartment(secondApartment);
firstHouse.addApartment(thirdApartment);

console.log(firstHouse);