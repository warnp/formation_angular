import {Component, ViewEncapsulation, Input, Output, EventEmitter} from '@angular/core';
import {Licorne, Pouvoir} from './app.model';
import {DataService} from "./app.dataservice";
import {LogService} from "./app.logservice";


@Component({
  selector: 'app-root',
  templateUrl: 'template/app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  constructor(private dataService: DataService, private logService: LogService){
    this.licornes = dataService.licornes()
    this.pouvoirs = dataService.powers()
  }

  pouvoirs: Pouvoir[]
  licornes: Licorne[]
  selectedLicorne: Licorne
  modifiedLicorne: Licorne


  afficheLicorneSelectionne(licorne) {
    this.logService.log(licorne)
    this.selectedLicorne = licorne
  }

}

@Component({
  selector: 'app-lili',
  templateUrl: './template/app.listlicornes.html'
})
export class LiliComponent {
  @Input() licornes
  @Output() selectedLicorne = new EventEmitter<Licorne>()

  selectLicorne(l) {
    this.selectedLicorne.emit(l)
  }
}


@Component({
  selector: 'app-lide',
  templateUrl: './template/app.drawlicorne.html'
})
export class LiDeComponent {
  @Input() licorne
}


@Component({
  templateUrl: './template/app.formlicorne.html',
  selector: 'app-mod-li'
})
export class ModLiComponent {
  @Input() licornes
  @Input() licorne
  @Input() pouvoirs

  @Output() ajouteLicorne = new EventEmitter<Licorne>()

  onSubmit(newLicorne) {
    console.log(this.licorne)
    this.ajouteLicorne.emit()
  }

  onDelete() {
    this.licornes.splice(this.licornes.length - 1)
    alert(this.licornes.length)
  }
  onAdd() {
    this.licornes.push({id:-1, nom:"",pouvoir:{}, color:""})
    console.log(this.licornes)
  }
}
