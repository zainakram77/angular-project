import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';



interface Doctor {
  referedBy: string;
  referingTo: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  panelOpenState!: boolean;
  isFormSaved: boolean = false;
  firstName: string = '';
  comments: string = '';
  isMedication: boolean = true;
  isMedications: boolean = true;
  email: string = '';
  address: any;
  selectedFirst: string = 'first';
  selectedSecond: string = 'second';
  time: any;
  medicationFirst:string = '';
  medicationSecond:string = '';
  gaurdian: string = '';
  phone: string = '';
  secondary: string = '';
  lastName: string = '';
  selectedDate: any;
  todayDate!: string;
  insurance: string = '';
  sshash: string = '';
  insuranceid: string = '';
  rows: number[] = [];
  dob: Date | null = null;
  insureddob: Date | null = null;
  appointment: Date | null = null;

  doctors: Doctor[] = [
    {
      referedBy: 'Dr Zain',
      referingTo: 'Dr Ahmad Zubair',
      email: 'ahmad@example.com',
      phone: '1234567890',
    },
    {
      referedBy: 'Dr Kashif',
      referingTo: 'Dr Ali',
      email: 'ali@example.com',
      phone: '9876543210',
    },
    {
      referedBy: 'Dr Nabeel',
      referingTo: 'Dr Qureshi',
      email: 'qureshi@example.com',
      phone: '1234567890',
    },
    {
      referedBy: 'Dr simon',
      referingTo: 'joseph',
      email: 'joseph@example.com',
      phone: '9876543210',
    },
  ];
  selectedDoctor: string = '';
  selectedDoctorData: Doctor = {
    referedBy: '',
    referingTo: '',
    email: '',
    phone: '',
  };
message: any;
action: any;
  onDoctorSelection(): void {
    this.selectedDoctorData =
      this.doctors.find((doctor) => doctor.referedBy === this.selectedDoctor) || {
        referedBy: '',
        referingTo: '',
        email: '',
        phone: '',
      };
  }

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    const today = new Date();
    this.todayDate = today.toISOString().split('T')[0];

    //  this is about exceptional panel
    this.panelOpenState = false;

  }

  addRow(): void {
    this.rows.push(this.rows.length + 1);
  }

  saveForm(): void {
    const formData = {
      firstName: this.firstName,
      comments: this.comments,
      isMedication: this.isMedication.toString(),
      isMedications: this.isMedications.toString(),
      email: this.email,
      address: this.address,
      selectedFirst: this.selectedFirst,
      selectedSecond: this.selectedSecond,
      dob: this.dob ? this.dob.toISOString() : null,
      time: this.time,
      appointment: this.appointment ? this.appointment.toISOString() : null,
      gaurdian: this.gaurdian,
      phone: this.phone,
      secondary: this.secondary,
      lastName: this.lastName,
      selectedDate: this.selectedDate,
      insurance: this.insurance,
      insureddob: this.insureddob ? this.insureddob.toISOString() : null,
      sshash: this.sshash,
      insuranceid: this.insuranceid,
      rows: this.rows,
      selectedDoctor: this.selectedDoctor,
      selectedDoctorData: this.selectedDoctorData,
    };
  
    // Save the form data to localStorage
    localStorage.setItem('formData', JSON.stringify(formData));
    this.isFormSaved = true;
    this.showSuccessMessage();

  }
  
  
  resetForm(): void {
    // Reset the form fields
    this.firstName = '';
    this.comments = '';
    this.medicationFirst = '';
    this.medicationSecond = '';
    this.email = '';
    this.address = null;
    this.selectedFirst = 'first';
    this.selectedSecond = 'second';
    this.dob = null;
    this.time = null;
    this.appointment = null;
    this.gaurdian = '';
    this.phone = '';
    this.secondary = '';
    this.lastName = '';
    this.selectedDate = null;
    this.insurance = '';
    this.insureddob = null;
    this.sshash = '';
    this.insuranceid = '';
    this.rows = [];
    this.selectedDoctor = '';
    this.selectedDoctorData = {
      referedBy: '',
      referingTo: '',
      email: '',
      phone: ''
    };
  }
    isFormComplete(): boolean {
    return true;
  }
  
  
  

  printDocument(): void {
    window.print();
  }
  showSuccessMessage(): void {
    const snackBarConfig: MatSnackBarConfig = {
      duration: 2000, // Duration in milliseconds (2 seconds in this case)
      panelClass: ['green-snackbar'], // Add the class for the custom green background
    };

    this.snackBar.open('Form data saved successfully!', 'Close', snackBarConfig);
  }
}
