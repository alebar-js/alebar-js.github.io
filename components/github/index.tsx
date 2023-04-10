import React, { useState } from 'react';
import Header from './Header';
import styles from './Github.module.css';
import Sidebar from './Sidebar';
import { githubRepos } from '../../util/constants';
import Link from 'next/link';
import Image from 'next/image';

const Index: React.FC = () => {
  const [repo, setRepo] = useState('');
  return (
    <>
      <Header />
      <div className={styles.pageContainer}>
        <Sidebar>
          <div className={styles.sidebarHeading}>
            <h2 className='font-semibold'>Top Repositories</h2>
            <input
              className={styles.searchbar}
              placeholder='Find a repository...'
            />
          </div>
          <div className={styles.sidebarContent}>
            <div className={styles.sidebarRepoList}>
              {githubRepos.map((repo) => (
                <div className={styles.repoLink}>
                  <Link href={repo.url} target='_blank'>
                    <Image
                      src={repo.avatar}
                      alt='profile image'
                      className={styles.repoAvatar}
                      width={15}
                      height={15}
                    />
                    {`${repo.username}/${repo.name}`}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </Sidebar>
        <div className={styles.content}>Content</div>
      </div>
    </>
  );
};

export default Index;
