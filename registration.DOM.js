// first input box to enter your reg number
const regInput = document.querySelector(".regNoEntered");

// displaying the output in the screen
const displayed = document.querySelector(".regNumbers");

// displaying the reg number on the screen
const displayedScreen  = document.querySelector(".regNumber");

//adding registration
const regBtn = document.querySelector(".regButton");

//error message
const results = document.querySelector(".message");

//selected town
const selection = document.querySelectorAll(".town")

// submitting button
const submitted = document.querySelector(".added")

const storeReg = JSON.parse(localStorage.getItem['displayed'] || '[]')
const regNum = [];


for (var i =0; i<storeReg.length;i++){
	const currentReg = storeReg[i]

	const regNo = document.createElement('div');
	regNo.innerHTML = currentReg

	regNo.classList.add("displayedScreen");

	displayed.appendChild(regNo);

}

regBtn.addEventListener("click", function () {

        if (regInput.value.trim() == "") {
		message.innerHTML = "Please enter a registration number";
		return;
	}
        if (regNum.includes(regInput.value)) {
		message.innerHTML = "The registration number already entered"
		return;
	}


// displayed.innerHTML =registrationForAll(location,storeReg).value

        const regNo = document.createElement('div');
	regNo.innerHTML = regInput.value;

        regNo.classList.add("regNumber");
	regNum.push(regInput.value)
	displayed.appendChild(regNo);

        regInput.value = '';

        localStorage.setItem['displayed'] = JSON.stringify(regNum)

		
 
 });  

 function filtered(){
let carNumbers = ['CA', 'CJ', 'CAW', 'CL']


function filterItems(arr, query) {
  return arr.filter(function(el) {
    return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
  })
}
 }
console.log(filterItems(carNumbers, 'CL'))  // ['apple', 'grapes']
console.log(filterItems(carNumbers, 'CJ'))  // ['banana', 'mango', 'orange']

                               
 function registrationForAll(location,storeReg){

       if(location == 'Cape Town'){
		   return storeReg.startsWith('CA') 
	   }

	   else if(location == 'Paarl'){
		return storeReg.startsWith('CJ') 
	}
	else if(location == 'George'){
		return storeReg.startsWith('CAW')
	}
	else if(location == 'Stellebosch'){
		return storeReg.startsWith('CL')
	}
 } 



