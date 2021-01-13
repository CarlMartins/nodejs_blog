const express = require('express');

const ValidateSignUp = (req, res, next) =>
{
    let username = req.body.username;
    if (username.length === 0)
    {
        console.log("senha invalida");
    }
    next();
}

module.exports = ValidateSignUp;