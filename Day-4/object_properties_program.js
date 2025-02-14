let car={
        name:"Lambo",
        engine:"V10",
        variant:"Petrol"
    }
    
    console.log(car);
    //Adding one more property
    car.model="Hurracan";
    console.log(car);
    //Updating value of variant key here
    car.variant="Diesel";
    console.log(car);
    //deleting property here using delete keyword
    delete car.model;
    console.log(car);