import logoimg from '../assets/img.png'
import './header.css'

export default function Header() {
  return( <header>
        <img src={logoimg} alt='Quiz'className='image'/>
        <h1 className='header'>ReactQuiz</h1>
    </header>
  )
}
