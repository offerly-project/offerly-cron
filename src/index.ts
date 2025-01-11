import { connectToMongo } from "./config";
import { Scheduler } from "./cron/scheduler";

(async function () {
	await connectToMongo();
	await Scheduler.schedule();
})();
