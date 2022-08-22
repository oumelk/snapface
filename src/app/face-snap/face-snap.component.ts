import { Component, OnInit , Input, Inject, InjectionToken } from '@angular/core';
import { UrlCreationOptions } from '@angular/router';
import { FaceSnap } from '../model/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';


@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})

export class FaceSnapComponent  implements OnInit {
  constructor(private faceSnapsService: FaceSnapsService) {}
  id! : number;
  image! : string;
  title! : string ;
  description! : string ;
  createdDate! : Date ;
  snaps! : number ;
  bouttonText! : string ;

  ngOnInit(){
    this.bouttonText = "Likez!"
    
    
  }

  addClickSnap(){
    if(this.bouttonText === 'Likez!'){
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id);
      this.bouttonText = 'Dislike'
    }
    else{
      this.faceSnap.snaps--;
      this.bouttonText = 'Likez!'
    }
  }
  @Input() faceSnap! : FaceSnap;

}
