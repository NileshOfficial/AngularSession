import { Injectable } from '@angular/core';
import  { HttpClient } from '@angular/common/http';
import post from '../objectTemplates/postTemplate'

@Injectable({
    providedIn: 'root'
})
export class PostsDataFetchService {
    constructor(private http: HttpClient) {}

    getPosts = () => 
                this.http.get< Array<post> >(
                    "https://jsonplaceholder.typicode.com/posts/1/comments"
                );
}