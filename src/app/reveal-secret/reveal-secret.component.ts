import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Card} from "primeng/card";
import {ActivatedRoute} from "@angular/router";
import {SecretServiceService} from "../service/secret-service.service";
import {Message} from "primeng/message";
import {NgIf} from "@angular/common";
import {PrimeTemplate} from "primeng/api";
import {Panel} from "primeng/panel";

@Component({
  selector: 'app-reveal-secret',
  standalone: true,
  imports: [
    Card,
    Message,
    NgIf,
    PrimeTemplate,
    Panel
  ],
  templateUrl: './reveal-secret.component.html',
  styleUrl: './reveal-secret.component.scss'
})
export class RevealSecretComponent implements OnInit{
  plainText: string | null = null;
  error: string | null = null;



  constructor(private route: ActivatedRoute, private secretService: SecretServiceService, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    const token = this.route.snapshot.paramMap.get('token')!;

    this.secretService.revealSecret(id, token).subscribe(
      (res) => {
        console.log(res)
        this.plainText = res.plainText;
        this.cd.detectChanges();

      },
      (err) => {
        console.log(err)
        this.error = err.error?.message || 'Failed to load secret';
        this.cd.detectChanges();

      }
    );
  }
}
