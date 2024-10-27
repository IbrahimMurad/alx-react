import PropTypes from "prop-types";

const NotificationItemShape = {
  id: PropTypes.number.isRequired,
  html: PropTypes.objectOf({
    __html: PropTypes.string,
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default NotificationItemShape;
