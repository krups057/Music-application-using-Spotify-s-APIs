import { Component } from '@angular/core';
import { HttpModule} from '@angular/http'


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ]
})


export class AppComponent {
  title = 'app-works!';
}
