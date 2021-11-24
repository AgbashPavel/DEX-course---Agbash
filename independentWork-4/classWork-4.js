// const url = "https://jsonplaceholder.typicode.com/todos";
// const requestURl = "https://jsonplaceholder.typicode.com/users";


// console.log("Preparing data...");
// setTimeout(() => {
//   console.log("Request ...");
//   const responseDate = {
//     server: "aus",
//     port: 8881,
//     status: "working",
//     modified: false
//   }
//   setTimeout(() => {
//     responseDate.modified = true;
//     console.log("Data received ...", responseDate);
//   }, 2000);
// }, 2000);

// const promise = new Promise ((resolve, regect) =>{
//   setTimeout(() => {
//     console.log("Request ...");
//     const responseDate = {
//       server: "aus",
//       port: 8881,
//       status: "working",
//       modified: false
//     }
//     resolve (responseDate) ;
//   }, 2000);
// });

// promise.then((data) => {
//   setTimeout (() => {
//     data.modified = true;
//     console.log("Data received ...", data);
//   }, 2000);
// });
// //.catch ((e) => console.error(e));???

// const delay = (ms) =>{
//   return new Promise (resolve=>{
//     setTimeout(()=>resolve(),ms)
//   })
// }

// delay (3000).then(()=>console.log("3 s"));

// Promise.all([delay(3000), delay(5000)]).then();

// const url = "https://jsonplaceholder.typicode.com/todos";

// const fetchData = () => {
//   return delay (2000)
//   .then(() => fetch(url))
//   .then((data) => data.json());
// };
// fetchData().then((data) => console.log (data));

// const fetchData =() => {

// мой вариант
// (async () => {
//   try {
//     let response = await fetch(url);
//     console.log (await response.json());
//     throw new Error("Error!");
//   }
//   catch(err) {
//     console.log(err);
//   }
// })()



const requestURl = "https://jsonplaceholder.typicode.com/users";
const getUser = (metod, url) =>{
  return fetch(url).then((r) => r.json());
};

 getUser ("GET", requestURl).then ((data) => console.log(data));

(async () => {
  const user = {
    name: "Oleg",
    username: "Oleg",
    email: "Oleg@april.biz",
    age: 25
  } ;

  try {
    let response = await fetch(requestURl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(user)
    });
    console.log(await response.json());
  }
  catch (error) {
    console.error('Ошибка:', error);
  }
})()
