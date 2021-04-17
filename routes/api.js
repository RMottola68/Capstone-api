

var express = require('express');
var router = express.Router();
const {Category, Question, Answer, User} = require('../lib/models');

router.get(
    '/profile',

    async (req, res, next) => {
        
        let u = await User.findOne({where: {email: req.user.email}});

        res.json( {
            message: 'Entry Permitted',
            user: u.id,
            token: req.query.token
        })
    }

    // async (req, res, next) => {
    //     console.log('req.user is', req.user);
    //     // write code like find the user where the email id is this
    //     let u = await User.findOne({where: {email: req.user.email}});

    //     res.json({
    //         message: 'You made it to the secure route',
    //         // user: req.user,
    //         user: u,
    //         token: req.query.token
    //     })
    // }
);

router.get(
    '/users/me',

    async (req, res, next) => {

        let u = await User.findOne({where: {email: req.user.email}});

        res.json( {
            message: 'Entry Permitted',
            userId: u.id,
            token: req.query.token
        })
    }
);

router.get('/categories', async function(req, res, next) {
    let categories = await Category.findAll({});
    res.json(categories);
});

//create a question
router.post('/categories/:categoryId/questions', async function(req, res, next) {
    let body = req.body;
    body.categoryId = req.params.categoryId;
    let question = await Question.create(body);
    res.json(question);
});

// router.get('/categories/:categoryId/questions', async function(req, res, next) {
router.get('/categories/:categoryId/users/:userId/questions', async function(req, res, next) {
    console.log('req.params.userId', req.params.userId)
    let questions = await Question.findAll({where: {categoryId: req.params.categoryId}, include: [{model: Answer}]});
    res.json(questions);
});

//create an answer
router.post('/categories/:categoryId/questions/:questionId/answers', async function(req, res, next) {
    let body = req.body;
    body.questionId = req.params.questionId;
    let answer = await Answer.create(body);
    res.json(answer);
});

router.get('/categories/:categoryId/questions/:questionId/answers', async function(req, res, next) {
    let answers = await Answer.findAll({where: {questionId: req.params.questionId}});
    res.json(answers);
});

//Delete a question
router.delete('/categories/:categoryId/questions/:questionId', async function(req, res, next) {
    Question.destroy({where: {id: req.params.questionId}});
    res.json({success:true});
});

module.exports = router;