import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SecretServiceService} from "../service/secret-service.service";
import {Textarea} from "primeng/textarea";
import {InputText} from "primeng/inputtext";
import {Button, ButtonDirective} from "primeng/button";
import {NgClass, NgIf, NgStyle} from "@angular/common";
import {FloatLabel} from "primeng/floatlabel";
import {Card} from "primeng/card";
import {Calendar} from "primeng/calendar";
import {DatePicker} from "primeng/datepicker";
import {Tooltip} from "primeng/tooltip";

@Component({
  selector: 'app-create-secret',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    Textarea,
    InputText,
    ButtonDirective,
    NgIf,
    FloatLabel,
    Card,
    Calendar,
    DatePicker,
    NgStyle,
    Button,
    Tooltip,
    NgClass
  ],
  templateUrl: './create-secret.component.html',
  styleUrl: './create-secret.component.scss'
})
export class CreateSecretComponent {
  plaintext = '';
  accessUrl: string | null = null;
  expiresAt: Date = new Date();
  today: Date | undefined | null;
  copied = false;


  constructor(private secretService: SecretServiceService) {
    this.today = new Date();
  }

  onSubmit() {
    this.secretService.createSecret({ plainText: this.plaintext, expiresAt: this.expiresAt }).subscribe(
      (res) => {
        this.accessUrl = window.location.origin +  res.accessUrl;
      },
      (err) => {
        alert('Failed to create secret');
      }
    );
  }


  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      this.copied = true;
    });
  }
}
