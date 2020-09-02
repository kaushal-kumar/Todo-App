import React from 'react';
import PropTypes from 'prop-types';

import FormContainer from '../../containers/FormContainer';
import FormEditContainer from '../../containers/FormEditContainer';
import FormItemContainer from '../../containers/FormItemContainer';

import './Content.css';

const contentPropTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
  editingItem: PropTypes.shape({
    value: PropTypes.string,
    id: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
};

const Content = props => {
  
  return (
    <div className={props.className}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Welcome!</h5>
                <p className="card-text">Add some items to your list:</p>
                <div className="d-inline-block">
                  <FormContainer />
                </div>
              </div>
            </div>
          </div>
        </div>
        {props.items.length ? (
          <div className="row justify-content-center">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="content__todos">
                <ul className="list-group content__todos__ul">
                  {props.items.map((item) => (
                    <div className="content__todos__li">
                      {props.editingItem.id === item.id ? (
                        <FormEditContainer item={item} />
                      ) : (
                        <FormItemContainer item={item} />
                      )}
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

Content.propTypes = contentPropTypes;

export default Content;
