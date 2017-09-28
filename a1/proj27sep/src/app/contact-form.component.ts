import {Component} from '@angular/core';
import {Contact} from './shared/contact';
import {ContactService} from './contact.service'
import {Router} from '@angular/router'
@Component({
    templateUrl:'./contact-form.component.html',
    providers:[ContactService]
})
export class ContactFormComponent{
    contact:Contact;
    constructor(private contactService:ContactService,private router:Router){
        this.contact=new Contact();
    }
    submitForm(){
        this.contactService.createContact(this.contact).subscribe(x=>{
            console.log(x)
            this.router.navigate([""])
        })
    }
}