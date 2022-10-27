import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  private static readonly listaImena: string[]=[
'Mesud',
'Hamza',
'Dzemil'
  ];
  private static readonly brojImena: number= StudentComponent.listaImena.length;

  public ocene: number[]=[];
  public ocenaStr: string;
public ime: string;
public prikaziProsek:boolean;


  constructor() {
  this.ime= StudentComponent.listaImena[Math.floor(Math.random()*StudentComponent.brojImena)];
  this.prikaziProsek = false;
   }
   
  ngOnInit(){}

  
public prosek(): number{
  return this.ocene.length === 0 
  ? 0
  :this.ocene.reduce((prev,next)=>prev+next,0)/this.ocene.length;
}

public onDodajOcenu(): void{
  const ocenaNum = Number.parseInt(this.ocenaStr,10);
  this.ocenaStr= undefined;
  if(Number.isNaN(ocenaNum) || ocenaNum <5 || ocenaNum >10){
    return;
  }
  this.ocene.push(ocenaNum);
}


public onPromeniPrikazivanjeProseka():void{
  this.prikaziProsek = !this.prikaziProsek;
};
public brojPolozenihPredmeta() {
  return this.ocene.filter(ocena=> ocena>5).length;
}

}