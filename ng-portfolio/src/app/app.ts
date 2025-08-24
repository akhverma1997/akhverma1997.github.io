import { Component } from '@angular/core';

import { Header } from './components/header/header';
import { Intro } from './components/intro/intro';
import { About } from './components/about/about';
import { Resume } from './components/resume/resume';
import { Portfolio } from './components/portfolio/portfolio';
import { Cta } from './components/cta/cta';
import { Services } from './components/services/services';
import { Stats } from './components/stats/stats';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Intro, About, Resume, Portfolio, Cta, Services, Stats, Contact, Footer],
  templateUrl: './shell.html',
  styleUrl: './app.scss'
})
export class App {

}
