// import sequelize, module giúp connect đến database
import Sequelize from "sequelize"

//connect đến database postgres với user admin pass admin
export const sequelize = new Sequelize("postgres", "admin", "admin", {
	host: "localhost",
	dialect: "postgres",
	operatorsAliases: false,
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
})
export const Op = Sequelize.Op
// Or you can simply use a connection uri
// export const sequelize = new Sequelize('postgres://postgres:123456@localhost:5432/postgres');
