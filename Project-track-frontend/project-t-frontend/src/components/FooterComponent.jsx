import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function FooterComponent (){
  return(
    <div>
        <div
          class="bg-dark fixed-bottom text-light mb-0 p-2 text-center"
          id="cookies"
        >
          <a href="/cookie-policy" class="me-1" target="_blank">
            Privacy Policy 
          </a>
          and
          <a href="/privacy-policy" class="ms-1" target="_blank">
             Terms of Service
          </a>
          . Copyright © 2023 BTS. All Rights Reserved.
        </div>
      </div>
  );
}