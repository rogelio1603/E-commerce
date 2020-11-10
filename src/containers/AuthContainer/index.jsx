/**
 * Estrutura base de cada container
 */
import { connect } from 'react-redux';
import { Auth } from './Auth';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispath) => {
  return {
    nani: (value) => dispath(value),
  };
};

const AuthContainer = connect(mapStateToProps, mapDispatchToProps)(Auth);

export default AuthContainer;
