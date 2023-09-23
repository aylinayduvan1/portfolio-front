import { Component } from '@angular/core';
import { Experience } from 'src/app/models/experiencemodal';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ApiService } from 'src/app/services/api/api.service';
import { ExperienceRequest } from 'src/app/models/request/experience-request.model';
import { ResponseStatus } from 'src/app/models/response/base-response.model';

@Component({
  selector: 'app-exprience-page',
  templateUrl: './exprience-page.component.html',
  styleUrls: ['./exprience-page.component.css']
})
export class ExpriencePageComponent {
  responsiveOptions: any[] | undefined;
  experiences:Experience[] = []
  public experienceRequest: ExperienceRequest = <ExperienceRequest>{};

  constructor(
    private readonly apiService: ApiService, 
    private router: Router,
    private messageService: MessageService,

  )
   {}
  
  refresh() {
    this.apiService.getAllEntities(Experience).subscribe((response) => {
      this.experiences = response.data;
      console.log('Banner yazısı:', this.experiences); // Eklendi
    });
  }

   ngOnInit() {

    this.refresh();
}


modalOpen: boolean = false; //sayfa ilk açıldığında modal'ın kapalı kalması için false değer verdik


openModal() {
  this.modalOpen = true;
}

closeModal() {
  this.modalOpen = false;
}



modalOpenAdd: boolean = false;
modalEdit: boolean = false ;

openModalAdd() {
  this.modalOpenAdd = true;
}

closeModalAdd() {
  this.modalOpenAdd = false;
}
editModal(){
  this.modalEdit = false;
}



     //güncelleme 
     editDialog: boolean = false
     experienceEdit: Experience | null = null;
   
       
     hideDialog() {
       this.editDialog = false;
     }
   
     closeEditModal() {
       this.editDialog = false;
     }
 
  
     
     openEditDialog(id: number) {
       this.apiService.getEntityById<Experience>(id, Experience).then((response) => {
         console.log(response?.data)
         if (response && response.data) {
           this.editDialog = true;
           this.experienceEdit = response.data; 
         } else {
           console.error('İlan bulunamadı veya alınırken bir hata oluştu.');
         }
       }).catch((error) => {
         console.error('İlan alınırken bir hata oluştu:', error);
       });
     }
 
  
 
     onUpdate(id: number, updatedExperience: Experience) {
       this.update(id, updatedExperience).then(response => {
         if (response?.status == ResponseStatus.Ok) {
           this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: 'Deneyim güncelleme başarılı', life: 3000 });
           this.hideDialog(); // Güncelleme işlemi tamamlandığında dialogu gizle
           this.refresh();

         }
       }).catch((error) => {
         console.error('ilan güncellenirken bir hata oluştu:', error);
       });
     }
   
   
     update(id: number, updatedExperience: Experience) {
       return this.apiService.updateEntity(id, updatedExperience, Experience);
     }


     //silme
     
     onDelete(id: number) {
      console.log(id)

      this.delete(id).then(response => {
        if (response?.status == ResponseStatus.Ok) {
          this.refresh();
          this.modalOpen=false
          this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: 'Deneyim başarı ile silindi', life: 3000 });
        }
      });
    }
  
    delete(id: number) {
      return this.apiService.deleteEntity(id, Experience);
      
    }

    closeAddModal() {
      this.visible = false;
    }
    //ekleme
    visible: boolean = false;


    showDialog() {
      this.visible = true;
  }

    onCreate(entity: ExperienceRequest) {
      this.addEntity<ExperienceRequest>(entity, 'Experience').then(response => {
        if (response?.status == ResponseStatus.Ok) {
          this.refresh();
          this.visible = false;
        }
      });
    }
  
    addEntity<TEntity>(entity: TEntity, entityType:  string) {
      return this.apiService.addEntity<TEntity>(entity, entityType);
    }


}
