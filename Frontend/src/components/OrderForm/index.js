import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Form,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input
} from 'reactstrap';
import { FaMapPin, FaPhone } from 'react-icons/fa';

const OrderForm = ({
  clientPhone,
  clientAddress,
  clientName,
  order,
  onFieldChange,
  onSubmit
}) => {
  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Input
          required
          type="text"
          name="client_name"
          id="client_name-id"
          placeholder="Nombre del cliente"
          value={clientName}
          onChange={onFieldChange}
        />
      </FormGroup>
      <FormGroup>
        <InputGroup>
          <Input
            required
            type="text"
            name="client_phone"
            id="client_phone-id"
            placeholder="Teléfono del cliente"
            value={clientPhone}
            onChange={onFieldChange}
          />
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <FaPhone />
            </InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <InputGroup>
          <Input
            required
            type="text"
            name="client_address"
            id="client_address-id"
            placeholder="Dirección del cliente"
            value={clientAddress}
            onChange={onFieldChange}
          />
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <FaMapPin />
            </InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <Input
          required
          type="text"
          name="order"
          id="order-id"
          placeholder="Orden"
          value={order}
          onChange={onFieldChange}
        />
      </FormGroup>
      <Button color="primary" className="float-right">
        Enviar
      </Button>
    </Form>
  );
};

OrderForm.defaultProps = {
  clientPhone: '',
  clientAddress: '',
  clientName: '',
  order: ''
};

OrderForm.propTypes = {
  clientPhone: PropTypes.string,
  clientAddress: PropTypes.string,
  clientName: PropTypes.string,
  order: PropTypes.string,
  onFieldChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default OrderForm;
