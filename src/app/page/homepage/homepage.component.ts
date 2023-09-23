import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AnimationItem } from 'lottie-web';
import { MessageService } from 'primeng/api';
import { Advert } from 'src/app/models/advert.modal';
import { ResponseStatus } from 'src/app/models/response/base-response.model';
import { ApiService } from 'src/app/services/api/api.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  constructor(
    private readonly apiService: ApiService, 
    private router: Router,
    private messageService: MessageService,
    private authService: AuthService

  )
   {}

  advert:Advert[] = []

  refresh() {
    this.apiService.getAllEntities(Advert).subscribe((response) => {
      this.advert = response.data;
      console.log('Banner yazısı:', this.advert); // Eklendi
    });
  }
   ngOnInit() {
    this.initializeAnimation();

    this.refresh();
}




  // Eksik olan isLoggedIn() metodu AuthService'den alınarak buraya ekleniyor.
  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }


logOut(): void {
  // AuthService içindeki logout() metodunu çağırarak çıkış işlemini gerçekleştirin
  this.authService.logOut();
}


  //animasyon
  @ViewChild('lottieContainer', { static: true }) lottieContainer!: ElementRef;
  animation!: AnimationItem;

  
  
    ngOnDestroy() {
      if (this.animation) {
        this.animation.destroy();
      }
    }
  
    initializeAnimation() {
      this.animation = (window as any).lottie.loadAnimation({
        container: this.lottieContainer.nativeElement,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'assets/cv-lottie.json' // Animasyon dosyasının yolunu buraya göre ayarlayın
      });
  
    }





    //twit işlemleri
    
}



  
  

