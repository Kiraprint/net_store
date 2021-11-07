const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter.js')
const typeRouter = require('./typeRouter.js')
const deviceRouter = require('./deviceRouter.js')
const brandRouter = require('./brandRouter.js')


router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/device', deviceRouter)
router.use('/brand', brandRouter)

module.exports = router