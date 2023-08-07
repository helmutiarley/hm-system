import Menu from './components/header/menu-items'
import './globals.css'

export default function Home() {
  return (
    <div>
      <header className="flex items-center justify-between p-3 border-red-600 border">
        <div className="flex flex-row gap-2 items-center">
          <img
            src="https://dynamic.brandcrowd.com/asset/logo/17702da1-970e-4d7d-97a2-ab3756527d15/logo-search-grid-1x?logoTemplateVersion=1&v=637938158484330000&text=HM"
            width={40}></img>
          <span className="font-bold">HM System</span>
        </div>
        <Menu />
      </header>
    </div>
  )
}
