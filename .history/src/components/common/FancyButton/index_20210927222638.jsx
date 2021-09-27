import { forwardRef } from 'react';
import styles from './FancyButton.module.css';

const FancyButton = forwardRef(({ href, text, onClick }, ref) => (
  <a ref={ref} href={href} onClick={onClick} className={styles.FancyButton}>
    {text}
  </a>
));

export default FancyButton;