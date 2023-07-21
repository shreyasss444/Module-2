let person={
    firstName:"Joe",
    lastName:"Biden",
    fullName: function()
    {
        return this.firstName+ " "+ this.lastName;
    }
}
console.log(person.fullName());