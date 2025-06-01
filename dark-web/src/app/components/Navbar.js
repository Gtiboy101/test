import Button from './components/Button'
import Tag from './components/Tag'

const navigationButtons = [
  {
    title: 'About',
    href: '/about',
    isNew: true
  },
  {
    title: 'Home',
    href: '/',
    isNew: false
  },
]

function Navbar() {
    return (
      <nav className="flex justify-between bg-indigo-50 p-6 items-center sticky top-0 shadow-lg">
        <div className="logo bg-indigo-600 rounded-full p-6 hover:scale-105 transition-all cursor-pointer"></div>
        <div className="flex gap-x-4 items-center">
          {navigationButtons.map(({href,title,isNew}) => (
            <>

            <Button href={href} classNameProp='flex gap-2' title={title}>
            {isNew && <Tag classNames="mr-2 animate-ping"/>}
              {title}</Button>
            </>
    ))}
        </div>
      </nav>
    )
  }
