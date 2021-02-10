const sanitizer = require('sanitizer');

// Middleware qui permet de filtrer le req.body pour le sanitize
const sanitizeBody = (req, res, next) => {
    // On génère un tableau de keys pour pouvoir boucler sur les valeurs du body
    const bodyKeys = Object.keys(req.body);

    bodyKeys.forEach(key => {
        // On ne veut sanitize que les strings
        if (typeof req.body[key] === 'string') {
            req.body[key] = sanitizer.escape(req.body[key]);
        }
    });

    next();
};

module.exports = sanitizeBody;