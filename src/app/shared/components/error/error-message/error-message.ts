import {Component, inject} from '@angular/core';
import {ErrorService} from '../../../services/error.service';
import {Message} from 'primeng/message';

@Component({
  selector: 'app-error-message',
  imports: [
    Message
  ],
  templateUrl: './error-message.html',
  styleUrl: './error-message.scss',
})
export class ErrorMessage {
  error = inject(ErrorService).error;
}
