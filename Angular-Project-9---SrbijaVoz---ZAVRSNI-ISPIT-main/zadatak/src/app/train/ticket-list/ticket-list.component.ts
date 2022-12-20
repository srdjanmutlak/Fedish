import { Component, OnInit } from '@angular/core';
import { TrainService } from 'src/app/service/train.service';
import { Ticket } from '../model/ticket';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css'],
})
export class TicketListComponent implements OnInit {
  tickets: Ticket[] = [];
  params = {
    sort: 'departure',
    sortDirection: 'asc',
  };

  constructor(private service: TrainService) {}

  ngOnInit() {
    this.getTickets();
  }

  getTickets() {
    this.service.getTickets(this.params).subscribe({
      next: (data: Ticket[]) => {
        console.log(data);
        this.tickets = data;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  onCancel(id: number) {
    this.service.deleteTicket(id).subscribe((x) => {
      this.getTickets();
    });
  }
}
