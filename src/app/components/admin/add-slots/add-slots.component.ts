import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { PostsService } from '../../../service';
import { Posts } from '../../../models';

@Component({
  selector: 'app-add-slots',
  templateUrl: './add-slots.component.html',
  styleUrls: ['./add-slots.component.scss']
})
export class AddSlotsComponent implements OnInit {

  minDate: Date;
  maxDate: Date;
  slotForm = new FormGroup({});
  submitted: boolean;
  totalQuantity = 0;

  constructor(public postService: PostsService) { }

  ngOnInit(): void {
    this.minDate = this.covertDate(new Date());
    let today:Date = new Date();
    this.maxDate  = this.covertDate(new Date(today.setMonth(today.getMonth() + 2)));
    this.submitted = false;
    this.slotForm = new FormGroup({
      availabilityDate: new FormControl('', [Validators.required]),
      quota1: new FormControl('', [Validators.required]),
      quota2: new FormControl('', [Validators.required]),
      quota3: new FormControl('', [Validators.required]),
      quota4: new FormControl('', [Validators.required]),
      quota5: new FormControl('', [Validators.required]),
      quota6: new FormControl('', [Validators.required]),
      quota7: new FormControl('', [Validators.required]),
      quota8: new FormControl('', [Validators.required]),
      quota9: new FormControl('', [Validators.required]),
      quota10: new FormControl('', [Validators.required]),
      quota11: new FormControl('', [Validators.required]),
    })
  }

  covertDate(gDate: Date) {
    var date = gDate.toJSON().slice(0, 10);
    var newDate = new Date(Number(date.slice(0, 4)), Number(date.slice(5, 7)), Number(date.slice(8, 10)))
    return newDate;
  }

  submit(frm){
    if(this.slotForm.invalid){
      console.log(frm.availabilityDate.getTime())
    }else{
      var slotData = new Posts(frm);
      console.log(slotData);
      this.postService.addSlot(slotData);
      this.slotForm.reset();
    }
  }
}
