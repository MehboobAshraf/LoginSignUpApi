const User = require("./user.model");
const { authenticate, signToken } = require("./user.service");

// Register User
exports.register = (req, res) => {
    User.findOne({email: req.body.email}).then(user => {
        if (!user) {
            User.create(req.body).then(user => {
                res.json(user._id);
            }).catch(err => {
                res.status(422).json({ message: "Something went wrong." });
            });
        }
        else if(user) return res.status(422).json({message: 'This Email Already Exist'})
    })    
};

// Login User
exports.login = (req, res) => {
    User.findOne({ email: req.body.email }).then(user => {
        if (!user)
            return res.status(404).json({ message: "This email is not registered." });
        if (!authenticate(req.body.password, user.password))
            return res.status(403).json({ message: "This password is not correct." });
        let token = signToken(user._id);
        res.status(200).json({token: token});
    });
};