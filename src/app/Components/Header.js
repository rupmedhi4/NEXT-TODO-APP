import style from '@/app/Components/Style/Header.module.css'
import Link from 'next/link'

export default function Header() {
  return (
    <>
      <div className={style.main_div}>
        <h1>TODO APP</h1>
        <Link href="/addtodo" className={style.link}>Add Todo</Link>
      </div>
    </>
  )
}
