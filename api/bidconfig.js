/**
 * Created by Owner on 4/18/2017.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BidConfig = require("./mongoose/bidconfig");
function bidconfigs(app) {
    /* Read */
    app.get('/api/bidconfig', function (req, res) {
        var sortObject = {};
        sortObject[req.query.sortBy] = req.query.sortDir;
        var tagArrayFilter = [];
        tagArrayFilter.push(req.query.tagVal);
        var filterObject = { "tags": { '$in': tagArrayFilter } };
        var q = BidConfig.find(filterObject).sort(sortObject).limit(req.query.limit);
        q.exec(function (err, bidconfigs) {
            if (err) {
                res.json({ info: 'error during find bidconfigs', error: err });
            }
            ;
            res.json({ info: 'bidconfigs found successfully', data: bidconfigs });
        });
    });
}
exports.bidconfigs = bidconfigs;
;
//# sourceMappingURL=bidconfig.js.map