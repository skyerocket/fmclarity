import React from 'react';
import { gql, useMutation } from '@apollo/client';

const AddContractorMutation = gql`
  mutation add($name: String!, $email: String!, $telephone: String!, $services: [String!]) {
    addContractor(
      name: $name, email: $email, telephone: $telephone, services: $services
    ) {
        name,
        email,
        telephone
        services,
      }
  }
`

export default function AddContractor() {
  let nameInput;
  let emailInput;
  let telephoneInput;
  let servicesInput;
  const [add, { data }] = useMutation(AddContractorMutation);
  
  const onsubmit = event => {
    event.preventDefault();
    add({variables: {
      name: String(nameInput.value),
      email: String(emailInput.value),
      telephone: String(telephoneInput.value),
      services: [servicesInput.value, 'just to show this is a list'].toString()
    }})
    nameInput.value = '';
    emailInput.value = '';
    telephoneInput.value = '';
    servicesInput.value = '';
  }

  return (
    <form onSubmit={onsubmit}>
      <label>
        Name:
        <input ref={node => {nameInput = node}} type="text" name="name" />
      </label>
      <label>
        Email:
        <input ref={node => {emailInput = node}} type="text" name="email" />
      </label>
      <label>
        Telephone:
        <input ref={node => {telephoneInput = node}} type="text" name="telephone" />
      </label>
      <label>
        Services:
        <input ref={node => {servicesInput = node}} type="text" name="services" />
      </label>
      <input type="submit" value="Add Contractor" />
    </form>
  );
}