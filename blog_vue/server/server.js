const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const cors = require('cors');


const jwt = require('jsonwebtoken');

const SECRET_KEY = 'superchavepoderosa';

const mongoose = require('mongoose');

mongoose.connect('mongodb://marcos:76849912Ma@ds041337.mlab.com:41337/blog_vue');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const Post = require('./models/post');
const User = require('./models/user');

const router = express.Router();

// Rotas
// app.use('/', express.static(__dirname + '../'));
router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  console.log(`${req.method}  ${req.url} with ${JSON.stringify(req.body)}`);
  next();
});
const auth = (req, res, next) => {
  const token = req.body.token || req.query.token || req.headers['x-access-token'];
  if (token) {
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(403).send({
          success: false,
          message: 'Access denied',
        });
      }
      req.decoded = decoded;
      return next();
    });
  } else {
    return res.status(403).send({
      success: false,
      message: 'Access denied',
    });
  }
};


// simple GET /teste
router.get('/', (req, res) => {
  res.json({ message: 'hello World' });
});

router.route('/users')
  .get(auth, (req, res) => {
    User.find((err, users) => {
      if (err) {
        res.send(err);
      }
      return res.json(users);
    });
  }).post((req, res) => {
    const user = new User();
    user.name = req.body.name;
    user.login = req.body.login;
    user.password = req.body.password;

    user.save((err) => {
      if (err) {
        res.send(err);
      }
      res.json(user);
    });
  });

router.route('/login')
  .post((req, res) => {
    if (req.body.isNew) {
      User.findOne({ login: req.body.login }, 'name')
        .exec((err, user) => {
          if (err) {
            res.send(err);
          }
          if (user != null) {
            res.status(400).send('Login existente');
          } else {
            const newUser = new User();
            newUser.name = req.body.name;
            newUser.login = req.body.login;
            newUser.password = req.body.password;
            newUser.save((errSave) => {
              if (errSave) {
                res.send(errSave);
              }
              if (user != null) {
                const token = jwt.sign(newUser, SECRET_KEY, { expiresIn: 86400 });
                res.json({ user: newUser, token });
              } else {
                res.status(400).send('Login/Senha incorretos');
              }
            });
          }
        });
    } else {
      User.findOne({
        login: req.body.login,
        password: req.body.password,
      }, 'name')
        .exec((err, user) => {
          if (err) {
            return res.send(err);
          }
          if (user != null) {
            const token = jwt.sign({ user }, SECRET_KEY, { expiresIn: 86400 });
            res.json({ user, token });
          } else {
            return res.status(400).send('Login/Senha incorretos');
          }
        });
    }
  });

router.route('/posts/:post_id?')
  .get((req, res) => {
    Post
      .find()
      .sort([['date', 'descending']])
      .populate('user', 'name')
      .exec((err, posts) => {
        if (err) {
          res.send(err);
        } else {
          res.json(posts);
        }
      });
  })
  .post(auth, (req, res) => {
    const post = new Post();
    const { title, text, user } = req.body;
    post.title = title;
    post.text = text;
    post.user = user._id;

    if (post.title == null) {
      res.status(400).send('Título não pode ser nulo.');
    }

    post.save((err) => {
      if (err) {
        res.send(err);
        res.json(post);
      } else {
        res.send(post);
      }
    });
  })
  .delete(auth, (req, res) => {
    Post.remove({
      _id: req.params.post._id,
    }, (err) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Successfully deleted' });
    });
  });

app.use('/api', router);

// start server
const port = process.ENV || 9000;
app.listen(port);
console.log('Listen: ' + port);
