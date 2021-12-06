import{ Router } from 'express'

// firstController
import { firstController } from './Controller/First.Controller'

export const router: Router = Router()

// Routers
router.get('/', firstController.home)
router.post('/users', firstController.users)
