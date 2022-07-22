function registration(existingReg){
    let carReg = existingReg || [];


function numberplates(){
    return carReg
}

function pushedRegNo(reg){
    if(reg){
      if(reg.includes(carReg)){
          carReg.push(reg);
      }
      else {
          return 'The registration number already entered'
      }
    }
    
}

    function carRegNumber(regNo,location){
        pushedRegNo(regNo)
        if(location == 'All'){
        return pushedRegNo(regNo)
        }
        else if(location == 'Cape Town'){
            return 'CA'
        }
        else if(location == 'Paarl'){
            return 'CJ'
        }
        else if(location == 'George'){
            return 'CAW'
        }
        else if(location == 'Stellebosch'){
            return 'CL'
        }
    }

return{
    carRegNumber,
    pushedRegNo,
    numberplates
}
}