import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Advert } from 'src/app/models/advert.modal';
import { ResponseStatus } from 'src/app/models/response/base-response.model';
import { ApiService } from 'src/app/services/api/api.service';


@Component({
  selector: 'app-advert-page',
  templateUrl: './advert-page.component.html',
  styleUrls: ['./advert-page.component.css']
})
export class AdvertPageComponent {
  
  
  constructor(
    private readonly apiService: ApiService, 
    private router: Router,
    private messageService: MessageService,

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

    this.refresh();
}


     //güncelleme 
     editDialog: boolean = false
     advertEdit: Advert | null = null;
   
       
     hideDialog() {
       this.editDialog = false;
     }
   
     closeEditModal() {
       this.editDialog = false;
     }
 
 
     
     openEditDialog(id: number) {
       this.apiService.getEntityById<Advert>(id, Advert).then((response) => {
         console.log(response?.data)
         if (response && response.data) {
           this.editDialog = true;
           this.advertEdit = response.data; 
         } else {
           console.error('İlan bulunamadı veya alınırken bir hata oluştu.');
         }
       }).catch((error) => {
         console.error('İlan alınırken bir hata oluştu:', error);
       });
     }
 
  
 
     onUpdate(id: number, updatedAdvert: Advert) {
       this.update(id, updatedAdvert).then(response => {
         if (response?.status == ResponseStatus.Ok) {
           this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: 'ilan güncelleme başarılı', life: 3000 });
           this.hideDialog(); // Güncelleme işlemi tamamlandığında dialogu gizle
           this.refresh();

         }
       }).catch((error) => {
         console.error('ilan güncellenirken bir hata oluştu:', error);
       });
     }
   
   
     update(id: number, updatedAdvert: Advert) {
       return this.apiService.updateEntity(id, updatedAdvert, Advert);
     }
}
