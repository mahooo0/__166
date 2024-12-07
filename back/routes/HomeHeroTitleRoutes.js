const express = require('express');
const router = express.Router();
const HeroTitle = require('../models/Home_hero_title');

// Get all items
// router.get('/', async (req, res) => {
//     try {
//         // Fetch the HeroTitle data from the database
//         const heroTitles = await HeroTitle.find();

//         // Get the requested language from the 'Accept-Language' header (default to 'en' if no header is provided)
//         const language = req.headers['accept-language'];
//         if (language) {
//             res.status(200).json(language);
//         }

//         // if (language) {
//         //     // Map the titles to include the localized version based on the language
//         //     const localizedTitles = heroTitles.map((item) => {
//         //         return {
//         //             ...item.toObject(), // Convert mongoose document to plain object
//         //             title: item.title[language] || item.title['en'], // Fallback to 'en' if the language is not found
//         //         };
//         //     });
//         //     return res.json(localizedTitles); // Return localized titles
//         // }
//         res.json(heroTitles); // Return the entire titles object if no language header is provided
//     } catch (error) {
//         // Return an error message if something goes wrong
//         res.status(500).json({ message: 'Error fetching hero titles', error });
//     }
// });
router.get('/', async (req, res) => {
    try {
        const herotitle = await HeroTitle.find();
        const languige = req.headers['language'];
        console.log('languige:', languige);
        if (languige) {
            const HerobyLang = { ...herotitle[0]._doc };
            HerobyLang.title = HerobyLang.title[`${languige}`];
            // HerobyLang['title'] = HerobyLang[languige];
            return res.json(HerobyLang);
        }
        return res.json(herotitle);
    } catch (error) {
        return res.status(500);
    }
});
// Create a new item
router.post('/', async (req, res) => {
    const { id } = req.params;
    const { title } = req.body;

    try {
        const updatedHeroTitle = await HeroTitle.findByIdAndUpdate(
            '67338bead7e9333cf7026d7c',
            { title },
            { new: true, runValidators: true }
        );

        if (!updatedHeroTitle) {
            return res.status(404).json({ message: 'HeroTitle not found' });
        }

        res.status(200).json(updatedHeroTitle);
    } catch (error) {
        res.status(400).json({ message: 'Error updating HeroTitle', error });
    }
});

module.exports = router;
