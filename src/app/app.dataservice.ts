/**
 * Created by AELION on 17/02/2017.
 */

import {Injectable} from "@angular/core";
import {Licorne, Pouvoir} from "./app.model";
import {LogService} from "./app.logservice";

const POWERS : Pouvoir[] = [{
    id: 0,
    nom: "Tout cramer!"}, {
    id: 1,
    nom: "Tout casser!"}]

const LICORNS: Licorne[] = [{
  id: 0,
  nom: "Tata",
  color: "red",
  pouvoir: POWERS[0],
}, {
  id: 1,
  nom: "Titi",
  color: "violet",
  pouvoir: POWERS[0],
}, {
  id: 2,
  nom: "Toto",
  color: "blue",
  pouvoir: POWERS[1],
}]

@Injectable()
export class DataService {
  constructor(private logService: LogService){

  }
  powers() {
    this.logService.log(POWERS)
    return POWERS
  }
  licornes() {
    this.logService.log(LICORNS)

    return LICORNS
  }

}
