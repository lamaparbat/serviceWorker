export const serviceWorker = () => {
 const swUrl = `${process.env.PUBLIC_URL}/sw.js`
 if ("serviceWorker" in navigator) {
    //registering 
  navigator.serviceWorker.register(swUrl)
   .then((res) => {
    console.log(res)
   })
   .catch(err => {
    console.warn(err)
   })
 } else {
  console.log("serviceWorker not found!!")
 }

}