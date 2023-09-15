import { useEffect, useState } from 'react'
import { options } from '../data/options'

const useFetchMovie = (id) => {

    const [loading, setLoading] = useState(false)
    const [movie, setMovie] = useState([])
    useEffect(() => {
      setLoading(true)
      fetchMovies()
    }, [])
  
    const fetchMovies = async () => {
    //   const baseUrl = 'https://api.themoviedb.org/3/movie/top_rated'
      const url = `https://api.themoviedb.org/3/movie/${id}?append_to_response=videos,images,genres`;
      const res = await fetch(url, options)
      const data = await res.json()
      // console.log(data)
      setMovie(data)
      setLoading(false)
    }
    return {loading, movie}
}
 
export default useFetchMovie;