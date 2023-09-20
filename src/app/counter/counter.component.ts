import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  public secondsFlip: boolean = false;
  public minutesFlip: boolean = false;
  public hoursFlip: boolean = false;
  public daysFlip: boolean = false;
  public seconds: number = 0
  public minutes: number = 0
  public hours: number = 0
  public days: number = 0
  public currentSeconds: number = 0
  public currentMinutes: number = 0
  public currentHours: number = 0
  public currentDays: number = 0
  constructor() {
    setInterval(() => {
      const timeRemaining = new Date("2023-10-31T23:59:59").getTime() - new Date().getTime();
      this.days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      // Check if any value has changed
      this.secondsFlip = this.currentSeconds !== this.seconds;
      this.minutesFlip = this.currentMinutes !== this.minutes;
      this.hoursFlip = this.currentHours !== this.hours;
      this.daysFlip = this.currentDays !== this.days;

      // Update current values
      this.currentSeconds = this.seconds;
      this.currentMinutes = this.minutes;
      this.currentHours = this.hours;
      this.currentDays = this.days;
    }, 1000);
  }
}
