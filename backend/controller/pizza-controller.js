import PizzaModel from "../models/pizza-models.js"

export const getPizza = async (req, res) => {
    const shallPopulate = req.query.populate; 
    const personId = req.params.id;
  
    try {
  
      let person;
  
      if(shallPopulate  === "true") { // wir erhalten vom Client String => daher true in Anführungsstrichen
        person = await PizzaModel
          .findById(personId)
          .populate("favoriteWines");
      } else {
        person = await PersonModel
          .findById(personId);
      }
  
      
      
      console.log("person.firstName", person.firstName); 
      // hier kann ich auf das virtuelle Feld "firstName" zugreifen
      // obwohl dieses nicht in der Datenbank exisitert 
      // (deswegen bezeichnet man es als virtuell)
      
      console.log("person", person); 
      // hier wird das virtuelle Feld nicht angezeigt,
      // da ich es nicht explizit mit dem . Operator auswähle
  
      // res.json(person);   
      res.json(person);   
     
    } catch (error) {
      res.send(error.message)
    }
  
  }