import React from 'react';
import { Form } from 'antd';
import PropTypes from 'prop-types';
import GenericInput from '../common/GenericInput';
import CatalogFormActions from './CatalogFormActions';

const CatalogForm = ({ inputList, formObject, collections,
                       onSave, onClose, onChange, saving, errors }) => {
  inputList = inputList || [];
  return (
    <Form>
      {inputList.map((input, index) => {
        return (
          <GenericInput key={index}
                      type={input.type}
                      category={input.category}
                      collectionType={input.collection}
                      collection={collections[input.type]}
                      name={input.name}
                      value={formObject[input.name]}
                      label={input.displayName}
                      onChange={onChange}/>
        );
      })}
      <CatalogFormActions
          permissions={formObject.objpermissions}
          onSave={onSave}
          onClose={onClose}
      />
    </Form>
  );
};

CatalogForm.propTypes = {
  inputList: PropTypes.array,
  formObject: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object,
  collections: PropTypes.object
};

export default CatalogForm;