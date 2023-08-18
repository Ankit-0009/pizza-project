//Netwok call code
export default async function doNetworkCall(){ //default for the single item return
    const URL = 'https://gist.githubusercontent.com/kshirsagarps/36fade16fa39202715656ef487aaf7b0/raw/2b682e589ef283f06be42d2799dfa54f57794a6e/Pizza.json';
    try{
        const response=await fetch(URL); //promise means future mein data aaega yah ni aaega. Fetch is async. This line is syn bcz value assign in var which is low time taking task.
        const obj=await response.json(); //Deseralization
        console.log('object is',obj);
        return obj; 
    }
    catch(err){
        throw err; //throw use to throw error bcz we can't handle error so throw it.
    }
    // console.log('Promise is: ',promise); //This will asyn. So it would pending. This statement is async bcz fetch is time taking task.
    // promise.then(function(response){
    //     console.log(response);
    // }).catch(function(err){
    //     console.log('Error',err);
    // });
    // console.log('Good Bye');
}
//Here promise is print as pending then back to event loop its print Good Bye
// after that promise will give its result by calling then or catch.

//asyn and await.