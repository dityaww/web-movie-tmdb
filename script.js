const api_key = '31c499cf30a379941277e812be4c8246'
const base_url = 'https://api.themoviedb.org/3'
const base_img_path = 'https://image.tmdb.org/t/p/w500'

const mov_url = base_url + `/discover/movie?api_key=${api_key}&sort_by=popularity.desc&page=8`

let GetMovie = (url) => {
    fetch(url)
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        console.log(data.results);
        showMovie(data.results);
    }) 
}

GetMovie(mov_url)

let mv = document.getElementById('mv')

let showMovie = (data) => {
    mv.innerHTML = ""
    data.forEach((movie) => {
        let elem1 = document.createElement('div')
        elem1.classList.add('col-md-3')
        elem1.innerHTML = `       
                <div class="card bg-dark text-white">
                    <img src="${base_img_path+movie.poster_path}" class="card-img-top" alt="">
                    <div class="card-body">
                        <div class="mv-title">
                            <h5 class="fw-bold">${movie.title}</h5>
                        </div>  
                        <div class="mv-rating">
                            <p class="text-warning"><i class="fa-sharp fa-solid fa-star pe-2"></i>${movie.vote_average}</p>
                        </div>  
                        <div class="mv-release">
                            <p><i class="fa-sharp fa-solid fa-calendar pe-2"></i>${movie.release_date}</p>
                        </div>  
                    </div>
                </div>  
        `
        mv.append(elem1)
    })
}

// SEARCH
let btnSearch = document.getElementById('btn-search')

btnSearch.addEventListener('click', (event) => {
    event.preventDefault()
    
    let searchInput = document.getElementById('search').value
    const search_url = base_url + `/search/movie?api_key=${api_key}&query=${searchInput}`

    if(searchInput == ""){
        alert('Inputan masih kosong')
    }else{
        GetMovie(search_url)
    }

    console.log(searchInput)
})


