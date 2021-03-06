import { Component, OnInit } from '@angular/core';
import {LoaderService} from './services/loader.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  color = 'primary';
  mode = 'inderminate';
  value = 50;
  isLoading: Subject<boolean> = this.loaderService.isLoading;

  constructor(private loaderService: LoaderService) {
  }
}
