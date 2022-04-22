const express = require("express");
const router = express.Router();
let Ship = require("../models/Ship");

/**
 * tell Express.js that when it receives a POST request at the URL /newShip/, to do this code.
 */
router.patch("/updateShip", function(req, res){
  // look up documents in MongoDB by name.
  Ship.findOneAndUpdate({name: req.body.name}, {launched: req.body.launched}, {new: true}, function(error,doc){
    // if there was an error
    if(error){
      console.error("Error finding ship",error);
      res.status(500).send(error);
    }
    // if no document was found
    else if(!doc){
      console.error("Error saving new ship",error);
      res.status(500).send(error);
    }
    // a document was found, return it instead.
    else{
      res.send(doc);
    }
  });
});

module.exports = router;