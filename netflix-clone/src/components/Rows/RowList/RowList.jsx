import { useState } from 'react'
import Row from '../Row/Row'
import requests from '../../../utils/requests';


function RowList() {

  const [trailerPlay, setTrailerPlay] = useState(null)


  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
        trailerPlay={trailerPlay}
        setTrailerPlay={setTrailerPlay}
      />
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        trailerPlay={trailerPlay}
        setTrailerPlay={setTrailerPlay}
      />
      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRatedMovies}
        trailerPlay={trailerPlay}
        setTrailerPlay={setTrailerPlay}
      />
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        trailerPlay={trailerPlay}
        setTrailerPlay={setTrailerPlay}
      />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        trailerPlay={trailerPlay}
        setTrailerPlay={setTrailerPlay}
      />
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        trailerPlay={trailerPlay}
        setTrailerPlay={setTrailerPlay}
      />
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        trailerPlay={trailerPlay}
        setTrailerPlay={setTrailerPlay}
      />
      <Row
        title="TV Shows"
        fetchUrl={requests.fetchTvShow}
        trailerPlay={trailerPlay}
        setTrailerPlay={setTrailerPlay}
      />
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        trailerPlay={trailerPlay}
        setTrailerPlay={setTrailerPlay}
      />
    </>
  );
}

export default RowList