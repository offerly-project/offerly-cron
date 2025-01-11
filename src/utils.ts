export const logJob = (cb: Function) => (job: string) => async () => {
	try {
		console.group(`Job: ${job}`);
		console.log(`Starting job: ${job}`);
		await cb();
		console.log(`Job ${job} completed successfully`);
	} catch (e) {
		console.error(`Job ${job} failed with error:`, e);
	} finally {
		console.groupEnd();
	}
};
