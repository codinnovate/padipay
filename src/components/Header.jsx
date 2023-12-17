import Logo from '../components/Logo'
import Button from '../components/Button';

const navItems = [
    {name:"Home"},
    {name:"About Us"},
    {name:"Pricing"},
    {name:"Features"},
]


const Header = () => {
    return (
        <div className="flex items-center w-full justify-between">
            <div className="flex items-center gap-[3.18em]">
                <Logo />
                <div className="hidden md:items-center gap-6">
                    {navItems.map(item => (
                        <h2
                            className='font-medium  cursor-pointer transition-all text-xl hover:text-[#F55] hover:font-bold'
                            key={item.name}>
                            {item.name}
                        </h2>
                ))}
                </div>
            </div>
            <Button
                text='Download'
                className='bg-black'
                
            />

        </div>
    )
}

export default Header
