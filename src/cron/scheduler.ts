import { Agenda } from "agenda";
import { env } from "../config";
import { logJob } from "../utils";
import { Jobs } from "./jobs";

export enum JobsEn {
	EXPIRE_OFFERS = "Expire Offers",
}

export class Scheduler {
	static agendaInstance = new Agenda({
		db: { address: env.AGENDA_URL },
	});

	private static _scheduleExpireOffers = async () => {
		this.agendaInstance.define(
			JobsEn.EXPIRE_OFFERS,
			logJob(Jobs.expireOffers)(JobsEn.EXPIRE_OFFERS)
		);
	};

	private static _defineJobs = async () => {
		await this._scheduleExpireOffers();
	};

	private static _scheduleJobs = async () => {
		await this.agendaInstance.every("15 seconds", JobsEn.EXPIRE_OFFERS);
	};

	static schedule = async () => {
		await this._defineJobs();
		await this._scheduleJobs();
		await this.agendaInstance.start();
	};
}
