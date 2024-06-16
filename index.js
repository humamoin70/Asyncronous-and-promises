"use strict";
// Write a simple asynchronous TypeScript function fetchGreeting that returns a
// greeting message after a 2-second delay using setTimeout.
Object.defineProperty(exports, "__esModule", { value: true });
// function fetchGreeting(): Promise<string> {
//       return new Promise ((resolve) => {
//         setTimeout(() => {
//             resolve("congrats!")
//         }, 20000);
//       });
// }
// fetchGreeting().then((greeting) => {
//     console.log(greeting);
// })
/* Question 2 Write a function simulateTask that simulates a task by logging "Task started",
waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.*/
// function simulateTask (){
//   console.log("Task Started");
//   setTimeout(() => {
//     console.log("Task Completed");
//   }, 1000);
// }
// simulateTask ();
// * Question # 3
// Write a function fetchData that returns a Promise which resolves with the string 
// "Data fetched successfully!" after a delay of 1 second.*/
// function fetchData(){
//   return new Promise ((resovle) => {
//     setTimeout(() => {
//       resovle("Data fetched successfully!");
//     }, 1000);
//   }
// )
// }
// fetchData().then ((message) => {
//   console.log(message);
// });
//  Question # 4
// Write a function fetchWithError that returns a Promise. It should randomly either 
// resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a 
// delay of 1 second. Handle the rejection using .catch */
// // 
// function fetchWithError(){
//   return new Promise ((resovle, reject) =>{
//     setTimeout(() => {
//       const success = Math.random() > 0.5;
//       if(success) {
//         resovle("Data fetched successfully!");
//       } else {
//         reject("Data fetch failed!");
//       }
//     }, 1000);
//   });
// }
// fetchWithError()
// .then((message) => {
//   console.log(message);
// })
// .catch((error) => {
//   console.log(error);
// });
// Question # 5
// Write a function executeSequentially that executes two functions fetchData and 
// processData sequentially using Promises, and logs the results in the order they are 
// called */
function fetchData1() {
    return new Promise((resovle) => {
        setTimeout(() => {
            resovle("Data fetched successfully");
        }, 1000);
    });
}
function processData() {
    return new Promise((resovle) => {
        setTimeout(() => {
            resovle("Data processed successfully");
        }, 1000);
    });
}
function executeSequentially() {
    fetchData1()
        .then((fetchResult) => {
        console.log(fetchResult);
        return processData();
    })
        .catch((error) => {
        console.log(error);
    });
}
executeSequentially();
