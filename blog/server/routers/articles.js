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

// router.param('username', (req, res, next) => {
//     return Articles.find({where: {req.params.username}}, (err, article) => {
//         if (err) {
//             return res.sendStatus(404);
//         } else if (article) {
//            res.json(article);
//         }
//     })
// });

router.get('/:username', (req, res, next) => {
        console.log(req.params);
         Articles.find({author: req.params.username})
            .then(article => {res.json(article); console.log(article)})
            .catch(e => res.json(e)
            );
    }
);
router.patch('/:id', (req, res, next) => {
    const {body} = req;

    if (typeof body.title !== 'undefined') {
        req.article.title = body.title;
    }

    if (typeof body.author !== 'undefined') {
        req.article.author = body.author;
    }

    if (typeof body.body !== 'undefined') {
        req.article.body = body.body;
    }

    return req.article
        .save()
        .then(() => res.json({article: req.article.toJSON()}))
        .catch(next);
});

router.delete('/:id', middleware.verify, (req, res, next) => {
    return Articles.findOneAndDelete(req.article._id)
        .then(() => res.sendStatus(200))
        .catch(next);
});

module.exports = router;
