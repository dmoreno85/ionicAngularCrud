import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { PlacesService } from '../places.service';
import { Place } from '../place.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-places-detail',
  templateUrl: './places-detail.page.html',
  styleUrls: ['./places-detail.page.scss'],
})
export class PlacesDetailPage implements OnInit {
  place: Place;
  constructor(private activatedRoute: ActivatedRoute, private placesService: PlacesService, private router: Router, public alertController: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const recipeId = paramMap.get('placeId')
      // console.log(recipeId)
      this.place = this.placesService.getOnePlace(recipeId)
      console.log(this.place)
    })
  }
  async deletePlace() {
  const alertElement= await  this.alertController.create({
      header: 'Estas seguro de querer eliminar?',
      message: 'ten cuidado',
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      }, {
        text: 'Delete',
        handler: () => {
          this.placesService.deletePlace(this.place.id);
          this.router.navigate(['/places']);
        }
      }]
    });
    await alertElement.present();
    



  }

}
