import React from 'react'
import styles from './Header.module.css'
import { formatDate } from '../../helpers/formatDate'

export default function Header() {
	return (
		<header className={styles.header}>
			<h1 className={styles.title}>News React App</h1>
			<p className={styles.date}>{formatDate(new Date())}</p>
		</header>
	)
}
