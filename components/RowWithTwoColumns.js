import Image from 'next/image'
import Link from 'next/link'
import styles from '@components/RowWithTwoColumns.module.css'

export default function RowWithTwoColumns({ left, right }) {
  return (
    <div className = {styles.row}>
      <div className={`${styles.column} ${styles.left}`}>
        {left}
      </div>
      <div className={`${styles.column} ${styles.right}`}>
        {right}
      </div>
    </div>
  )
}
