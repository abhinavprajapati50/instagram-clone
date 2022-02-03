import { Sequelize } from "sequelize/dist";




export const sequelize = new Sequelize('insta-clone', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
})


