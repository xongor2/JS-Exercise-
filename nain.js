// 



// async function fetchData() {
//     console.log("starting Fatching Data")
//     const Response = await  fetch('data.JSON')
//     const data = await Response.json()
//     console.log(data)
// }

// fetchData()
  

//  function operate(a,b, boss ){
//     return boss (a,b)
//  }
//  function iskuDar(a,b){
//     return a+b
//  }
//  function kalaJar(a,b){
//     return a-b
//  }
//  function iskuDhufasho(a,b){
//     return a*b
//  }
//  function IskuQaybin(a,b){
//     return a/b
//  }

//  console.log("Wadarta 5+3 waa:", operate(5,3, iskuDar))
//  console.log("10-6 =:", operate(10,6, kalaJar))
//  console.log("5*5 =:", operate(5,5, iskuDhufasho))
//  console.log("20/2 =:", operate(20,2, IskuQaybin))


// async function fetchData() {

//     try {
        
//         let Response = await fetch('https://jsonplaceholder.typicode.com/users')
//             if (!Response.ok ){
//                 throw new error (`cilad ayaa jirta, ${Response.status}`)
//             }
//             let data = await Response.json()
//             console.log (data)



//     } catch (error) {
//         console.log(error)
//     }

    
// }
// fetchData()

const salaan = document.querySelector('#salaan')
console.log(salaan.innerHTML)




