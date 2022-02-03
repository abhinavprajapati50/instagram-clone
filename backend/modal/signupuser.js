import { Sequelize } from "sequelize/dist";
import sequelize from "../db/sequelize";


export const signupuser = sequelize.define("user", {
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    username: {
        type: Sequelize.STRING
    }
});

// export default signupuser;