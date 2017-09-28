import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import {Contact} from './shared/contact';
@Injectable()
export class ContactService{
    headers;
    constructor(private http:Http){
        this.headers=new Headers();
        this.headers.append('key','ABCD');
    }
    getAllContacts(){
        return this.http.get('https://zenways-contact.herokuapp.com/api/contacts',{
            headers:this.headers
        });
    }
    getParticularContact(contactId){
        return this.http.get('https://zenways-contact.herokuapp.com/api/contact/'+contactId,{
            headers:this.headers
        });
    }
    createContact(contact:Contact){
        return this.http.post('https://zenways-contact.herokuapp.com/api/contact',contact,{
            headers:this.headers
        });
    }
}