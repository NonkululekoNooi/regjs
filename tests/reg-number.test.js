

describe("Registrations from Cape Town", function(){
    it("it should return the registration from Cape Town",function(){
    let createGreets = registration('existingNames');
    let message =createGreets.carRegNumber('Cape Town')
  
    assert.equal(message,carRegNumber('CA'))
   
    
    })
})

