import React, { useState } from 'react';
import Header from './Header';
import styles from './Github.module.css';
import Sidebar from './Sidebar';

const Index: React.FC = () => {
  const [repo, setRepo] = useState('')
  return (
    <>
      <Header />
      <div className={styles.pageContainer}>
        <Sidebar>
          <div className={styles.sidebarHeading}>
            <h2 className='font-semibold'>Top Repositories</h2>
            <input className={styles.searchbar} placeholder='Find a repository...' />
          </div>
          <div className={styles.sidebarContent}>
            <div className={styles.sidebarRepoList}>

            </div>
          </div>
        </Sidebar>
        <div className={styles.content}>Content</div>
      </div>
    </>
  );
};

export default Index;
