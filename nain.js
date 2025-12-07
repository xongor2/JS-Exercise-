
// Marka uu yahay Synchronous 

function blocking(){
    alert("U gudub dalabka xiga")
    return {
        Name: "xongor",
        City: "abudwak"
    }
}
const usr = blocking()
 console.log( usr)
 console.log( " waa Loo gud bay dalabkii xigay ")



 // Marka uu yahay Asynchronous 
 function nonBlocking(kabalyeeri){
    setTimeout(()=>{
        const dalabka = {
            cunto: "baasto",
            Cabitaan: "faanto"
        }
        kabalyeeri(dalabka)
    },2000)
 }s
 nonBlocking( function(dalabka){
    console.log(dalabka)
 })