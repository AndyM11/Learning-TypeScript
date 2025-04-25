"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.send('hola mundo');
});
router.post("/", (req, res) => {
    const { name } = req.body;
    console.log(name);
    res.send("ok");
});
exports.default = router;
//# sourceMappingURL=index.js.map