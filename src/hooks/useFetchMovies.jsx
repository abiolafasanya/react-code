import { useEffect, useState } from 'react'
import { options } from '../data/options'

const useFetchMovies = () => {
    const [loading, setLoading] = useState(false)
    const [movies, setMovies] = useState([])
  
    useEffect(() => {
      setLoading(true)
      fetchMovies()
    }, [])
  
    const fetchMovies = async () => {
    //   const baseUrl = 'https://api.themoviedb.org/3/movie/top_rated'
      const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
      const res = await fetch(`${url}`, options)
      const data = await res.json()
      setMovies(data.results)
      setLoading(false)
    }
    return {loading, movies}
}
 
export default useFetchMovies;