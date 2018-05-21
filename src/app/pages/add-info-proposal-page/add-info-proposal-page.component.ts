import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CandidateService } from '../../services/candidate.service';

@Component({
  selector: 'app-add-info-proposal-page',
  templateUrl: './add-info-proposal-page.component.html',
  styleUrls: ['./add-info-proposal-page.component.css']
})


export class AddInfoProposalComponent implements OnInit {
  proposalForm: FormGroup;
  
  constructor(
    public candidateService: CandidateService,
    public formBuilder: FormBuilder,
    public router: Router,
  ) {

  }

  ngOnInit() {
    this.proposalForm = this.formBuilder.group({
      email: '',
      password: '',
    });
  }

  onSubmit() {
    this.candidateService.addProposal(
        this.proposalForm.get('tittle').value,
        this.proposalForm.get('description').value
        
    ).subscribe(serverResponse=>{
        this.router.navigate(['/']);
    }, error=>{
    console.log(error);
    });


this.router.navigate(['/signin']);

}
