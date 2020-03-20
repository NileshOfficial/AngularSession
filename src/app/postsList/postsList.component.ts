import { Component, OnInit } from '@angular/core';
import { PostsDataFetchService } from '../services/postsDataFetchService';
import post from '../objectTemplates/postTemplate';

@Component ({
    selector: 'app-posts-list',
    templateUrl: './postsList.component.html',
    styleUrls: ['./postsList.component.css'],
    providers: [PostsDataFetchService]
})
export class PostsListComponent implements OnInit {
    postData: Array<post> = [];
    
    constructor(private apiInterface: PostsDataFetchService) {}

    ngOnInit() {
        this.apiInterface.getPosts().
        subscribe((posts: Array<post>) => {
            this.postData = posts;
            console.log(posts);
        });
    }
}