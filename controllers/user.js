export const createUser = (req, res, next) => {
    console.log(req.file.path);
    res.json({message: "user created", name: req.body, image:`${req.file.path}`});
}