import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../state/state.service';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ApiStateService } from '../apistate/api-state.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  FormEnviar: FormGroup;

  public mensaje : string = ''

  constructor(private builder: FormBuilder, private router:Router, private service: StateService, private apiservice: ApiStateService) {
    this.FormEnviar = this.builder.group({
      mensaje: ['', Validators.required]

    })

  }

  ngOnInit(): void{
    this.apiservice.getApi().subscribe(
      (data)=>{
        console.log(data);
        localStorage.setItem('api', JSON.stringify(data.result));
      }
    )
  }


}
