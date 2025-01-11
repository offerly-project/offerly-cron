export const logJob = (cb: Function) => (job: string) => async () => {
	try {
		console.log(`Running job: ${job}`);
		await cb();
		console.log(`Job ${job} completed`);
	} catch (e) {
		console.log(`Job ${job} failed with error: ${e}`);
	}
};
