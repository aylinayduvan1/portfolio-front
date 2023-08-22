import { Component } from '@angular/core';
import {  ElementRef, OnInit, ViewChild } from '@angular/core';
import { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  visible: boolean = false;

  showDialog() {
    this.visible = true;
}

ngOnInit():void {
  this.initializeAnimation();

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
}
