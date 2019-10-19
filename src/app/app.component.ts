import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Vagas',
      url: '/home',
      icon: 'md-clipboard'
    },
    {
      title: 'Orientações',
      url: '/list',
      icon: 'md-list'
    },
    {
      title: 'Documentos',
      url: '/documentos',
      icon: 'md-document'
    },
    {
      title: 'Resultados',
      url: '/editais',
      icon: 'md-albums'
    }
  ];

  public app = [
    {
      title: 'Configurações',
      url: '/teste',
      icon: 'md-settings'
    },
    {
      title: 'Sair',
      url: '/sair',
      icon: 'md-close-circle'
    }
  ];
  

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  
}
