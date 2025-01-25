import PropTypes from 'prop-types';
import NavBar from '@/components/NavBar';

function ViewDirectorBasedOnUserAuthStatus({ children }) {
  return (
    <>
      <NavBar /> {/* NavBar only visible if user is logged in and is in every view */}
      {children}
    </>
  );
}

export default ViewDirectorBasedOnUserAuthStatus;

ViewDirectorBasedOnUserAuthStatus.propTypes = {
  children: PropTypes.node.isRequired,
};
