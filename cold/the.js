 module.exports.sum = function sum(a,c,b) {
       if(c%2==0){
           console.log('четное число')
       }else{console.log('не четное число ')}
       
       if(a<c&&b>c){
           console.log(true)
       }else{console.log(false)}
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


let att = [
    { name: 'rouse', price: 300 },
    { name: 'sunflower', price: 1000 },
    {name: '101 rouse', price: 3000 }
]

module.exports.call =att.filter((the)=>{
    let withDiscount = {}
     if (the.price>=200&&the.price<900){
         return the.withDiscount=(the.price-(5/100*the.price))
     }
     if(the.price>=900&&the.price<2500){
         return the.withDiscount=(the.price-(10/100*the.price))
     }
     if(the.price>=2500){
         return the.withDiscount=(the.price-(15/100*the.price))
     }

})








