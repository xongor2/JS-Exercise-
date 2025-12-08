// 



async function fetchData() {
    console.log("starting Fatching Data")
    const Response = await  fetch('data.JSON')
    const data = await Response.json()
    console.log(data)
}

fetchData()
