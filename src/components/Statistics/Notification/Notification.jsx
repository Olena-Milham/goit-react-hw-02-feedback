import PropTypes from 'prop-types';
import { SmallTitle } from './Notification.styled';

export const Notification=({message})=>(
    <SmallTitle>{message}</SmallTitle>
);

Notification.propTypes={
    message:PropTypes.string.isRequired,
}