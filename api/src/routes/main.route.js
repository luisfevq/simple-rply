const express = require('express');
const Request = require("request");
const jwt = require('jsonwebtoken');

var fire = require('./../services/firebase');
var auth = fire.auth();

const { verificarToken } = require('./../middlewares/autentication');

const app = express();


app.get('/product/:id', verificarToken, (req, res) => {
    Request.get("https://simple.ripley.cl/api/v2/products/" + req.params.id, (error, response, body) => {
        if (error) {
            return console.dir(error);
        }
        res.json({
            ok: req.ok,
            err: req.err,
            token : req.tokenRefresh,
            usuario: req.usuario,
            producto: JSON.parse(body)
        });
    });
});

app.get('/login/:email/:pass', (req, res) => {

    var email = req.params.email;
    var password = req.params.pass;

    auth.signInWithEmailAndPassword(email, password)
        .then((result) => {
            let token = jwt.sign({
                datosUser : email
            }, process.env.SEED, { expiresIn: process.env.CADUCIDAD_TOKEN });
            res.json({
                ok: true,
                usuario: email,
                token,
            });
        }, (reason) => {
            if (reason.code === 'auth/user-not-found') {
                res.json({
                    ok: false,
                    mensaje: 'Usuario no se encuentra registrado'
                });
            }
        });
});

app.get('/register/:email/:pass', (req, res) => {

    var email = req.params.email;
    var password = req.params.pass;

    auth.createUserWithEmailAndPassword(email, password)
        .then((result) => {
            let token = jwt.sign({
                datosUser : email
            }, process.env.SEED, { expiresIn: process.env.CADUCIDAD_TOKEN });
            res.json({
                ok: true,
                usuario: email,
                token,
            });
        }, (reason) => {
            if (reason.code === 'auth/email-already-in-use') {
                res.json({
                    ok: false,
                    mensaje: 'Usuario ya registrado'
                });
            }
        });
});


module.exports = app;
