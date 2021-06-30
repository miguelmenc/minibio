import { Component, Renderer2 } from '@angular/core';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
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
    userDescription: 'Esto es una breve descripción del perfil 😀',
    userImage: '../assets/img/imagen.jpg',
    links: [
      {
        link: 'https://github.com/miguelmenc',
        title: 'Mis proyectos de gitHub',
        icons: faGithub,
      },
      {
        link: 'https://twitter.com/?lang=es',
        title: 'Este es mi twitter',
        icons: faTwitter,
      },
      {
        link: 'https://es.linkedin.com/',
        title: 'Mi linkedin',
        icons: faLinkedin,
      },
    ],
  };

  constructor(private renderer: Renderer2){

  }

  changeMode() {
    this.isDarkMode = !this.isDarkMode;
    console.log(this.isDarkMode);
    if(this.isDarkMode){
      this.renderer.addClass(document.body, 'dark');
    }else{
      this.renderer.removeClass(document.body, 'dark');
    }
  }
}
