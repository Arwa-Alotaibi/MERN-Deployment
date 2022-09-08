
const petController = require('../controllers/pet.controller');

module.exports=app=>{

    app.get("/api", petController.GetAllpet);
    app.get("/api/pets/:idd", petController.Getpet);
    app.post("/api/pets/new" , petController.createpet);

    app.delete('/api/delete/:id',petController.Deletepet); 

    app.put('/api/pets/:id/edit', petController.Updatepet);


    

};