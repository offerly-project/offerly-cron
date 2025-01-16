import { Agenda } from "agenda";
import { env } from "../config";

export enum JobsEn {
	EXPIRE_OFFERS = "Expire Offers",
}

export class Scheduler {
	static agendaInstance = new Agenda({
		db: { address: env.AGENDA_URL },
	});

	private static _defineJobs = async () => {};

	private static _scheduleJobs = async () => {};

	static schedule = async () => {
		await this._defineJobs();
		await this._scheduleJobs();
		await this.agendaInstance.start();
	};
}
