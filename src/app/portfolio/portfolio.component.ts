import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  private contactArray: Array<any> = [];
  private newAttribute: any = {};

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addTableData(contactForm: any) {
    let name = contactForm.name.value;
    let number = contactForm.phone.value;
    let node1 = document.createElement("tr");
    let nameNode = document.createTextNode(contactForm.name.value);
    node1.appendChild(nameNode);
    document.getElementById("row")?.appendChild(nameNode);
    let node2 = document.createElement("tr");
    let numberNode = document.createTextNode(contactForm.number.value);
    node1.appendChild(numberNode);
    document.getElementById("row")?.appendChild(numberNode);
  }



}
