import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TrainService } from 'src/app/service/train.service';
import { Ticket } from '../model/ticket';
import { Train } from '../model/train';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css'],
})
export class TicketFormComponent implements OnInit {
  trainId: number = 0;
  train: Train = new Train();
  newTicket: Ticket = new Ticket();
  constructor(
    private route: ActivatedRoute,
    private service: TrainService,
    private router: Router
  ) {}

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
        // console.log(data);
        this.train = data;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  onBuyTicket() {
    this.newTicket.number = this.train.number;
    this.newTicket.from = this.train.from;
    this.newTicket.departure = this.train.departure;
    this.newTicket.to = this.train.to;
    this.newTicket.arrival = this.train.arrival;
    this.newTicket.price = this.train.price;
    this.postTicket();
  }

  postTicket(): void {
    this.service.postTicket(this.trainId, this.newTicket).subscribe({
      next: (data: Ticket) => {
        console.log(data);
        this.goToTicketsList();
      },
      error: (err: any) => alert(JSON.stringify(err)),
    });
  }

  goToTicketsList() {
    this.router.navigate(['tickets']);
  }
}
