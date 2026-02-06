class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}
	addClock(time, paramCallback) {
		if (!time || !paramCallback) {
			throw new Error('Отсутствуют обязательные аргументы');
		}

		if (this.alarmCollection.some((a) => a.time === time) !== -1) {
			console.warn('Уже присутствует звонок на это же время');
			return;
		}

		this.alarmCollection.push({
			callback: paramCallback,
			time: time,
			canCall: true,
		});
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(
			(item) => item.time !== time,
		);
	}

	getCurrentFormattedTime() {
		const now = new Date();
		const hours = String(now.getHours()).padStart(2, '0');
		const minutes = String(now.getMinutes()).padStart(2, '0');
		return `${hours}:${minutes}`;
	}

	start() {
		if (this.intervalId) {
			return;
		}

		this.intervalId = setInterval(() => {
			const currentTime = this.getCurrentFormattedTime();
			this.alarmCollection.forEach((alarm) => {
				if (currentTime === alarm.time && alarm.canCall) {
					alarm.canCall = false;
					alarm.callback();
				}
			});
		}, 1000);
	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach((item) => {
			item.canCall = true;
		});
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}
