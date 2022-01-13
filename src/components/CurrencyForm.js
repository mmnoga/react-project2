import { Button, Form, Row, Col } from "react-bootstrap";
import { useFetch } from "../hooks/useFetch";
import { useState } from "react";

const CurrencyForm = ({ setResult }) => {
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState("eur");

  const resetForm = () => {
    setAmount(0);
    setCurrency("eur");
  };

  const url = "https://api.nbp.pl/api/exchangerates/rates/a/";
  const { data, isLoading, error } = useFetch(`${url}${currency}/`);

  function handleSubmit(event) {
    event.preventDefault();

    const result = amount * data.rates[0].mid;

    setResult(result);
    resetForm();
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Row className="d-flex align-items-end">
          <Col>
            <Form.Label>Kwota</Form.Label>
            <Form.Control
              type="number"
              placeholder="kwota"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </Col>
          <Col>
            <Form.Label>Waluta</Form.Label>
            <Form.Select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}>
              <option value="eur">EUR</option>
              <option value="usd">USD</option>
              <option value="chf">CHF</option>
            </Form.Select>
          </Col>
          <Col>
            <Button type="submit">Przelicz</Button>
          </Col>
        </Row>
      </Form>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
    </>
  );
};

export default CurrencyForm;
