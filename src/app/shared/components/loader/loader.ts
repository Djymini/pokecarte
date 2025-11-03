import {Component, inject} from '@angular/core';
import {LoadingService} from '../../../core/services/loading.service';

@Component({
  selector: 'app-loader',
  imports: [],
  templateUrl: './loader.html',
  styleUrl: './loader.scss',
})
export class Loader {
  isLoading = inject(LoadingService).isLoading;
}
