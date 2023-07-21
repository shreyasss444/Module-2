let pet=
{
    type:"Dog",
    name:"Buddy",
    legs:4,
    color:"white",
    food:{
        food1:"chicken",
        food2:"mutton",
        food3:"milk",
    }
}
console.log(pet.name);
for (i in pet)
{
console.log(pet[i]);
}
for (i in pet.food){
    console.log(pet.food[i]);
}