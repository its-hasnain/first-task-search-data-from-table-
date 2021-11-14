import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
 
  public serchValue: string = ''
 
  filterData = [
    {
      firstName: 'Celestine',
      lastName: 'Schimmel',
      address: '7687 Jadon Port'
    },
    {
      firstName: 'Johan',
      lastName: 'Ziemann PhD',
      address: '156 Streich Ports'
    },
    {
      firstName: 'Lizzie',
      lastName: 'Schumm',
      address: '5203 Jordon Center'
    },
    {
      firstName: 'Gavin',
      lastName: 'Leannon',
      address: '91057 Davion Club'
    },
    {
      firstName: 'Lucious',
      lastName: 'Leuschke',
      address: '16288 Reichel Harbor'
    }
  ]

   public searchData:any = this.filterData

  onSearchCustomer(event: any) {
    this.serchValue = event.target.value
    if(this.serchValue) {
    let filtersData=  this.filterData.filter(item=>{
        return  item.firstName.toLocaleLowerCase().includes(this.serchValue.toLocaleLowerCase())
        })
        this.searchData = filtersData
    }else {
      this.searchData= this.filterData
    }
  }
   
}
