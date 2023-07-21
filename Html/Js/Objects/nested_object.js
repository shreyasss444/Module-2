let person = 
{
    name: "Khan",
    age:18,
    gender:"Male",
    eyecolor:"black",
    cars:{
        car1:"Lamborghini",
        car2:"Bugatti"
    }
}
for (i in person.cars){
    console.log(person.cars[i]);
}