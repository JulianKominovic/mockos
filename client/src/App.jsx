import { Col, Row } from "@nextui-org/react";
import { Container } from "@nextui-org/react";
import { Collections } from "./pages/collections";
import { Header } from "./pages/header";

function App() {
  // const [data, setData] = useState();
  // const urlWithProxy = "/api/v1";

  // function getDataFromServer() {
  //   axios
  //     .get(urlWithProxy)
  //     .then((res) => setData(res.data))
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }

  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <Col>
            <Collections />
          </Col>
          <Col>
            <Collections />
          </Col>
          <Col>
            <Collections />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
