import { Component, Renderer2 } from '@angular/core';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faLightbulb as lightregular } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'minibio';
  isDarkMode: boolean = false;
  gitLight = faLightbulb;
  gitNight = lightregular;

  user = {
    userName: 'Miguel Menchén',
    userDescription:
      'Decidí formarme en Informática porque me gusta el dinamismo de la tecnología. Actualmente busco una oportunidad laboral dentro del mundo del diseño web 😀',
    userImage: '../assets/img/imagen.jpg',
    links: [
      {
        link: 'https://github.com/miguelmenc',
        title: 'Mis proyectos de gitHub',
        icons: faGithub,
      },
      {
        link: 'https://www.linkedin.com/in/miguel-menchen-1983b0217//',
        title: 'Mi linkedin',
        icons: faLinkedin,
      },
    ],
  };

  constructor(private renderer: Renderer2) {}

  changeMode() {
    this.isDarkMode = !this.isDarkMode;
    console.log(this.isDarkMode);
    if (this.isDarkMode) {
      this.renderer.addClass(document.body, 'dark');
    } else {
      this.renderer.removeClass(document.body, 'dark');
    }
  }
}
