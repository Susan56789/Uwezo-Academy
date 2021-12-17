


async function getData(url){

    url = 'https://www.udemy.com/api-2.0/courses/';

    const response = await fetch(url);

    var data = await response.json();

    console.log(data);

    if(response){
        hideloader();
    }
    SharedWorker(data);
}


module.exports = getData;

