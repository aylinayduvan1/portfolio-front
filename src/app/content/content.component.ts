import { Component } from '@angular/core';
import {  ElementRef, OnInit, ViewChild } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { ApiService } from 'src/app/services/api/api.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { MessageService } from 'primeng/api';
import { Skill } from '../models/skill.modal';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

    constructor(
      private readonly apiService: ApiService, 
      private router: Router,
      private messageService: MessageService,
      private authService: AuthService
  
    )
     {}

  visible: boolean = false;

  showDialog() {
    this.visible = true;
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
          path: 'assets/kep.json' // Animasyon dosyasının yolunu buraya göre ayarlayın
        });
    
      }


      skills:Skill[] = []

      refresh() {
        this.apiService.getAllEntities(Skill).subscribe((response) => {
          this.skills = response.data;
          console.log('Banner yazısı:', this.skills); // Eklendi
        });
      }
       ngOnInit() {
        this.initializeAnimation();
    
        this.refresh();
    }

    
    
}
