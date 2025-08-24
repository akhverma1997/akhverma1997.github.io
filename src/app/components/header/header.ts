import { Component, HostListener, OnInit, inject, ElementRef, signal } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavService } from '../../services/nav.service';
import { PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit {
  activeSection: string = 'intro';
  menuOpen = signal(false);
  private sectionIds = ['intro', 'about', 'resume', 'portfolio', 'cta', 'services', 'contact'];
  private platformId = inject(PLATFORM_ID);
  private elRef = inject(ElementRef<HTMLElement>);
  private nav = inject(NavService);

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.updateActiveSection();
    }
  }

  toggleMenu(event: Event) {
    event.preventDefault();
    this.menuOpen.update(v => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    if (!this.menuOpen()) return;
    if (!isPlatformBrowser(this.platformId)) return;
    const target = event.target as Node;
    if (this.elRef?.nativeElement && !this.elRef.nativeElement.contains(target)) {
      this.menuOpen.set(false);
    }
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    if (!isPlatformBrowser(this.platformId)) return;
    this.menuOpen.set(false);
  }

  @HostListener('window:scroll')
  onScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.updateActiveSection();
    }
  }

  private updateActiveSection() {
    if (!isPlatformBrowser(this.platformId)) return;
    let current: string = this.sectionIds[0];
    for (const id of this.sectionIds) {
      const el = document.getElementById(id);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      const viewportMiddle = window.innerHeight * 0.35;
      if (rect.top <= viewportMiddle && rect.bottom > 80) {
        current = id;
      }
    }
    this.activeSection = current;
    this.nav.setSection(current);
  }

  scrollTo(id: string, event: Event) {
    if (event) event.preventDefault();
    if (!isPlatformBrowser(this.platformId)) return;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.menuOpen.set(false);
    }
  }
}
