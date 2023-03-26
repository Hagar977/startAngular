import { Component } from '@angular/core';
interface images {
  imgUrl : string,
  modalTitle? : string,
}
// interface modal {
//   modalTitle : string,
//   modalImg : string
// }

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  images : images [] = [

    { imgUrl :"./assets/images/cabin.png" , modalTitle : "login cabin"},
    { imgUrl :"./assets/images/cake.png" ,modalTitle : "tasty cake"},
    { imgUrl :"./assets/images/circus.png" ,modalTitle : "circus tent"},
    { imgUrl :"./assets/images/game.png" ,modalTitle : "controller"},
    { imgUrl :"./assets/images/safe.png" ,modalTitle : "locked safe"},
    { imgUrl :"./assets/images/submarine.png" ,modalTitle : "submarine"},

]

showDetails:any = {};

displayData(data:any):void {
  this.showDetails = data;

}

// modal : modal[] = [
//   {modalTitle : "login cabin" , modalImg : "./assets/images/cabin.png"},
//   {modalTitle : "tasty cake" , modalImg : "./assets/images/cake.png"},
//   {modalTitle : "circus tent" , modalImg : "./assets/images/circus.png"},
//   {modalTitle : "controller" , modalImg : "./assets/images/game.png"},
//   {modalTitle : "locked safe" , modalImg : "./assets/images/safe.png"},
//   {modalTitle : "submarine" , modalImg : "./assets/images/submarine.png"},
// ]

}
