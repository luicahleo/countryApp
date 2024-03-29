import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'byCapitalPage-by-county-page',
  templateUrl: './by-county-page.component.html',
  styles: [
  ]
})
export class ByCountyPageComponent {
  public countries: Country[] = [];
  constructor(private countriesService: CountriesService) {}

  searchByCountry(term: string): void {
    this.countriesService.searchCountry(term).subscribe((countries) => {
      this.countries = countries;
    });

    console.log({ term });
  }
}
