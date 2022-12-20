import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TrainService } from 'src/app/service/train.service';
import { Train } from '../model/train';

@Component({
  selector: 'app-train-details',
  templateUrl: './train-details.component.html',
  styleUrls: ['./train-details.component.css'],
})
export class TrainDetailsComponent implements OnInit {
  trainId: number = 0;
  train: Train = new Train();
  constructor(private route: ActivatedRoute, private service: TrainService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.trainId = params['id'];
      this.getTrain();
      // console.log(this.trainId);
    });
  }

  getTrain() {
    this.service.getTrain(this.trainId).subscribe({
      next: (data: Train) => {
        console.log(data);
        this.train = data;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  returnArrival(arrival: Date) {
    if (arrival) {
      return arrival.getTime();
    } else {
      return '';
    }
  }
  returnDeparture(departure: Date) {
    if (departure) {
      return departure.getTime();
    } else {
      return '';
    }
  }
}
