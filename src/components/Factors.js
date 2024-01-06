import { Row, Col } from "react-bootstrap"

const Factors = ({title, description, icon, }) => {


  return (
   <div className="factors_div d-flex align-items-center p-5">
    <Row>
        <Col className="text-center">
            <p className="factor_icon"><i className={icon}></i></p>
            <p className="factor_title">{title}</p>
            <p className="factor_desc">{description}</p>
        </Col>
    </Row>
   </div>
  )
}

export default Factors