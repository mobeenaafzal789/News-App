import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public apiKey:any= '8619be39b0254deca32dd3cfaec3abc7' ;

  constructor(public http: HttpClient) { }
  getNews(topic){
    // return this.http.get('https://newsapi.org/v2/everything?q='+topic'&from=2021-11-03&sortBy=publishedAt&apiKey='+ this.apiKey)
    return this.http.get('https://newsapi.org/v2/everything?q='+topic+'&from=2021-11-03&sortBy=publishedAt&apiKey='+this.apiKey);
    }
}
