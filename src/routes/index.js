import { Router } from 'express'
const router = Router()

router.get('/', (req, res) => res.render('index', {title: 'Primer Sitio con Nodejs'}))

router.get('/about', (req, res) => res.render('about', {title: 'A cerca de'}))

router.get('/contact', (req, res) => res.render('contac', {title: 'Contactanos'}))

export default router