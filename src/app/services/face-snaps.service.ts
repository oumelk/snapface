import { Injectable } from "@angular/core";
import { FaceSnap } from "../model/face-snap.model";

@Injectable({
    providedIn :'root'
})
export class FaceSnapsService {
    
    faceSnaps : FaceSnap[]= [
        {
          id : 1,
          title :'Imane',
          image: "assets/imane.jpeg",
          createdDate : new Date() ,
          snaps: 0 ,
          description:'Moi',
          location: 'Kasba-Tadla'
        },
        {
          id : 2 ,
          title :'Salah',
          image: "assets/salah.jpeg",
          createdDate : new Date() ,
          snaps: 0 ,
          description:'Mon bb',
        }
  
      ]
    
      getFaceSnapById(faceSnapId: number) : FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap =>faceSnap.id === faceSnapId);
        if(!faceSnap){
          throw new Error('FaceSnap Not Found!');
        }else{
          return faceSnap;
        }
      }


    getAllFaceSnaps() : FaceSnap[]{
        return this.faceSnaps;
    }
    snapFaceSnapById(faceSnapId : number) : void {
        const faceSnap = this.faceSnaps.find(faceSnap =>faceSnap.id === faceSnapId);
        if(faceSnap){
            faceSnap.snaps++;
        }
        else {
              throw new Error('FaceSnap Not Found!');
        }
    }
}