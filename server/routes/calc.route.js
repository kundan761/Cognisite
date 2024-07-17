const express = require('express');
const { CalculateModel } = require('../model/calculation.model');

const calcRouter = express.Router();
calcRouter.get('/result', async(req, res) =>{
    try {
      const user = await CalculateModel.find();
      res.status(200).send(user);
    } catch (err) {
      res.status(400).send({ error: err });
    }
});

calcRouter.post('/calculate', async (req, res) => {
    const { length, width, wallHeight, numMasons, workPerDay, startDate } = req.body;

    // Perimeter calculation using wallHeight
    const perimeter = 2 * (length + width) - width + 3 * wallHeight;  // 3 sides with wallHeight compound

    // Time calculation
    const totalWork = perimeter;
    const daysRequired = Math.ceil(totalWork / (numMasons * workPerDay));

    // End date calculation
    let endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + daysRequired);

    // Save to database
    const calculation = new CalculateModel({
        length,
        width,
        wallHeight,
        numMasons,
        workPerDay,
        startDate,
        perimeter,
        daysRequired,
        endDate: endDate.toDateString()
    });
    await calculation.save();

    res.status(200).json({
        perimeter,
        numMasons,
        daysRequired,
        endDate: endDate.toDateString()
    });
});


module.exports = {calcRouter};