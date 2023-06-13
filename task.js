const user = {
    name: "Hamid Raza",
    age: 20,
    address:{
        city: "Phagwara ",
        state:"Punjab"
},

getFirstName:function (){
     return this.name.split(" ")[0];
},
getDetails: function(){
   console.log(`the user's name is ${this.getFirstName()} and they are ${this.age} year old and they live in ${this.address.city} ${this.address.state}`); 
},
};
user.getDetails()
// console.log(`the user's name is ${obj.name} and they are ${obj.age} year old and they live in ${obj.address}`);