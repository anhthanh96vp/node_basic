import { sequelize } from "../databases/databases"
import Sequelize from "sequelize"
//Tạo  các trường và kiểu dữ liệu
export const List = sequelize.define(
	//connect tới database table lists
	"list",
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true
		},
		name: {
			type: Sequelize.STRING
		},
		priority: {
			type: Sequelize.TINYINT
		},
		description: {
			type: Sequelize.TEXT
		},
		duedate: {
			type: Sequelize.DATE
		}
	},
	{
		// không tự động tạo 2 trường updatedAt, createdAt (updatedAt, createdAt)
		timestamps: false
	}
)
