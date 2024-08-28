"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twitRouter = void 0;
const express_1 = require("express");
const twit_schema_1 = require("./twit.schema");
const twit_service_1 = require("./twit.service");
//Controllers need only for handling requests and responses + validation
//All logic should be in services
const router = (0, express_1.Router)();
router.get('/', async (req, res) => {
    try {
        const twits = await twit_service_1.twitService.getAll();
        res.status(200).json(twits);
    }
    catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
});
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            res.status(400).json({ message: 'Id is required' });
        }
        const twits = await twit_service_1.twitService.getOne(Number(id));
        return res.status(200).json(twits);
    }
    catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
});
router.post('/', async (req, res) => {
    const newTwit = req.body;
    const validation = await twit_schema_1.twitSchema.safeParse(newTwit);
    if (!validation.success) {
        return res.status(400).json({ message: validation.error.message });
    }
    try {
        const twits = await twit_service_1.twitService.create(newTwit);
        res.status(201).json(twits);
    }
    catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
});
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const newTwit = req.body;
        const validation = twit_schema_1.twitSchema.safeParse(newTwit);
        if (!id) {
            return res.status(400).json({ message: 'Id is required' });
        }
        if (!validation.success) {
            return res.status(400).json({ message: validation.error.message });
        }
        const twits = await twit_service_1.twitService.update(Number(id), newTwit);
        res.status(200).json(twits);
    }
    catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
});
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: 'Id is required' });
        }
        const twits = await twit_service_1.twitService.delete(Number(id));
        res.status(200).json(twits);
    }
    catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
});
exports.twitRouter = router;
