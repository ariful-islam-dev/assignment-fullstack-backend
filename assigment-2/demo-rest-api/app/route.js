const { readFile } = require('../utils/db');

const router = require('express').Router();

router.get('/health', (_req, res)=>{
    res.status(200).json({
        message:"Health is good and ok"
    })
})


router.get('/', (_req, res)=>{
    const data = readFile();
    res.status(200).json({data: data})
})

router.use("/", require('../route/user'))



module.exports = router;