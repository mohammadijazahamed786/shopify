import { Component } from '@angular/core';

declare var Razorpay: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  payNow() {
    const RazorpayOptions = {
      description: 'Sample Razorpay demo',
      currency: 'INR',
      amount: 100000,
      name: 'shopify',
      key: 'rzp_test_r2E6y9hrMcxsB9',
      image: 'assets/image/2.jpg',
      prefill: {
        name: 'shopify',
        email: 'shopifyemail786@gmal.com',
        phone: '8965748236'
      },
      theme: {
        color: '#6466e3'
      },
      modal: {
        ondismiss: () => {
          console.log('dismissed');
        }
      }
    };

    const successCallback = (paymentid: any) => {
      console.log(paymentid);
    };

    const failureCallback = (error: any) => {
      console.log(error);
    };

    Razorpay.open(RazorpayOptions, successCallback, failureCallback);
  }
  
}
