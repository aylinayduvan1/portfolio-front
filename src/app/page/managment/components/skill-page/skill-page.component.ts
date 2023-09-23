import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Skill } from 'src/app/models/skill.modal';
import { ResponseStatus } from 'src/app/models/response/base-response.model';
import { ApiService } from 'src/app/services/api/api.service';
import { SkillRequest } from 'src/app/models/request/skill-request.modal';


@Component({
  selector: 'app-skill-page',
  templateUrl: './skill-page.component.html',
  styleUrls: ['./skill-page.component.css']
})
export class SkillPageComponent {
  constructor(
    private readonly apiService: ApiService, 
    private router: Router,
    private messageService: MessageService,

  )
   {}

  skills:Skill[] = []
  public skillRequest: SkillRequest = <SkillRequest>{};


  refresh() {
    this.apiService.getAllEntities(Skill).subscribe((response) => {
      this.skills = response.data;
      console.log('Banner yazısı:', this.skills); // Eklendi
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
     skillEdit: Skill | null = null;
   
       
     hideDialog() {
       this.editDialog = false;
     }
   
     closeEditModal() {
       this.editDialog = false;
     }
 
 
     
     openEditDialog(id: number) {
       this.apiService.getEntityById<Skill>(id, Skill).then((response) => {
         console.log(response?.data)
         if (response && response.data) {
           this.editDialog = true;
           this.skillEdit = response.data; 
         } else {
           console.error('İlan bulunamadı veya alınırken bir hata oluştu.');
         }
       }).catch((error) => {
         console.error('İlan alınırken bir hata oluştu:', error);
       });
     }
 
  
 
     onUpdate(id: number, updatedSkill: Skill) {
       this.update(id, updatedSkill).then(response => {
         if (response?.status == ResponseStatus.Ok) {
           this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: 'ilan güncelleme başarılı', life: 3000 });
           this.hideDialog(); // Güncelleme işlemi tamamlandığında dialogu gizle
           this.refresh();

         }
       }).catch((error) => {
         console.error('ilan güncellenirken bir hata oluştu:', error);
       });
     }
   
   
     update(id: number, updatedSkill: Skill) {
       return this.apiService.updateEntity(id, updatedSkill, Skill);
     }


     //silme
     
     onDelete(id: number) {
      console.log(id)

      this.delete(id).then(response => {
        if (response?.status == ResponseStatus.Ok) {
          this.refresh();
          this.modalOpen=false
          this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: 'Beceri başarı ile silindi', life: 3000 });
        }
      });
    }
  
    delete(id: number) {
      return this.apiService.deleteEntity(id, Skill);
      
    }


    //ekleme
    visible: boolean = false;


    showDialog() {
      this.visible = true;
  }

    onCreate(entity: SkillRequest) {
      this.addEntity<SkillRequest>(entity, 'Skill').then(response => {
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
