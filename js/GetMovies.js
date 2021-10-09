export class GetMovies {
  constructor() {
    this.linkOne = document.getElementById("linkOne");
    this.linkTwo = document.getElementById("linkTwo");
    this.linkThree = document.getElementById("linkThree");
    this.linkFour = document.getElementById("linkFour");
    this.linkFive = document.getElementById("linkFive");
    this.inputSearchInAPI = document.getElementById("searchInAPI");
    this.inputSearchInPage = document.getElementById("searchInPage");
    this.allMovies;
    this.moviesContainer = document.getElementById("moviesContainer");
    this.nowPlaying();
    this.linkOne.addEventListener("click" , this.nowPlaying.bind(this)); 
    this.linkTwo.addEventListener("click" , this.popular.bind(this));
    this.linkThree.addEventListener("click" , this.topRated.bind(this));
    this.linkFour.addEventListener("click" , this.trending.bind(this));
    this.linkFive.addEventListener("click" , this.upcoming.bind(this));
    this.inputSearchInAPI.addEventListener("keyup" , this.searchInAPI.bind(this));
    this.inputSearchInPage.addEventListener("keyup" , this.searchInPage.bind(this));
  }
  async nowPlaying() {
    this.allMovies = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR1HUBTbEEbza_cbq0onB8g6ZkK0xau9NPUHjQjoYDgdd_6NnCJudZW0KNI`);
    this.result = await this.allMovies.json();
    this.results = this.result.results ;
    // console.log(this.results);
    this.displayMovies();
  }
  async popular() {
    this.allMovies = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR1HUBTbEEbza_cbq0onB8g6ZkK0xau9NPUHjQjoYDgdd_6NnCJudZW0KNI`);
    this.result = await this.allMovies.json();
    this.results = this.result.results ;
    // console.log(this.results);
    this.displayMovies();
  }
  async topRated() {
    this.allMovies = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR1HUBTbEEbza_cbq0onB8g6ZkK0xau9NPUHjQjoYDgdd_6NnCJudZW0KNI`);
    this.result = await this.allMovies.json();
    this.results = this.result.results ;
    // console.log(this.results);
    this.displayMovies();
  }
  async trending() {
    this.allMovies = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR1HUBTbEEbza_cbq0onB8g6ZkK0xau9NPUHjQjoYDgdd_6NnCJudZW0KNI`);
    this.result = await this.allMovies.json();
    this.results = this.result.results ;
    // console.log(this.results);
    this.displayMovies();
  }
  async upcoming() {
    this.allMovies = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR1HUBTbEEbza_cbq0onB8g6ZkK0xau9NPUHjQjoYDgdd_6NnCJudZW0KNI`);
    this.result = await this.allMovies.json();
    this.results = this.result.results ;
    // console.log(this.results);
    this.displayMovies();
  }
  async searchInAPI() {
    this.allMovies = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR1HUBTbEEbza_cbq0onB8g6ZkK0xau9NPUHjQjoYDgdd_6NnCJudZW0KNI&language=en-US&query=${this.inputSearchInAPI.value}`);
    this.result = await this.allMovies.json();
    this.results = this.result.results ;
    // console.log(this.results);
    this.displayMovies();
  }
  searchInPage() {
    this.data = ``;
    for(let i = 0 ; i < this.results.length ; i++ ){
      if(this.results[i].title.includes(this.inputSearchInPage.value) == true) {
        this.data += `  
        <div class="col-md-6 col-lg-4 shadow my-3">
          <div class="movie-card shadow rounded position-relative">
            <div class="poster">
              <img src="https://image.tmdb.org/t/p/w500${this.results[i].poster_path}" class="img-fluid rounded" />
              <div class="outer-layer d-flex align-items-center">
                <div class="movie-info p-0">
                  <h2>${this.results[i].title}</h2>
                  <p>${this.results[i].overview}</p>
                  <p>rate: ${this.results[i].vote_average}</p>
                  <p>${this.results[i].release_date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        `
      }
      this.moviesContainer.innerHTML = this.data ;
    }
  }
  displayMovies() {
    this.data = ``;
    for(let i = 0 ; i < this.results.length ; i++ ){
      this.data += `  
      <div class="col-md-6 col-lg-4 shadow my-3">
        <div class="movie-card shadow rounded position-relative">
          <div class="poster">
            <img src="https://image.tmdb.org/t/p/w500${this.results[i].poster_path}" class="img-fluid rounded" />
            <div class="outer-layer d-flex align-items-center">
              <div class="movie-info p-0">
                <h2>${this.results[i].title}</h2>
                <p>${this.results[i].overview}</p>
                <p>rate: ${this.results[i].vote_average}</p>
                <p>${this.results[i].release_date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      `
      this.moviesContainer.innerHTML = this.data ;
    }
  }
}