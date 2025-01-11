import { db } from "../config";

export class Jobs {
	public static expireOffers = async () => {
		const date = new Date();

		await db.collection("offers").updateMany(
			{
				expiry_date: { $lt: date },
				status: { $ne: "disabled" },
			},
			{
				$set: { status: "disabled" },
			}
		);
	};
}
