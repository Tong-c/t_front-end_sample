
var farm = {};
farm.farmer = "jessie";
farm.chick = 15;

var tFarm = {
    farmer : "jessie",
    chick : 15,
    dogs : ["james", "harden"],
    countDogs : function(){
        console.log(this.dogs.length);
    }
};

tFarm.countDogs();

// console.log(tFarm.dogs[0]);