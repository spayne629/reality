import Container from 'react-bootstrap/Container';
import Reality from './components/Reality';

const App = () => {
  return (
    <>
      <Container className="d-flex justify-content-center p-3" fluid>
        <h3 className="text-body-tertiary text-center">a man's true character is defined by<br /><small>what he does when no one is looking.</small></h3>
      </Container>
      <Container>
        <Reality />
      </Container>
    </>
  )
}

export default App;
