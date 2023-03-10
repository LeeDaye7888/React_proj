import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MyInfo() {
  return (
    <Container>
    <Row>
      <Col style={{marginTop : "50px"}} >
      <div style={{marginLeft : "200px"}}> <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" height="250px" width="250px"></img></div></Col>
      <Col>
      <center style={{marginTop : "120px"}}>
            <table>
                <thead>
                    <tr>
                        <th><h4>My profile</h4></th>
                    </tr>
                </thead>
                <tbody>
            <tr>
              <td>Name</td><td>KimHansung</td>
            </tr>
            <tr>
              <td>E-mail</td><td> hansung123@hansung.ac.kr</td>
            </tr>
            <tr>
              <td>Address</td><td> 3708 S Las Vegas Blvd</td>
            </tr>
          </tbody>
            </table>
            </center>
            </Col>
    </Row>
  </Container>
      
            
  )
}

export default MyInfo;