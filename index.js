// var  color = "yellow";
// var size = 40;
// var price = 124.94;
// var isBestseller = true

// console.log(color);
// console.log(size);
// console.log(price);
// console.log(isBestseller);


// var cash = 50;
// var saving = 600;

// var result = cash + saving + 20;

// console.log(result)


// var saving = 100;
// var productCost = 150;

// console.log(saving < productCost)


// var average = (39 + 18 + 10 + 51 + 27 + 69 + 31) / 7 

// console.log(average + " minutes per day")
// console.log(average >= 30)



// var cash = 75;
// var shoes = 65;

// if(shoes <= cash){
//     console.log(" I have enough money to purchase the shoes.")
// }

// if(shoes > cash) {
//     console.log("I need more cash.")
// }

// var isWorking = false;
// var caIsReady = true;

// if(isWorking){
//     console.log("I have work to do.")
// }

// if(!isWorking){
//     if(caIsReady){
//         console.log("Let's go to the party!")
//     }
//     if(!caIsReady){
//         console.log("I can't go, my car is not ready yet.")
//     }
    
// }


// function dailyBattle(){
//     console.log("Today I made $100")
//     console.log("Today I made $150")
//     console.log("Today I made $16")
//     console.log("Today I made $170")
//     console.log("Today I won the battle.")
// }

// dailyBattle()


// var made = 40;
// var spent = 41;

// function dailyBattle(){
//     console.log("Today i made $" + made)
//     console.log("Today i spent $" + spent)
//     var totalMoney = made - spent
//     console.log("Total money for today $" + totalMoney)
//     if (totalMoney >= 0){
//         console.log("I won today's battle.")
//     }
//     if(totalMoney < 0){
//         console.log("I failed today's battle.")
//     }
// }

// dailyBattle()



// function becomeMember(){
//     console.log("Welcome! You are now a member.")
// }

// becomeMember()


// var randomNumber = (Math.random()) * 101;
// var rounded = Math.floor(randomNumber)
// console.log(rounded)

// if(rounded < 50){ 
//     console.log("I failed the exam.")
// }

// else if(rounded < 75){ 
//     console.log("I passed the exmam with an average mark.")
// }

// else{
//     console.log("I passed the exam with a great mark.")
// }


// function sum(n1, n2){
//     return n1, n2;
//     console.log()
// }

// var firstNumb = prompt("What is the first number?")
// var secondNumb = prompt("What is the second number?")

// function multiply(n1, n2){
//     return n1 * n2
// }

// alert(multiply(firstNumb, secondNumb))


// var friends = ["Jim", "Luna", "Tom", "Johnny"]

// var username = prompt("What is your name?")

// if(friends.includes(username)){
//     console.log("You can view the content.")
// }

// else{
//     console.log("You don't have access! Please contact your sys admin.")
// }

// console.log(friends.includes["Johnny"])



// var obj = document.getElementById("selected")
// console.log(obj)

// var obj = document.getElementsByTagName("a")[0]

// var obj = document.getElementsByClassName("main-nav")

// var obj = document.getElementById("selected")

// var obj = document.querySelector("div")


// document.getElementById("member-btn").style.boxShadow = "5px 10px 30px #70798c"



// function showReview(){
//     document.querySelector(".review-con").style.opacity = "100%";
//     document.querySelector(".product-img").style.filter = "brightness(0.4)"
// }


// var sun = document.getElementById("sun-icon")
// var moon = document.getElementById("moon-icon")
// var body = document.getElementsByTagName("body")[0]
// function darkMode(){
//     sun.style.display="none"
//     moon.style.display="block"
//     body.classList.toggle("body-dark")
// }

// function lightMode(){
//     sun.style.display="block"
//     moon.style.display="none"
//     body.classList.toggle("body-dark")
// }

// function sum(n1,n2){
//     console.log(n1+n2);
// }

// function calculate(p1,p2,operator){
//     operator(p1,p2)
// }

// Create UserNames---------------------------------------

// function CreatUser(name, lastname){
//     this.name = name;
//     this.lastname = lastname;
//     this.greeting = function(){ return "Hello " + this.name + " " + this.lastname}
// }

// function submitForm(){
//     userName = document.getElementById("name").value
//     userLastname = document.getElementById("lastname").value
//     var user1 = new CreatUser(userName, userLastname)
//     console.log(user1)
//     var greeting = "Hi " + user1.name + " " + user1.lastname + ", welcome to our website!"
//     document.getElementById("displayTitle").textContent = greeting
// }

// var user2 = {
//     name: "Johnny",
//     display: function(){ return "Hello " + this.name},
// }

// //Shipping cost per distance----------------------------------------
// var distance = Number(prompt("How far do you live from our store?"))

// switch(distance){
//     case 1:
//         console.log("The cost of the shipping is $5.");
//         break;
//     case 2:
//         console.log("The cost of the shipping is $10.");
//         break;
//     case 3:
//         console.log("The cost of the shipping is $15.");
//         break;
//     default:
//         console.log("The cost of shipping is $8.")
//         break;
// }