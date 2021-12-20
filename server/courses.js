const fetch = require('node-fetch');

    url = 'https://www.udemy.com//api-2.0/courses';


         module.exports=  async  function courses() {
        try{
         const request= await fetch(url,{
                method:'GET',
                credentials:"same-origin",
                headers:{
                "Authorization":"Basic WnNPY0txUnlhVU9WaWx4VFdCSE0yZGo2Uk5BUGdRM05BNzRMbUJlYTpYZlVZUXprazc3T2FmWFJ5bHVONW5RQ1hRNThGeHBtd1NYTE9HaXJQa0hDQ0lBT0N5aVRGYVZYV3htZ1V3YTBtQURab3drc2I4YzEzYVFrblNLWGlKS1ZWMUFqb2t3M3ZQNm13NTU5dXNIYXAxeU9oZFo2VHJQZERnUTlKanF1aA==",
                "redirect":"follow",
                "referrerPolicy":"no-referrer",
                "Permissions-Policy":"interest-cohort =()",
                "Accept":"application/json, text/plain, */*",
                'Content-Type': 'application/json,  charset=utf-8',
                "credentials":"same-origin",
                "cache":"no-cache"
                }
                
                
             })
              .then(function(response){
                  //console.log(response)
                  return response.json();
              })
              .then(function(data){
                 // console.log(data);
                 return data;
              })
            return request;  
        }
        catch(e){
            console.log("We have an error")
            console.log(e)
        }
    }


  