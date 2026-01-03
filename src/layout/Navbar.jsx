const navLinks = [
    {href: "#about", label:"About"},
    {href: "#experience", label:"Experience"},
    {href: "#projects", label:"Projects"},
    {href: "#testimonials", label:"Testimonials"},
]

export const Navbar =() => {
    return (
        <header>
            <nav>
                <a>
                    SC<span>.</span>
                </a>

                {/* Desktop Navigation */}
                <div>
                    <div>
                        {navLinks.map((link) => (
                            <a href={link.href}>{link.label}</a>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    )
}