import React from 'react'
import styles from './styles'

export default function Avatar({ src, username }) {
  return (
    <>
      <div>
        <img src={src} width={32} height={32} alt={`Avatar of ${username}`} />
        <h2>{username}</h2>
      </div>
      <style jsx>{styles}</style>

    </>
  )
}
