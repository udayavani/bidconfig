/**
 * Created by Owner on 4/18/2017.
 */


import * as mongoose from "mongoose";
import {IBidconfig} from "../../public/app/model/IBidconfig";

interface IBidconfigModel extends IBidconfig, mongoose.Document {}

let bidConfigSchema = new mongoose.Schema({
 // id: Number,
  name:String,
  price:Number,
  datetimes:{
  updated: Date,
  last_excuted:Date
},
tags:[]
},{collection:"bidconfigs"});

let Bidconfig = mongoose.model<IBidconfigModel>("IBidconfig", bidConfigSchema);

export = Bidconfig;







