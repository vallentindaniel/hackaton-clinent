import { Component } from '@angular/core';
import { PostsService } from '../../_services/posts.service';
import { GetImageService } from '../../_services/get-image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  postsList: any;
  images: any;

  constructor(private posts: PostsService, private getImageService: GetImageService) {
    posts.getAllPosts().subscribe(data => {
      this.postsList = data
      let count = data.length
      getImageService.getImages('politic').subscribe(data => {
        this.images = data
      })     // console.log(JSON.stringify(data))
    })
  }

  ngOnInit(): void {

  }
}
