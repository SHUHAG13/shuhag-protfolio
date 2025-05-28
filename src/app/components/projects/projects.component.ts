import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
export interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
}
@Component({
  selector: 'app-projects',
  imports: [FormsModule,CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
   selectedCategory: string = 'All';
  selectedProject!: Project;

  categories = ['All', 'Angular', '.NET', 'Full-stack'];

  projects: Project[] = [
    {
      title: 'TaskPro App',
      category: 'Full-stack',
      image: 'images/picture1.jpg',
      description: 'A full-stack task manager app built with Angular & .NET Core.'
    },
    {
      title: 'Portfolio Site',
      category: 'Angular',
      image: 'images/dailytask.jpg',
      description: 'My personal portfolio built using Angular and Bootstrap.'
    },
    {
      title: 'API Auth System',
      category: '.NET',
      image: 'images/api auth.jpg',
      description: 'A secure authentication system using ASP.NET Core.'
    },
    {
    title: 'Student Manager',
    category: 'Angular',
    image: 'images/student-portal.png',
    description: 'A CRUD dashboard built with Blazor WebAssembly to manage student records with EF Core.'
  }, {
    title: 'Ecomerce',
    category: 'Full-stack',
    image: 'images/ecomerce.png',
    description: 'A task management system built with Angular for the frontend and .NET Web API as the backend.'
  }
  ];

  get filteredProjects() {
    return this.selectedCategory === 'All'
      ? this.projects
      : this.projects.filter(p => p.category === this.selectedCategory);
  }

  selectProject(project: Project) {
    this.selectedProject = project;
  }
}
