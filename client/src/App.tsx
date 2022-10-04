import React from "react";

import { CssBaseline, Container, Box } from "@mui/material";
import { Navigation } from "./components";

import { Home, Settings, Recommend } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BASE_URL } from "./config";

const client = new ApolloClient({
  uri: BASE_URL,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <CssBaseline />
        <Navigation />
        <Box
          sx={{
            backgroundColor: (theme) => theme.palette.grey[100],
          }}
        >
          <Container maxWidth="xl">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="settings" element={<Settings />} />
              <Route path="recommend" element={<Recommend />} />
            </Routes>
          </Container>
        </Box>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
