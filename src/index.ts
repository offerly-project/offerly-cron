import { Scheduler } from "./cron/scheduler";

(async function () {
	await Scheduler.schedule();
})();
