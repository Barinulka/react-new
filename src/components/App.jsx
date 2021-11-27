import { Container, Grid } from "@material-ui/core";
import "./App.scss";
import { Chats } from "./Chats";

import { Header } from "./Header";
import { Messages } from "./Messages";

function App() {
  return (
    <div className="app">
      <Header />
      <Container maxWidth={"lg"}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Chats />
          </Grid>
          <Grid item xs={10}>
            <Messages />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
