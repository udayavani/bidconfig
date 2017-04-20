/**
 * Created by Owner on 4/18/2017.
 */

import * as express from "express";
import BidConfig = require("./mongoose/bidconfig");

export function bidconfigs(app:express.Express) {


  /* Read */
  app.get('/api/bidconfig', function (req, res) {

    let sortObject = {};
    sortObject[req.query.sortBy] = req.query.sortDir;

    let tagArrayFilter = [];
    tagArrayFilter.push(req.query.tagVal);

    let filterObject = {"tags":{'$in' : tagArrayFilter}};

    let q = BidConfig.find(filterObject).sort(sortObject).limit(req.query.limit);
    q.exec(function (err, bidconfigs) {
      if (err) {
        res.json({info: 'error during find bidconfigs', error: err});
      };
      res.json({info: 'bidconfigs found successfully', data: bidconfigs});
    });
  });
};




