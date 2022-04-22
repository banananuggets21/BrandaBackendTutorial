const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Schema to describe a car.
 */
let CarSchema = new Schema({
  /**
   * Name of this car
   */
  make: {
    type: String
  },
  /**
   * Model of car
   */
  model: {
    type: String
  },
  /**
   * Model year
   */
  modelYear: {
    type: Date
  },
  /**
   * Range of Car (or milage)
   */
  range: {
    type: Number
  },
  /**
   * Odometer
   */
  odometer: {
    type: Number
  },
  /**
   * Engine type
   */
  engineType: {
    type: String
  },
  /**
   * Car Name
   */
  displayName: {
    type: String
  },
  vin: {
    type: new mongoose.Types.ObjectId
  }
});

let Car = mongoose.model("Car", CarSchema);
module.exports = Car;