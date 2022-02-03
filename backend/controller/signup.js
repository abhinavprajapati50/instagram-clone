import { signupuser } from "../modal/signupuser";


//Insert new student
export const  signUp = async (req, res) => {
    const { email, password, username } = req.body
    let resMessage;
    try {
        if (!email || !password || !username ) {
            console.log("invaluiddd");
            resMessage = "Invalid Credential"
            return;

        }
        const loggedInUser = await signupuser.create({ email: email, password: password, username: username })
        if (loggedInUser) {
            resMessage = "logged IN Successfull"
            return res.status(201).json({
                status: true,
                message: resMessage,
                data: { email, password, username }
            })

        } else {
            resMessage = "Invalid Credential!! Plz fill all the data"
            return res.status(201).json({
                status: false,
                message: resMessage,
                data: { email, password, username }
            })
        }
    } catch (error) {
        (err => {
            res.status(500).json({
                status: false,
                message: "Error occurred while creating the signup.",
            });
        });


    }
};