import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NavService {
  private sectionSubject = new BehaviorSubject<string>('intro');
  readonly section$ = this.sectionSubject.asObservable();

  get current(): string { return this.sectionSubject.value; }
  setSection(section: string) { this.sectionSubject.next(section); }
}

