const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Schema to describe a ship.
 */
let CarSchema = new Schema({
  /**
   * Name of this Ship
   */
  make: {
    type: String
  },
  /**
   * Ship's top speed in kts.
   */
  model: {
    type: String
  },
  /**
   * When this Ship was designed.
   */
  modelYear: {
    type: Date
  },
  /**
   * When this Ship was launched.
   */
  range: {
    type: Number
  },
  /**
   * Descriptor of ship's main battery guns.
   */
  odometer: {
    type: Number
  },
  /**
   * Descriptor of the ship's secondary battery guns.
   */
  engineType: {
    type: String
  },
  /**
   * Ship's belt armor in mm.
   */
  displayName: {
    type: String
  },
  vin: {
    type: new mongoose.Types.ObjectId
  },
  armor: {
    value: {type: Number},
    unit: {type: String, default: "mm"}
  }
});

let Car = mongoose.model("Car", CarSchema);
module.exports = Car;