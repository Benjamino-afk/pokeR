import { Component, OnInit } from '@angular/core';
import { PokerService } from 'src/app/services/poker.service';

@Component({
  selector: 'app-player-settings',
  templateUrl: './player-settings.component.html',
  styleUrls: ['./player-settings.component.scss']
})
export class PlayerSettingsComponent implements OnInit {
  roomId: string;

  constructor(service: PokerService) {
    this.roomId = service.player.roomId;
  }

  ngOnInit() {
  }
}
