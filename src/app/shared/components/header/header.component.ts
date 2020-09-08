import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "title-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class TitleHeaderComponent implements OnInit {
  @Input() title: string;

  @Input() titlePath: string;

  @Output("onBack") onBack = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.onBack.emit(this.titlePath);
  }
}
