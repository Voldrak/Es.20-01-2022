import LayoutDefaults from "./../layout/index";

import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <LayoutDefaults>
    <div className={styles.container}>
      <h1>Index</h1>
    </div>
    </LayoutDefaults>
  )
}
