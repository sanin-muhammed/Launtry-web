const jwt = require("jsonwebtoken");

// Secret key for JWT
const JWT_SECRET = "userJWT";
const expiresIn = "3d";

exports.createJWT = async (data) => {
    console.log({ data });
    return jwt.sign(data, JWT_SECRET, { expiresIn });
};

exports.authentication = async (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    console.log({ token });
    if (!token || token === "null") {
        res.status(401).json({ error: true, status: false, message: "Please Login or Register" });
        return;
    }
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            res.status(401).json({ error: true, status: false, message: "Token Expired" });
            return;
        }
        console.log(decoded);
        // res.status(200).json({ error: false, status: true, message: "Access granted" });
        next();
    });
};
