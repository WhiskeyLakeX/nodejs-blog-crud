const express = require('express');
const router = express.Router({
    caseSensitive: false,
});

const siteController = require('../app/controllers/SiteController');

router.get('/introduction', siteController.introduction);
router.get('/search', siteController.search);
router.get('/', siteController.index);

module.exports = router;
