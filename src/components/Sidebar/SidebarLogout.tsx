import styles from './Sidebar.module.scss';
import { Link } from 'react-router-dom';

const SidebarLogout = () => {
  return (
    <div className={styles.SidebarLogout}>
      <div className={styles.SidebarLogout__CloseIcon}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          viewBox='0 0 16 16'
        >
          <path d='M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z' />
        </svg>
        <path
          fillRule='evenodd'
          d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
        />
      </div>
      <ul className={styles.SidebarLogout__content}>
        <li className={styles.SidebarLogout__content__loginPlz}>로그인 해주세요</li>
        <li className={styles.SidebarLogout__content__login}>
          <Link to='/login'>로그인</Link>
        </li>
        <li className={styles.SidebarLogout__content__signup}>
          <Link to='/signup'>회원가입</Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarLogout;
