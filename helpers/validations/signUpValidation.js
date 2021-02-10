function signUpValidation(username, email, password, birthdate)
{
    let err = [];
    if (!username || typeof username === undefined || username === null)
    {
        err.push({
            text: "Invalid username"
        });
    }

    if (!email || typeof email === undefined || email === null)
    {
        err.push({
            text: "Invalid email"
        });
    }


    if (!password || typeof password === undefined || password === null)
    {
        err.push({
            text: "Invalid password"
        });
    }


    if (!birthdate || typeof birthdate === undefined || birthdate === null)
    {
        err.push({
            text: "Invalid birthdate"
        });
    }

    if (err.length > 0)
    {
        return err;
    }
}

module.exports = signUpValidation;
