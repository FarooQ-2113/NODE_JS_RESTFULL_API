const router = require('express').Router()
const simpleApiController = require('../controllers/simpleApiController')

router.get("/",simpleApiController.simpleGet)
router.post("/",simpleApiController.simplePost)
//  Add missing routes
router.put("/",simpleApiController.simplePut)
router.delete("/",simpleApiController.simpleDelete)


module.exports = router