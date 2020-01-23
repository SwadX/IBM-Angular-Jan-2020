import { HttpClient } from "@angular/common/http";
import { Bug } from "../models/Bug";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';

@Injectable()
export class BugApi{
    private serviceEndPoint = 'http://localhost:3000/bugs';

    constructor(private http : HttpClient){

    }
    getAll() : Observable<Bug[]> {
        return this.http
            .get<Bug[]>(this.serviceEndPoint);       
    }

    save(bugData : Bug) : Observable<Bug>{
        if (bugData.id === 0){
            return this.http
                .post<Bug>(this.serviceEndPoint, bugData)
        } else {
            return this.http
                .put<Bug>(`${this.serviceEndPoint}/${bugData.id}`, bugData);
        }
    }

    remove(bugData : Bug) : Observable<any> {
        return this.http
            .delete<Bug>(`${this.serviceEndPoint}/${bugData.id}`);
    }
}
