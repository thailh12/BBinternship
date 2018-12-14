const mongoose = require('mongoose');
const router = require('express').Router();
const Articles = mongoose.model('Articles');
const middleware = require('../middleware');

router.post('/', middleware.verify, (req, res) => {
    const {body} = req;
    if (!body.title) {
        return res.status(422).json({
            errors: {
                title: 'is required'
            }
        });
    }
    const token = req.headers.authorization;

    let info = middleware.decode(token);
    if (!body.body) {
        return res.status(422).json({
            errors: {
                body: 'is required'
            }
        });
    }

    const finalArticle = new Articles(body);
    finalArticle.author = info.username;
    finalArticle.save();
    res.json('done');
});

router.get('/', (req, res, next) => {
    return Articles.find()
        .sort({createdAt: 'descending'})
        .then(articles =>
            res.json({articles: articles.map(article => article.toJSON())})
        )
        .catch(next);
});


router.get('/:username', (req, res, next) => {
        Articles.find({author: req.params.username})
            .then(article => {
                res.json(article);
            })
            .catch(e => res.json(e)
            );
    }
);

router.delete('/:id', middleware.verify, (req, res, next) => {
    const token = req.headers.authorization;

    let info = middleware.decode(token);

    return Articles.findOne({_id: req.params.id})
        .then((doc) => {
            if (info.username === doc.author) {
                doc.remove()
            }
        })
        .then(() => res.sendStatus(200))
        .catch(next);
});

module.exports = router;
