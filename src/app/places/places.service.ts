import { Injectable } from '@angular/core';
import { Place } from './place.model'

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private places: Place[] = [
    {
      id: '1',
      title: 'Eiffer Tower',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Tour_eiffel_at_sunrise_from_the_trocadero.jpg/1200px-Tour_eiffel_at_sunrise_from_the_trocadero.jpg',
      comments: ['awesome place', 'Wonderful']
    }, {
      id: '2',
      title: 'Statue of Liberty',
      imageURL: 'https://s3.eestatic.com/2018/07/09/social/Robos-Estados_Unidos-Multas_economicas-La_Jungla_321232154_86226650_1024x576.jpg',
      comments: ['awesome place', 'Wonderful']
    },
  ]
  constructor() { }

  getPlaces() {
    return [...this.places]
  }

  getOnePlace(placeId: string) {
    return {
      ... this.places.find(place => {
        return place.id === placeId
      }
      )
    }
  }

  addPlace(title: string, imageURL: string) { 
    this.places.push({
      title,
      imageURL,
      comments:[],
      id: this.places.length + 1 + ""
    });
  }

  deletePlace(placeId : string) { 
    this.places = this.places.filter(place =>{
      return place.id !==placeId
    })
  }


  updatePlace() { }


}
