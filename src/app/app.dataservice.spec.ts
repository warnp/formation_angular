/**
 * Created by AELION on 17/02/2017.
 */

import {TestBed} from "@angular/core/testing";
import {DataService} from "./app.dataservice";

describe("Une suite de de tests de base", () => {
  TestBed.configureTestingModule({
    providers: [DataService]
  })

  let dataService = TestBed.get(DataService)
  let powers = dataService.powers()

  expect(powers.length).toBeGreaterThan(0)
})
