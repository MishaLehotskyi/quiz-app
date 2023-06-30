import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {QuizListComponent} from "./quiz-list/quiz-list.component";
import {PlayItemComponent} from "./play/play-item/play-item.component";
import {ResultsComponent} from "./results/results.component";
import {StatsComponent} from "./stats/stats.component";

const router: Routes = [{path: '', redirectTo: '/quiz-list', pathMatch: 'full'},
  {path: 'play/:id', component: PlayItemComponent},
  {path: 'quiz-list', component: QuizListComponent},
  {path: 'result', component: ResultsComponent},
  {path: 'stats', component: StatsComponent}];

@NgModule({
  imports : [RouterModule.forRoot(router, {useHash : true})],
  exports : [RouterModule]
})
export class AppRoutingModule{

}
