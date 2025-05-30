import { Component } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { SkillsComponent } from "../skills/skills.component";
import { ProjectsComponent } from "../projects/projects.component";
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: 'app-home',
  imports: [AboutComponent, SkillsComponent, ProjectsComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
