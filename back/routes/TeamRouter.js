const express = require('express');
const upload = require('../multer');
const Team = require('../models/Team');
const router = express.Router();
// Предполагается, что teamSchema определен выше

// Создание нового члена команды
router.post('/', upload.single('image'), async (req, res) => {
    // if (!req.body.file) {
    //     res.status(400).json({ message: 'no image' });
    // }
    const image = `${req.protocol}://${req.get('host')}/${req.file.path}`;
    const teamMember = new Team({
        image: image,
        name: req.body.name,
        position: req.body.position,
    });
    try {
        await teamMember.save();
        res.status(201).send(teamMember);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Получение всех членов команды
router.get('/', async (req, res) => {
    try {
        const teamMembers = await Team.find();
        res.json(teamMembers);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка сервера' });
    }
});

// Обновление члена команды по ID
router.put('/:id', upload.single('image'), async (req, res) => {
    try {
        const teamMember = await Team.findById(req.params.id);
        if (!teamMember) {
            return res.status(404).json({ message: 'Член команды не найден' });
        }
        console.log(req.body.name);
        if (req.body.name) teamMember.name = req.body.name;
        if (req.body.position) teamMember.position = req.body.position;
        if (req.file) {
            const image = `${req.protocol}://${req.get('host')}/${
                req.file.path
            }`;
            teamMember.image = image;
        }
        await teamMember.save();
        res.status(200).json(teamMember);
    } catch (error) {
        res.status(400).json({
            message: 'Ошибка при обновлении члена команды',
            error: error.message,
        });
    }
});

// Удаление члена команды по ID
router.delete('/:id', async (req, res) => {
    try {
        const teamMember = await Team.findByIdAndDelete(req.params.id);
        if (!teamMember) {
            return res.status(404).json({ message: 'Член команды не найден' });
        }
        res.status(200).json({
            message: 'Член команды успешно удален',
            teamMember,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Ошибка при удалении члена команды',
            error: error.message,
        });
    }
});

// ... существующий код ...
module.exports = router;
