let addNumbers=(...numbers) => {
    let sum=0;
    numbers.forEach((number)=>(sum+=number));
    console.log("Inside addNumbers", sum);
    return sum;
}
 module.exports ={
    addNumbers
 }