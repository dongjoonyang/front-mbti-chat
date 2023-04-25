import styles from './Sidebar.module.scss';
import { Link } from 'react-router-dom';

const SidebarLogin = () => {
  const userNickname = localStorage.getItem('nickname');

  const logout = () => {
    localStorage.clear();
  };

  return (
    <>
      <div className={styles.Sidebar__background} />
      <div className={styles.Sidebar}>
        <div className={styles.Sidebar__CloseIcon}>
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
        <ul className={styles.Sidebar__content}>
          <li className={styles.Sidebar__content__letter1}>
            <Link to='/users/:userId' style={{ textDecoration: 'none' }}>
              {userNickname} 고객님
            </Link>
          </li>
          <li className={styles.Sidebar__content__letter2}>안녕하세요</li>
          <li className={styles.Sidebar__content__line}>
            ____________________________________________________
          </li>
          <li className={styles.Sidebar__content__letter3}>
            <Link to='/users/:userId' style={{ textDecoration: 'none' }}>
              마이페이지
            </Link>
          </li>
          <button type='button' className={styles.Sidebar__content__letter3} onClick={logout}>
            <Link to='/' style={{ textDecoration: 'none' }}>
              로그아웃
            </Link>
          </button>
        </ul>
      </div>
    </>
  );
};

export default SidebarLogin;
