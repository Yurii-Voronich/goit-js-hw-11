import flatpickr from 'flatpickr';
import iziToast from 'izitoast';

const startButtonEl = document.querySelector('.start-btn');
const inputFiled = document.querySelector('#datetime-picker');
let userData = null;

startButtonEl.addEventListener('click', clickHandler);

startButtonEl.disabled = true;

function clickHandler(e) {
  timer.start();
  startButtonEl.disabled = true;
  timer.deadline = userData;
  inputFiled.disabled = true;
}

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userData = selectedDates[0];
    if (userData < Date.now()) {
      iziToast.error({
        position: 'topRight',
        title: 'Error',
        message: 'Please choose a date in the future',
      });
    } else {
      startButtonEl.disabled = false;
    }
  },
});

const timer = {
  refs: {
    days: document.querySelector('.js-days'),
    hours: document.querySelector('.js-hours'),
    minutes: document.querySelector('.js-minutes'),
    seconds: document.querySelector('.js-seconds'),
  },
  deadline: null,

  start() {
    this.intervalID = setInterval(() => {
      const diff = this.deadline - Date.now();

      if (this.deadline <= Date.now()) {
        this.stop();
        inputFiled.disabled = false;
        return;
      }
      let { days, hours, minutes, seconds } = this.convertMs(diff);
      this.refs.days.textContent = this.addLeadingZero(days);
      this.refs.hours.textContent = this.addLeadingZero(hours);
      this.refs.minutes.textContent = this.addLeadingZero(minutes);
      this.refs.seconds.textContent = this.addLeadingZero(seconds);
    }, 1000);
  },
  stop() {
    clearInterval(this.intervalID);
  },
  convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  },
  addLeadingZero(v) {
    return v.toString().padStart(2, '0');
  },
};
