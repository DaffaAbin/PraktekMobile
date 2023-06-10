import { Component } from '@angular/core';
import { Router } from '@angular/router';





@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  form = {
    nama : '',
    nik : '',
    alamat : '',
    ttl : ''
  
  }

  constructor(
    private router : Router
  ) {}

  doRiwayat(){

    localStorage.setItem("nama", this.form.nama);
    localStorage.setItem("nik", this.form.nik);
    localStorage.setItem("alamat", this.form.alamat);
    localStorage.setItem("ttl", this.form.ttl);

    this.router.navigateByUrl("riwayat")
  }

  sendToEmail(){
    const recipient = "daffarifqiabyansyah@gmail.com"
    const subject = "Test Email"
    const body = `NIK: ${this.form.nik}Nama: ${this.form.nama}Alamat: ${this.form.alamat}, Tempat Tanggal Lahir: ${this.form.ttl}  `
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.open(mailtoLink,`NIK: ${this.form.nik}Nama: ${this.form.nama}Alamat: ${this.form.alamat}, Tempat Tanggal Lahir : ${this.form.ttl}`, "_blank")
  }

    

}
