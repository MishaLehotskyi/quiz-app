import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
@Injectable()
export class DataService{
  constructor(private http: HttpClient) {
  }

  getData(number:number){
    return this.http.get('https://opentdb.com/api.php?amount=10&category='+(9+number))
  }
}
