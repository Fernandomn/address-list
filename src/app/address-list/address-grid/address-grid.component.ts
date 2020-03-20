import {Component, OnInit, SkipSelf, ViewChild} from '@angular/core';
import {Address} from '../../interfaces/address';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {AddressModalComponent} from '../adress-modal/address-modal.component';
import {MatDialog} from '@angular/material/dialog';
import {RemoveAddressModalComponent} from '../remove-address-modal/remove-address-modal.component';
import {StorageService} from '../../storage.service';
import {MatSort} from "@angular/material/sort";

const MOCK_DATA: Address[] = [
  {
    id: 1,
    name: 'Fernando',
    cep: '41830-590',
    street: 'Alameda Carrara',
    complement: '',
    neighborhood: 'Pituba',
    city: 'Salvador',
    usps: 'BA'
  },
  {
    id: 2,
    name: 'Rodrigo',
    cep: '41830-050',
    street: 'Avenida Octávio Mangabeira',
    complement: '',
    neighborhood: 'Pituba',
    city: 'Salvador',
    usps: 'BA'
  },
  {
    id: 3,
    name: 'Gabriela',
    cep: '40221-225',
    street: 'Rua Santa Isabela',
    complement: '',
    neighborhood: 'Engenho Velho da Federação',
    city: 'Salvador',
    usps: 'BA'
  },
  {
    id: 4,
    name: 'Laise',
    cep: '40435-355',
    street: 'Rua Doutor Caio Mário Pedreira Filho',
    complement: '',
    neighborhood: 'Massaranduba',
    city: 'Salvador',
    usps: 'BA'
  },
];

@Component({
  selector: 'app-address-grid',
  templateUrl: './address-grid.component.html',
  styleUrls: ['./address-grid.component.scss']
})


export class AddressGridComponent implements OnInit {
  // dataSource = new MatTableDataSource(MOCK_DATA);
  columnNames = ['Numero', 'Nome', 'CEP', 'Rua', 'Complemento', 'Bairro', 'Cidade', 'UF', 'actions'];
  storageTableKey = 'address-table';
  dataList: Address[];
  dataSource: MatTableDataSource<Address>;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    private storageService: StorageService
  ) {
    // this.dataSource = new MatTableDataSource(this.dataList);
    this.dataList = this.getLocalStorageTable();
    this.refreshTable();
  }

  ngOnInit(): void {
  }

  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openAddressDialog(currentAddress?: Address) {
    const dialogRef = this.dialog.open(AddressModalComponent,
      {
        data: currentAddress || null
      }
    );
    dialogRef.afterClosed().subscribe((result: Address) => {
      if (!result) {
        return;
      }
      if (result.id) {
        this.dataList.map((element) => {
          if (element.id === result.id) {
            return Object.assign(element, result);
          }
        });
      } else {
        result.id = this.dataList.reduce((prev, current) =>
          (prev.id > current.id) ? prev : current
        ).id + 1;
        this.dataList.push(result);
      }
      this.storageService.set(this.storageTableKey, JSON.stringify(this.dataList));
      // console.log('Actual LocalStorage: ', this.storageService.get(this.storageTableKey));

      this.refreshTable();
    });
  }

  private refreshTable() {
    this.dataSource = new MatTableDataSource(this.dataList);
    this.dataSource.sort = this.sort
  }

  removeAddress(address: Address) {
    const dialogRef = this.dialog.open(RemoveAddressModalComponent,
      {
        data: address
      }
    );
    dialogRef.afterClosed().subscribe((result) => {
      if (!result) {
        return;
      }
      this.dataList.splice(this.dataList.indexOf(result), 1);
      this.storageService.set(this.storageTableKey, JSON.stringify(this.dataList));
      this.refreshTable();
    });
  }

  private getLocalStorageTable() {
    const result = JSON.parse(this.storageService.get(this.storageTableKey));
    // console.log(`result: ${result}`)
    return result || [];
  }
}
