import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { StarModule } from "../shared/component/star/star.module";
import { AppPipeModule } from "../shared/pipe/app-pipe.module";

import { ReplacePipe } from "../shared/pipe/replace.pipe";
import { CoursesInfoComponent } from "./course-info.component";
import { CourseListComponent } from "./course-list.component";

@NgModule ({
  declarations: [
    CourseListComponent,
    CoursesInfoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    StarModule,
    AppPipeModule,
    RouterModule.forChild([
      { path: 'courses',  component: CourseListComponent },
      { path: 'courses/info/:id',  component: CoursesInfoComponent }
    ])
  ],
})
export class CourseModule {

}