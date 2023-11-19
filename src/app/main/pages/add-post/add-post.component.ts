import { Component } from '@angular/core';
import { PostsService } from '../../_services/posts.service';
import { AuthService } from '../../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent {

  user: any;
  title:string = 'test';
  message: string = 'test'

  constructor(private posts: PostsService, private auth: AuthService, private router: Router){}

  addPost(){
    this.auth.getUser().subscribe(user =>{
      this.user = user;
      this.posts.addPost(this.user.id, this.title, this.message).subscribe({
        next: (data) => {
          console.log(JSON.stringify(data))
          this.router.navigate(['/home']);
        },
        complete: () => { },
        error: (error) => {
          console.error('Login failed:', JSON.stringify(error));
          
        }
      })
    })
  }

}
