import React from 'react'
import requests from '../../requests'
import Banner from '../BannerNetflixt/Banner'
import Row from '../RowNetflixt/Row'
import Nav from '../NavNetflixt/RowNetflixt/Nav'

function MainScreen() {
return (
     <>
      <Nav/>
      <Banner/>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row  title="Trending Now" fetchUrl={requests.fetchTrending} />
    <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
    <Row title="Familiy Movies" fetchUrl={requests.fetchFamilyMovies}/>
      <Row title="Music Movies" fetchUrl={requests.fetchMusicMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Drama Movies" fetchUrl={requests.fetchDramaMovies} />
    <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
    <Row title="Science Fiction" fetchUrl={requests.fetchScienceFictionMovies}/>
      <Row title="Documentaries Movies" fetchUrl={requests.fetchDocumentaries}/>
          </>
  )
}

export default MainScreen
