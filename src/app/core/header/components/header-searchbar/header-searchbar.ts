import {Component, inject} from '@angular/core';
import {HeaderSearchbarResearch} from '../../models/header-searchbar-research.model';
import {FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-header-searchbar',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './header-searchbar.html',
  styleUrl: './header-searchbar.scss',
})
export class HeaderSearchbar {
  private fb = inject(NonNullableFormBuilder);

  searchForm: FormGroup<HeaderSearchbarResearch> = this.fb.group({
    search: this.fb.control('', Validators.required),
  });

  onSubmit() {
    console.log('SearchbarNavbar', this.searchForm.value);
  }
}
