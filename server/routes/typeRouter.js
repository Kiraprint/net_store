const typeController = require("../controllers/typeController")
const Router = require('express')
const router = new Router()

router.post('/', typeController.create)
router.get('/', typeController.getAll)
router.delete('/:id', typeController.getOne)

module.exports = router