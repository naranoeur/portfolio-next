import React from 'react';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import styles from './popupScreen.module.scss';



class popupScreen extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
  }
  componentDidMount() {
    disableBodyScroll(this.schedulerRef);
  }
  componentWillUnmount() {
    enableBodyScroll(this.schedulerRef);
  }
  render() {
    const {
      disableClickOut,
      onClose,
      children
    } = this.props

    return (
      <div>
        <div className={styles.screen} onClick={!disableClickOut ? onClose : undefined}/>
        <div className={styles.screenPositioner}>
          <div className={styles.contentContainer} ref={this.containerRef}>
            <img
              className={styles.times}
              src="/svgs/times.svg"
              onClick={onClose}
            />
            {children}
          </div>
        </div>
      </div>
    )
  }
}

export default popupScreen;
