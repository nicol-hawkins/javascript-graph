

        function render() {
            fetch("./data/year_data.json")
                .then(response => response.json())
                .then(data => {
                    console.log("got the data!");
                    console.log(data);

                    for (let item in data) {
                        console.log('Country: ', data[item].country)
                        console.log('Years: ', data[item].years )   
                    }

                })

          

            // for (let [key, value] of Object.entries(data)) {
            //     console.log(`${key}: ${value}`);
               
            //     }







            // let chart = document.querySelector('#results');
            
            // for (country in data);
            // let key = document.write(country);
            // let value = document.write(data[country]);
            // console.log('Country: ', value);
        
            // for (let item in data) {
            //     let bar = document.createElement("div");
            //     let height = 70;
            //     bar.classList.add("BarChart-Bar");
            //     bar.style.height = height + "%";
            //     chart.appendChild(bar);
              
            // }
        }
        render();
        



// function render() {
//     let chart = document.querySelector('#results');
    
//     for (country in data);
//     let key = document.write(country);
//     let value = document.write(data[country]);
//     console.log('Country: ', value);

//     for (let item in data) {
//         let bar = document.createElement("div");
//         let height = 70;
//         bar.classList.add("BarChart-Bar");
//         bar.style.height = height + "%";
//         chart.appendChild(bar);
      
//     }
// }
// render();
