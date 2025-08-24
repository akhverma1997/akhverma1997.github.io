import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  link: string;
}

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio {
  selectedProject: Project | null = null;

  projects: Project[] = [
    {
      id: 'modal-01',
      title: 'Touch_Control Android App',
      category: 'Android',
      image: 'images/portfolio/android.jpg',
      description: 'This android app controls mouse of pc of Windows, Ubuntu and Mac OS using Wi-Fi.It has all click functions and have all android keyboard buttons and also includes slideshow control.Developed using Java socket programming.',
      link: 'https://github.com/akhverma1997/Touch_Control'
    },
    {
      id: 'modal-02',
      title: 'Anil Grover Lab Website',
      category: 'Web Development',
      image: 'images/portfolio/website-anil.jpg',
      description: 'Rebuild the responsive website "The Anil Grover Lab of Plant Molecular Biology Department, DU "on WordPress.',
      link: 'https://anilgroverlab.org/'
    },
    {
      id: 'modal-03',
      title: 'Innovation Council DU Website',
      category: 'Web Development',
      image: 'images/portfolio/website-cic.jpg',
      description: 'Build website on CMS Made Simple and updated its events.',
      link: 'http://innovationcouncil.du.ac.in/web/'
    },
    {
      id: 'modal-04',
      title: 'Telephone Exchange project',
      category: 'Java',
      image: 'images/portfolio/telephone.jpg',
      description: 'This project is based on Telephone exchange switching system in Telecommunication.It follows all process during the call like first ringing, if call not picked up in 30s then auto disconnect and another person will be told busy if person is on call.Developed using Java Socket Programming, Java Swing and Java Multithreading on Eclipse and uploaded it on GitHub.',
      link: 'https://github.com/akhverma1997/Telephone-exchange'
    },
    {
      id: 'modal-05',
      title: 'MS Learn Tailspin Webgame',
      category: 'Azure Devops',
      image: 'images/portfolio/devops.jpg',
      description: 'Code used in Microsoft Learn modules to support Azure DevOps in Microsoft Cloud Skills Challenge.',
      link: 'https://github.com/akhverma1997/mslearn-tailspin-spacegame-web'
    }
  ];

  trackById(index: number, item: Project) { return item.id; }

  openModal(project: Project) {
    this.selectedProject = project;
  }

  closeModal() {
    this.selectedProject = null;
  }
}
