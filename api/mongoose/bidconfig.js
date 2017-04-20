/**
 * Created by Owner on 4/18/2017.
 */
"use strict";
var mongoose = require("mongoose");
var bidConfigSchema = new mongoose.Schema({
    // id: Number,
    name: String,
    price: Number,
    datetimes: {
        updated: Date,
        last_excuted: Date
    },
    tags: []
}, { collection: "bidconfigs" });
var Bidconfig = mongoose.model("IBidconfig", bidConfigSchema);
module.exports = Bidconfig;
//# sourceMappingURL=bidconfig.js.map