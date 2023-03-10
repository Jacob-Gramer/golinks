import { useState, useEffect, useRef } from 'react'
import Modal from 'react-modal'
import CommitsList from './CommitsList'
import styles from '../styles/repos.module.css'

const Repo = ({ repo }) => {

  const [modalOpen, setModalOpen] = useState(false);
  const ref = useRef(null)

  useEffect(() => {

    const closeModal = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setModalOpen(false)
      }
    }

    document.addEventListener('click', closeModal, { capture: true });

    return () => {
      document.removeEventListener('click', closeModal, { capture: true })
    }
  }, [repo])

  return (
    <div className={styles.repo} >
      <div ref={ref}>
        <Modal
          isOpen={modalOpen}
          className={styles.modal}
          overlayClassName={styles.overlay}
          ariaHideApp={false}>
          <div className={styles.commitTitle}>Commits for {repo.name}</div>
          <CommitsList url={repo.commits_url.substr(0,repo.commits_url.length-6)} />
        </Modal>
      </div>
      <h3>{repo.name}</h3>
      <button
        className={styles.asText}
        onClick={() => {
          setModalOpen(true)
        }}>commits</button>
      <div>
        <div className={styles.description}><b>Description:</b>&nbsp; {repo.description}</div>
        <div className={styles.repoData}>
          <span className={styles.item1}><b>Language:</b>&nbsp; {repo.language}</span>
          <span className={styles.item2}><b>Stars:</b>&nbsp; {repo.stargazers_count}</span>
          <span className={styles.item3}><b>Forks:</b>&nbsp; {repo.forks_count}</span>
          <span className={styles.item4}><b>Date:</b>&nbsp; {repo.created_at.substring(0,repo.created_at.length-10)}</span>
        </div>
      </div>
    </div>
  )
}

export default Repo;