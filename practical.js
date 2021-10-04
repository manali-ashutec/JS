// const bill = 420;
// const tip1 = 15;
// const tip2 = 20;

 console.log(bill);
const tipamount = bill>=50 && bill<=300 ? tip1 : tip2 ;
 console.log(tipamount);
 const total = bill * tipamount / 100;
console.log(total);
 const alltotal = bill + total;
console.log(alltotal);

function calculatetotal(num) {
    const tipamount = num>=50 && num<=300 ? 15 : 20 ;
    const total= num * tipamount /100;
    const alltotal = num + total;
    return alltotal;     
}
calculatetotal(420);
calculatetotal(150);
/////////////////////////////////////////
const calcAverage = (a,b,c) => (a + b + c) /3;

const checkWinner = function(avgDilphins,avgKoalas) {
    const dolphins = calcAverage(avgDilphins);
    console.log(dolphins);
    const koalas = calcAverage(avgKoalas);
    console.log(koalas);
    
    if(dolphins >= 2*koalas){
        console.log(`Dolphins win ( ${dolphins} vs. ${koalas} )`);
    }
    else if(koalas >= 2*dolphins){
        console.log(`Koalass win ( ${koalas} vs. ${dolphins} )`);
    }
    else{
        console.log(`Draw this time`);
    }
}

///////////////////////////////////////////
const calcAverage = (score) => {
    total=0;
    score.forEach(element => {   
        total = element + total;
        // score.legth();
    });    
    avg=total /score.length;
    return avg;
}
// const dolphins= [44,23,71];
// const koalas= [65,54,49];
const dolphins= [576];
const koalas= [111];
var scoreDol= calcAverage(dolphins);
var scoreKoa= calcAverage(koalas);
console.log(scoreDol,scoreKoa);
const checkWinner = function(avgDilphins,avgKoalas) {    
    if(avgDilphins >= 2*avgKoalas){
        console.log(`Dolphins win ( ${avgDilphins} vs. ${avgKoalas} )`);
    }
    else if(avgKoalas >= 2*avgDilphins){
        console.log(`Koalass win ( ${avgKoalas} vs. ${avgDilphins} )`);
    }
    else{
        console.log(`Draw this time`);
    }
};

const checkScore = checkWinner(scoreDol,scoreKoa);

///////////////////////////////////////////
let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot']
//console.log(vegetables)
// ["Cabbage", "Turnip", "Radish", "Carrot"]

let pos = 2
let n = 0

let removedItems = vegetables.splice(pos, 1,'manali');
//console.log(vegetables);
//console.log(removedItems);

let shallowCopy = vegetables.slice();
console.log(shallowCopy);

///////////////////////////////////////////
const fruits = []
fruits.push('banana', 'apple', 'peach')

fruits[5] = 'mango'
console.log(fruits[5])            // 'mango'
console.log(Object.keys(fruits))  // ['0', '1', '2', '5']
console.log(fruits.length)        // 6
fruits.length = 10
console.log(fruits) 
console.log(Object.keys(fruits)) 

/////////////////////////////////////
const bill = [125,555,44];
console.log(bill);
    const tip =[];
  bill.forEach((task) => {
    const subTotal = calculatetotal(task);
    // console.log(subTotal);
    tip.push(subTotal);
    console.log(tip);
});

function calculatetotal(num) {
const tipamount = num>=50 && num<=300 ? num*0.15 : num*0.2 ;
const alltotal = num + tipamount;
return alltotal;     
}
const total = calculatetotal(bill);

/////////////////////////////////////////////////
const Mark = {
    fullName : 'Mark Miller',
    mass : 78,
    height : 1.69,

    calcBMI: function(){
        total= this.mass / this.height **2;
        return total;
    }
 };
 const John = {
    fullName : 'John Smith',
    mass : 92,
    height : 1.95,

    calcBMI: function(){
        total= this.mass / this.height **2;
        return total;
    }
 };
 console.log(Mark.calcBMI());
 console.log(John.calcBMI());

 const higherBMI =  Mark.calcBMI() > John.calcBMI() ? `${Mark.fullName} 's BMI ${Mark.calcBMI()} is higher than Johns ${John.calcBMI()}` : `${John.fullName} 's BMI ${John.calcBMI()} is higher than Marks ${Mark.calcBMI()}` ;
 console.log(higherBMI);

 //////////////////////////////////////////
 const bill = [125,555,44];
        console.log(bill);
        const tip =[];
        const subTotal = [];
        for(i=bill.length -1;i>=0 ;i--){
            console.log(i);
            const ind = bill[i];
            console.log('-------------- index',ind);
            const subTotal = calculatetotal(bill[i]);

            
            tip.push(subTotal);
            
            console.log('----------- tips');
            console.log(tip);
        }

        function calculatetotal(num) {
            const tipamount = num>=50 && num<=300 ? num*0.15 : num*0.2 ;
            const alltotal = num + tipamount;
            return alltotal;     
        }
        const total = calculatetotal(bill);

///////////////////////////////////////////////
let bill = [125,555,44];
        console.log(bill);
        let tip =[];
        const subTotal = [];
        // for(i=bill.length -1;i>=0 ;i--){
        //     console.log('----------- index',bill[i]);
      
        //     bill[i] +=10 
        //     console.log('--------- tips 10 + ',tip);
            
        //     // console.log(tip);
        // }
        // console.log(bill);
        
        bill.forEach(   (Element) => {
            tip = Element += 10;  
            subTotal.push(tip);    
        });
        console.log(subTotal);
        
        function calculatetotal(num) {
            const tipamount = num>=50 && num<=300 ? num*0.15 : num*0.2 ;
            const alltotal = num + tipamount;
            return alltotal;     
        }
        const total = calculatetotal(bill);

////////////////////////////////////////
const temperatures=[17,21,23];
        let appandTemp = '';

        temperatures.forEach((temperature,index) => {
            let day = index + 1;
            
            
            if(index < 1){ 
                appandTemp = '...' ;
            }
            
            appandTemp += `${temperature}'C in ${day} days... `;
            //console.log(`${temperatures[0]}'C in ${day}days ... ${temperatures[1]}'C in ${day[1]}days ... ${temperatures[2]}'C in ${day[2]}days`);
        });
          console.log (appandTemp); 
        // console.log (appandTemp); 

//////////////////////////////////////
const me = {
    name : 'manali',
    namePrint : () => {
        console.log(this);
        console.log(`hyy  ${me.name}`);
    },
  
};
const copy = Object.assign({},me);
copy.name='mana';
console.log(me);
console.log(copy);

    //     const manali = {
    //         name:'manali',
    //         subject : [10,10,10],
    //         bod : 1998,

    //         calcTotal: function(){
    //         sum=0;
    //         for (let i = 0; i < this.subject.length; i++) {
    //             sum += this.subject[i];
    //         }
    //         return sum;
    //         }
    //     }
    //     //console.log(manali.calcTotal());
    //     let a=0;
    //     if(a != 0){
    //         console.log("if");
    //     }
    //     else{
    //         console.log("else");
    //     }

    ////////////////////////////////////////////////////////////
    const restaurant = {
        name: 'Classoco Italiano',
        location : 'via angelo tavanti 23, Firenze,Italy',
        categories: ['Italian', 'pizzeria', 'Vegetarian', 'organic'],
        starterMenu: ['Focaccia', 'Bruschetta', 'garlic Bread', 'Caprese Salad'],
        mainMenu: ['pizza', 'pasta', 'risotto'],
        openingHours: {
             thu: {
                 open: 12,
                 close: 22,
             },
             fri: {
                 open: 11,
                 close: 23,
             },
            sat: {
                open: 0,
                close: 24,
            },
        },
        order: function (starterIndex, mainIndex) {
         return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
         },

         orderDelivery: function (
             { starterIndex = 1, mainIndex = 0, time = '20:00', address }){
             console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
         },
    };

    const arr = [1,2, ...[3,4]];
    console.log(arr);

    const [a, , ...others] = [1,2,3,4,5];
    console.log(a, others);

    // spred operator (...)
 //    const arr = [7,8,9];
 //    const badNumber = [1,2, arr[0], arr[1], arr[2]];
 //    console.log(badNumber);

 //    //const newArr = [1, 2, arr];
 //      const newArr = [1, 2, ...arr];
 //    console.log(newArr);
 //    console.log(...newArr);

 //    const newMenu = [...restaurant.mainMenu, 'Gnocci'];
 //    console.log(newMenu);

 //    const str = 'Manali';
 //    const letters = [...str, '', 'S.'];
 //    console.log(letters);
 //    console.log(...str);
 //    console.log(`${str} pamchasara`);

    
 //    const restaurantCopy = {...restaurant};
 //    restaurantCopy.location = 'bbik jfhnwis';
 //    restaurantCopy.openingHours.thu.open = 10;
 //    console.log(restaurantCopy);
 //    console.log(restaurant);

    
 // destruct Objects///////////////////////////////////////////
 //      restaurant.orderDelivery({
         //     time: '23:30',
         //         address: 'via del sole,21',
         //         mainIndex: 2,
         //         starterIndex: 2,
         // });

         // restaurant.orderDelivery({
         //         address: 'via del sole,21',
         //         starterIndex: 1,
         // });

 //    const { name, openingHours, categories } = restaurant;
 //    console.log(name, openingHours, categories);
    
 //    const { name: restaurantname, openingHours: hours, categories:tags } = restaurant;
 //    console.log(restaurantname, hours, tags);

 //    /////default value
 //    const{ menu = [], starterMenu:starters =[] } = restaurant;
 //    console.log(menu, starters);

 //    // mutating variables
 //    let a = 111;
 //    let b = 999;
 //    const obj = { a:23, b:7, c:14};
 //    ({a, b} = obj);
 //    console.log(a,b);

 //    /////nested object
 //    const{ fri: {open:o, close:c},} = openingHours;
 //    console.log(o    , c);

 //////////////////////////////////////////////////////////////////////////
 const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
        players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
    };
    const [player1,player2] = game.players;
    console.log(player1,player2);

    const [ gk , ...otherPlayers ] = player1;
    console.log(gk, otherPlayers);

    const allTeam = [...player1,...player2]
    console.log(allTeam);

    const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
    console.log(players1Final);

    const {odds : {team1, x: draw, team2}} = game;
    console.log(team1,draw,team2);  

    const printGoals = function (...players) {
        console.log(players);
        console.log(players.length);
    }
    printGoals(...game.scored);
    //const finalScore = team1 < team2 ? 'team1 is more likely to win' : 'team1 is more likely to win';

    team1 < team2 && console.log('team1 is more likely to win');
    team2 < team1 && console.log('team2 is more likely to win');

    for(const name of allTeam) console.log(name);

    console.log([...allTeam.entries()])

    for(const name of allTeam.entries()){
        console.log(name);
    }

////////////////////////////////
const orderSet = new Set([
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
]);
const arr = { name : 'manali' };
const arr1 = { name : 'manali' };
orderSet.add(arr1);
orderSet.add(arr1);
console.log(orderSet);

///////////////////////////////
const g = (function(){
    let a= 20;
    return function(){
     console.log(a++);
    };
});
g();
console.dir(g);

/////////////////home work///////////////////
const addition = function(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
//console.log(addition(number));

const multiplication = function(arr){  
    let sum = 1;   
    
    for (let i = 0; i < arr.length; ++i) { 
        sum *= arr[i]; 
    }
    return sum; 
}
//console.log(multiplication(number));  

let number = [1, 2, 3, 4];
let doTotal = (number , addition(number));
//console.log(doTotal);

const doCalc = function(array,add){
    return add(array);
}
console.log(doCalc(number,addition));
console.log(doCalc(number,multiplication));

/////////////////////////////////////////
function createBase(baseNumber) {
    return function(N) {
      return baseNumber + N;
    }
}
let addSix = createBase(6);
//console.log(addSix(10));
