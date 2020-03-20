import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Address} from '../../interfaces/address';
import {FormBuilder, Validators} from '@angular/forms';
import {Endereco, ErroCep, ErrorValues, NgxViacepService} from '@brunoc/ngx-viacep';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-address-modal',
  templateUrl: './address-modal.component.html',
  styleUrls: ['./address-modal.component.scss']
})
export class AddressModalComponent implements OnInit {
  cepPattern: RegExp = /\d{5}(-|)\d{3}/;
  cepNgxmaskPattern = '00000-000';
  activeAddress: Address;

  constructor(
    private viacep: NgxViacepService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<AddressModalComponent>,
    @Inject(MAT_DIALOG_DATA) public address: Address
  ) {
  }

  public addressForm = this.fb.group({
    name: ['', [Validators.required]],
    cep: ['', Validators.required],
    street: [''],
    complement: [''],
    neighborhood: [''],
    city: [''],
    usps: [''],
  });

  ngOnInit(): void {
    if (this.address) {
      this.activeAddress = this.address;
    } else {
      this.activeAddress = {
        id: undefined,
        name: '',
        cep: '',
        street: '', // logradouro
        complement: '', // complemento
        neighborhood: '', // bairro
        city: '', // localidade
        usps: '', // uf
      };
    }
  }

  onSearchCep(cep: any) {
    console.log(`Valor: ${cep}`);
    if (!this.cepPattern.test(cep)) {
      console.error('Wrong CEP');
      return;
    }
    this.viacep.buscarPorCep(cep)
      .then((result: Endereco) => {
        console.log(result);
        this.activeAddress.cep = result.cep;
        this.activeAddress.street = result.logradouro;
        this.activeAddress.complement = result.complemento;
        this.activeAddress.neighborhood = result.bairro;
        this.activeAddress.city = result.localidade;
        this.activeAddress.usps = result.uf;
      })
      .catch((error: ErroCep) => {
        let errorMsg = '';
        switch (error.getCode()) {
          case ErrorValues.CEP_INVALIDO:
            errorMsg = 'Cep inválido';
            break;
          case ErrorValues.CEP_NAO_ENCONTRADO:
            errorMsg = 'Cep não encontrado';
            break;
          case ErrorValues.CEP_VAZIO:
            errorMsg = 'Cep vazio';
            break;
          case ErrorValues.CEP_MUITO_CURTO:
            errorMsg = 'Cep muito curto';
            break;
          case ErrorValues.CEP_MUITO_LONGO:
            errorMsg = 'Cep muito longo';
            break;
          case ErrorValues.ERRO_SERVIDOR:
            errorMsg = 'Erro na conexão com o servidor';
            break;
          default:
            errorMsg = 'Houve um erro desconhecido. Tente novamente em breve';
        }
        this.activeAddress.cep = ''
        // console.log(errorMsg);
        this.showErrorMessage(errorMsg);
      });
  }

  private showErrorMessage(errorMsg: string) {
    this.snackBar.open(errorMsg, '', {duration: 1000});
  }
}
