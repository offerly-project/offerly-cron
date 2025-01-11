import { Agenda } from "agenda";
import { env } from "../config";
import { Jobs } from "./jobs";

export enum JobsEn {
	EXPIRE_OFFERS = "expire offers",
}

export class Scheduler {
	static agendaInstance = new Agenda({
		db: { address: env.AGENDA_URL },
	});

	private static _scheduleExpireOffers = async () => {
		this.agendaInstance.define(JobsEn.EXPIRE_OFFERS, Jobs.expireOffers);
	};

	private static _defineJobs = async () => {
		await this._scheduleExpireOffers();
	};

	private static _scheduleJobs = async () => {
		await this.agendaInstance.every("5 seconds", JobsEn.EXPIRE_OFFERS);
	};

	static schedule = async () => {
		await this._defineJobs();
		await this.agendaInstance.start();
		this._scheduleJobs();
	};
}
