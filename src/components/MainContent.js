import { useState } from "react";
import { Row, Col } from "react-bootstrap";

import Result from "./Result";
import CurrencyForm from "./CurrencyForm";

const MainContent = () => {
  const [result, setResult] = useState(0);

  return (
    <Row className="d-inline-flex align-items-end">
      <Col>
        <CurrencyForm setResult={setResult} />
      </Col>
      <Col>
        <Result result={result} />
      </Col>
    </Row>
  );
};

export default MainContent;
