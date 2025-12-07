
function soohelXobgta(){
    return new Promise ((resolve, reject)=>{

        setTimeout(()=>{
            const natijo = true
            if(natijo){
                resolve({
                    ID: 20, Name: " xongor"
                })
            }else{
                reject("cilad ayaa jirta ")

            }
        })

    }, 2000)
}

soohelXobgta()
            .then(xogta => console.log(xogta))
            .catch(err => console.log(err))

