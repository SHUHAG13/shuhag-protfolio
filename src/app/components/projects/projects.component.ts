import { Component } from '@angular/core';
export interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
}
@Component({
  selector: 'app-projects',
  imports: [],
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
      image: 'assets/images/taskpro.jpg',
      description: 'A full-stack task manager app built with Angular & .NET Core.'
    },
    {
      title: 'Portfolio Site',
      category: 'Angular',
      image: 'assets/images/portfolio.jpg',
      description: 'My personal portfolio built using Angular and Bootstrap.'
    },
    {
      title: 'API Auth System',
      category: '.NET',
      image: 'assets/images/api.jpg',
      description: 'A secure authentication system using ASP.NET Core.'
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
