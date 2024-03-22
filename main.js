

//factory practice

function createUser (name, lastName) {
    const fullName = name + " " + lastName;
    return {name, fullName}; //returning everything I need within an object is what makes this a factory. This is the beginning of what an api looks like. The issue being, this doesn't allow any inheritance to happen
};

console.log(createUser("Carlos", "Campbell"));



// Object longhand notation

    let firstName = "George";
    let middleName = "Matias";
    let lastName = "Harper";

    //this is the longhand version
    let fullName = { firstName: firstName, 
        //the first firstName is the new variable under fullName, and the 2nd firstName is the one that has the name "George" attached to it
                    middleName: middleName,

                    lastName: lastName,
                    
    };
     

    console.log(firstName, middleName, lastName) //makes recalling things unclear. will bring back George, Matias, Harper without any description


//Object shorthand notation

let firstName2 = "George";
let middleName2 = "Matias";
let lastName2 = "Harper"

let fullName2 = {firstName2, middleName2, lastName2};

    console.log({firstName2, middleName2, lastName2})  //shows firstName:"George", middleName: "Matias", lastName: "Harper". Makes it more clear to the user with the curly brackets


    function createCharacter (name){
        const Class = name + " The Sorcerer";
        
        let skillPoints = 5;

        const oneLevelUp = () => skillPoints;
        const questSkillPoints = () => skillPoints / 5;

        return {Class, oneLevelUp, questSkillPoints};
    };

    function speaking(name){
        return {
            name,
            talk(){
                return `My name is ${this.name}`
            }
        }
    };



    function sideCharacter(name){
        let mainCharacterName = "Sonic";
        return {
            mainCharacterName,
            originalSaying(){
                return `Hi, my names ${name}, ${this.mainCharacterName} and I are gonna save the day!`
            },
        };
    };

    function reoccuringSideCharacter(name){ //this doesn't work the way it is intended, because the side character is a function and in the example given, it is supposed to be a object
        return Object.create(sideCharacter, { //this is referencing a function, NOT an object. 
            name: {
                value: name,   
            }
            })
        }
    

        const animePredecesor = {
            dragonballZ : "dragonBallz",
            speech(){
                return `${this.name} uses Kamahema from ${this.dragonballZ}`
            }
        }

        function newGenAnime(name){
            return Object.create(animePredecesor,{
                name: {
                    value: name
                },
            })
        }

