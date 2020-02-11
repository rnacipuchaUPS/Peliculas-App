import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage {

  constructor(private router:Router) { }

 inicio(){
  this.router.navigate(['/tab1']);
 }

 iniciodos(){
  this.router.navigate(['/tab2']);
 }

}
