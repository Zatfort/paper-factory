export	const customFetch = (products, stallTime = 0, id,) => {
    return new Promise((resolve, reject,) => {
        setTimeout(() => {
            try{
                if(products){
                    if (id) {
                        const item = products.find((producto) => producto.id  === id )
                        resolve(item)
                    }else{
                        resolve(products)
                    }
                }
            }
            catch(err){
                reject(err)
            }
        },stallTime)
    })
}




















/*

 setTimeout(() => {
            resolve(products)
        },2000)

        
 si no quiero el setimeout

 
   resolve(products)

   -customFetch primero-
   export	const customFetch = (products) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        },2000)
    })
}
    

*/