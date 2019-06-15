const userModel = require("./../model/user");
const errorHanlder = require("./../utils/error.handler");

class UserController {
	async add() {
		let users = [
			{
				name: "raju",
				city: "chennai",
				email: "raju3@gmail.com"
			}
		];

		try {
			let userInfo = await userModel.insertMany(users);
			return {
				status: "success",
				result: userInfo
			};
		} catch (error) {
			return {
				status: "error",
				error: errorHanlder.parseMongoError(error)
			};
		}
	}

	async fetch(searchString) {
		try {
			// return await userModel.find({ city: "Erode" });
			return await userModel.find({
				name: {
					$regex: searchString,
					$options: "i"
				}
			});
		} catch (error) {
			return {
				status: "error",
				error: errorHanlder.parseMongoError(error)
			};
		}
	}

	async update() {
		try {
			return await userModel.updateMany(
				{ city: "Erode" },
				{ city: "erode" }
			);
		} catch (error) {
			return {
				status: "error",
				error: errorHanlder.parseMongoError(error)
			};
		}
	}

	async delete() {
		try {
			return await userModel.deleteMany({ city: "erode" });
		} catch (error) {
			console.log("error", error);
			return {
				status: "error",
				error: errorHanlder.parseMongoError(error)
			};
		}
	}

	async aggregation() {
		try {
			// return await userModel.aggregate([
			// 	{
			// 		$project: {
			// 			city: 1
			// 		}
			// 	},
			// 	{
			// 		$group: {
			// 			_id: "$city",
			// 			count: { $sum: 1 }
			// 		}
			// 	}
			// ]);

			let result = await userModel.distinct("city");

			return { result: result };
		} catch (error) {
			return {
				status: "error",
				error: errorHanlder.parseMongoError(error)
			};
		}
	}
}

module.exports = new UserController();
