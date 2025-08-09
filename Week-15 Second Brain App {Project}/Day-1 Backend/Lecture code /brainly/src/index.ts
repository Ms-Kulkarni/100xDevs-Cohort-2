import express from 'express';
const app = express();


app.post("/api/v1/signup", async (req, res) => {
    const userName = req.body.userName;
    const password = req.body.password;

    try{
        await UserModel.create({
            userName,
            password,

        })
        res.json({
            message: "User signup success"
        })
    } catch (error) {
        res.status(400).json({message: "User already exists"});
    }

});

app.post("/api/v1/signin", async (req, res) => {
    const userName = req.body.userName;
    const password = req.body.password;

    const existingUser = await UserModel.findOne({userName,password});
    
        if(existingUser){
            const token = jwt.sign({id: existingUser._id}, JWT_SECRET);

            res.json({
                token
            });
        } else {
            res.status(403).json({
                message: "Invalid Credentials"
            })
        }    
});

app.post("/api/v1/signup", (req, res) => {
    
})


app.listen(3000, () => {
    console.log("Server is running on port 3000");
})