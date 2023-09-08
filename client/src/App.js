import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function App() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Ar Salon & Day Spa</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <p className="text-center mt-5">
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </Container>
    </>
  );
}

export default App;
