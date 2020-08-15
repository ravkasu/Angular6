import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  moviesTotal:any;
  moviesData:any;
  movies: any = [];
  movieyear: any = [];
  inputVal:any;
  movielisterror:String;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }
  onPressEnter($event){
    console.log("Entered text: ",$event.target.value);
    this.inputVal = $event.target.value;
  // } 
  // getmovieslist() {
    this.apiService.getmoviedata($event).subscribe((data: any) => {
      console.log(data);
      this.moviesTotal = data.total;
      this.moviesData = data.data;
      // seperating the year from data
      // this.movies = data.data.map(function (item) {
      //   return item.Year;
      // })
      // console.log(this.movies);
      // // unique year
      // this.movieyear = Array.from(new Set(this.movies));
      // console.log(this.movieyear);
      // if(this.inputVal === this.movieyear){
      //   alert("hi");
      //   this.moviesData = data.data;
      // }
      // else{
      //   this.movielisterror="No Records Found";
      // }
    });
  }

}
