import { Component, OnInit, Pipe } from '@angular/core';
import { TrainService } from 'src/app/service/train.service';
import { Station } from '../model/station';
import { TrainSearchResult } from '../model/trainSearchResult';

@Component({
  selector: 'app-train-list',
  templateUrl: './train-list.component.html',
  styleUrls: ['./train-list.component.css'],
})
export class TrainListComponent implements OnInit {
  trainsList: TrainSearchResult = new TrainSearchResult();
  stations: Station[] = [];
  params = {
    filter: {
      from: '',
      to: '',
    },
  };
  constructor(private service: TrainService) {}

  ngOnInit() {
    this.getTrains();
    this.getStations();
  }

  getTrains(): void {
    this.service.getTrains(this.params).subscribe({
      next: (data: TrainSearchResult) => {
        // console.log(data);
        this.trainsList = data;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  getStations() {
    this.service.getStations().subscribe({
      next: (data: Station[]) => {
        // console.log(data);
        this.stations = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getTypePicture(type: string) {
    if (type == 'inter-city') {
      return 'assets/images/inter-city.svg';
    } else if (type == 'brzi') {
      return 'assets/images/brzi.jpg';
    } else if (type == 'regio') {
      return 'assets/images/regio.jpg';
    }
    return '';
  }
}
