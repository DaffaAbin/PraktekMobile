import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-riwayat',
  templateUrl: './riwayat.page.html',
  styleUrls: ['./riwayat.page.scss'],
})
export class RiwayatPage implements OnInit {

  form = {
    nama : localStorage.getItem ('nama'),
    nik : localStorage.getItem ('nik'),
    alamat : localStorage.getItem ('alamat'),
    ttl : localStorage.getItem ('ttl')
  
  }

  constructor() { }

  ngOnInit() {
  }

  sendToEmail(){
    const recipient = "daffarifqiabyansyah@gmail.com"
    const subject = "Test Email"
    const body = `NIK: ${this.form.nik}Nama: ${this.form.nama}Alamat: ${this.form.alamat}, Tempat Tanggal Lahir: ${this.form.ttl}  `
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.open(mailtoLink,`NIK: ${this.form.nik}Nama: ${this.form.nama}Alamat: ${this.form.alamat}, Tempat Tanggal Lahir : ${this.form.ttl}`, "_blank")
  }


  

}
