import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import { ChannelDetail, Feed, Navbar, SearchFeed, VideoDetail } from "./components/index"

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000", text: "white" }}>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Feed />} />
          <Route path='/video/:id' element={<VideoDetail />} />
          <Route path='/Channel/:id' element={<ChannelDetail />} />
          <Route path='/SearchFeed/:searchTerm' element={<SearchFeed />} />

        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App;