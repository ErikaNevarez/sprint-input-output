import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-display-prod',
  imports: [],
  templateUrl: './display-prod.component.html',
  styleUrl: './display-prod.component.css'
})
export class DisplayProdComponent {

  @Output()displayIcons= new EventEmitter<boolean>();

  fnDisplayList(){this.displayIcons.emit(true)
}

  fnDisplayGrid(){this.displayIcons.emit(false)
  }

  
}