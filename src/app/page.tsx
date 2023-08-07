import Logo from './components/Logo'
import Menu from './components/header/menu-items'
import './globals.css'

export default function Home() {
  return (
    <div>
      <header className='header'>
          <Logo/>
          <Menu/>
      </header>
    </div>
  )
}
