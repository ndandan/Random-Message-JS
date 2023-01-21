//Random Quotes in an array
const quotes = [  "The best way to predict the future is to create it.",  "The only limit to our realization of tomorrow will be our doubts of today.",  "You miss 100% of the shots you don’t take.",  "The most difficult thing is the decision to act, the rest is merely tenacity.",  "It does not matter how slowly you go as long as you do not stop.",  "The only way to do great work is to love what you do.",  "Success is not final, failure is not fatal: It is the courage to continue that counts.",  "The best time to plant a tree was 20 years ago. The second best time is now.",  "The only limit to our realization of tomorrow will be our doubts of today.",  "I have not failed. I’ve just found 10,000 ways that won’t work.",  "You can’t build a reputation on what you are going to do.",  "The greatest glory in living lies not in never falling, but in rising every time we fall.",  "I have not failed. I’ve just found 10,000 ways that won’t work.",  "The only way to do great work is to love what you do.",  "The only limit to our realization of tomorrow will be our doubts of today.",  "The best way to predict the future is to create it.",  "The only limit to our realization of tomorrow will be our doubts of today.",  "You miss 100% of the shots you don’t take.",  "The most difficult thing is the decision to act, the rest is merely tenacity.",  "It does not matter how slowly you go as long as you do not stop.",  "The only way to do great work is to love what you do.",  "Success is not final, failure is not fatal: It is the courage to continue that counts.",  "The best time to plant a tree was 20 years ago. The second best time is now.",  "The only limit to our realization of tomorrow will be our doubts of today.",  "I have not failed. I’ve just found 10,000 ways that won’t work.",  "You can’t build a reputation on what you are going to do.",  "The greatest glory in living lies not in never falling, but in rising every time we fall.",  "I have not failed. I’ve just found 10,000 ways that won’t work.",  "The only way to do great work is to love what you do."];

//Sets an empty array globally
let nums = [];

//function to return 2 quotes from the quotes array to the nums array
const randomSelector = () => {
    let random1 = Math.floor(Math.random()*30);
    let random2 = Math.floor(Math.random()*30);
    if(random1 === random2){
        random2 = Math.floor(Math.random()*30);
    }
    nums.push(quotes[random1]);
    nums.push(quotes[random2]);
    return nums;
};

//Function to check the array passed is empty and then calls the random selector and console logs the 2 quotes picked
const messageCreator = (arr) =>{
    if(!arr.includes()){
        arr = randomSelector();
    }
    console.log(`${arr[0]} and also ${arr[1]}`);
}


messageCreator(nums);