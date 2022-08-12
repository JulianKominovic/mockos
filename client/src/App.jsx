import { Col, Row } from "@nextui-org/react";
import { Grid } from "@nextui-org/react";
import { Container } from "@nextui-org/react";
import { Collections } from "./pages/collections";
import { Header } from "./pages/header";

function App() {
  return (
    <>
      <Header />
      <Grid.Container gap={2} css={{ height: "100%" }} wrap="nowrap">
        <Grid xs={3}>
          <Collections />
        </Grid>
        <Grid xs={8}></Grid>
        <Grid xs={6}></Grid>
      </Grid.Container>
    </>
  );
}

export default App;
