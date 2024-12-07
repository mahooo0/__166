const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors'); // Import cors

dotenv.config();

const app = express();

// Enable CORS
app.use(
    cors({
        exposedHeaders: ['Content-Range'], // Expose the Content-Range header
    })
); // Use cors

// Middleware
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
const HomeHeroTitleRoutes = require('./routes/HomeHeroTitleRoutes');
const CanriesRouter = require('./routes/CanriesRouter');
const StatisticsTitleRouter = require('./routes/StatisticsTitleRouter.js');
const StatisticsRouter = require('./routes/StatisticsRouter.js');
const PartnersRouter = require('./routes/Partners.js');
const ServicesCategoryRouter = require('./routes/ServicesCategoryRouter.js');
const ServicesRouter = require('./routes/ServicesRouter');
const LoginRouter = require('./routes/Login');
const TranslationRouter = require('./routes/translationRouter');
const AvtoparkCategoryRouter = require('./routes/AvtoparkCountryRouter.js');
const AvtoparkRouter = require('./routes/AvtoparckRouter.js');
const MediaRouter = require('./routes/mediaRouter.js');
const HomeDiscountBanner = require('./routes/HomeDiscountBanner.js');
const AboutHeroRoter = require('./routes/AboutusHeroRouter.js');

//use routes
app.use('/api/home/hero/title', HomeHeroTitleRoutes);
app.use('/api/home/hero/cantries', CanriesRouter);
app.use('/api/statisticks/title', StatisticsTitleRouter);
app.use('/api/statisticks/', StatisticsRouter);
app.use('/api/partners', PartnersRouter);
app.use('/api/services/services-categories', ServicesCategoryRouter);
app.use('/api/services', ServicesRouter);
app.use('/api/translations', TranslationRouter);
app.use('/api/avtopark/categories', AvtoparkCategoryRouter);
app.use('/api/avtopark', AvtoparkRouter);
app.use('/api/media', MediaRouter);
app.use('/api/home/discount-banner', HomeDiscountBanner);
app.use('/login', LoginRouter);
app.use('/about', AboutHeroRoter);

// Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.error('MongoDB connection error:', error));

module.exports = app;
