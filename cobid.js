fetch('https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true')
  .then(response => response.json())
  .then(json => {
     
    var newActive = json.activeCasesNew;
    var totalConfirmed = json.totalCases;
    var newDeaths = json.deathsNew;
    var totalDeaths = json.deaths;
  
    var totalActive = json.activeCases;

    document.getElementById('blah').innerHTML=newActive;
    document.getElementById('gm').innerHTML=totalConfirmed;
    document.getElementById('fk').innerHTML=newDeaths;
    document.getElementById('no').innerHTML=totalDeaths;
    
    document.getElementById('blup').innerHTML=totalActive;
         
    var taable = document.getElementById('table');
  
      var r = json.regionData;
      var region = '';

      fetch('https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true')
        .then(response => response.json())
           .then(json => {   
              
                    r.forEach((region) =>{
                      output = `<tr><td>${region.region}</td><td>${region.totalInfected}</td></tr>`
                      taable.innerHTML += output
                    })     
                
            });  
    });