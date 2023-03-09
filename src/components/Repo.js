import React, { useState, useEffect, useRef } from 'react'
import Modal from 'react-modal'
import Commits from './Commits'
import styles from '../styles/repos.module.css'

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    width: 400,
  },
};

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
  }, [])

  return (
    <div className={styles.repo} onClick={() => {
      setModalOpen(true)
    }}>
      <Modal isOpen={modalOpen} style={customStyles} ariaHideApp={false} ref={ref}>
        <Commits />
      </Modal>
      <h3>{repo.name}</h3>
      <div>
        <div className={styles.description}>{repo.description}</div>
        <div className={styles.repoData}>
          <span>Language: {repo.language}</span>
          <span>Stars: {repo.stargazers_count}</span>
          <span>Forks: {repo.forks_count}</span>
          <span>Date: {repo.created_at.substring(0,repo.created_at.length-10)}</span>
        </div>
      </div>
    </div>
  )
}

export default Repo;