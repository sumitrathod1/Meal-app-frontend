import {
  Component,
  EventEmitter,
  Inject,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit, OnDestroy {
  bookingForm!: FormGroup;
  isFormVisible = false;
  private subscription: Subscription = new Subscription();

  campaignOne = new FormGroup({
    start: new FormControl(new Date()),
    end: new FormControl(new Date()),
  });

  campaignTwo = new FormGroup({
    start: new FormControl(new Date()),
    end: new FormControl(new Date()),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
