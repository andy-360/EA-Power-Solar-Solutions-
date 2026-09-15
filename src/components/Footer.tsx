const Footer = () => {
  return (
    <footer className="bg-ink text-paper py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-gold mb-4">EA Power & Solar</h4>
            <p className="text-paper/70 text-sm">Reliable Power, Brighter Future</p>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Solutions</h5>
            <ul className="space-y-2 text-sm text-paper/70">
              <li><a href="#solutions" className="hover:text-gold">Solar Systems</a></li>
              <li><a href="#solutions" className="hover:text-gold">Battery Storage</a></li>
              <li><a href="#solutions" className="hover:text-gold">Electrical</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Company</h5>
            <ul className="space-y-2 text-sm text-paper/70">
              <li><a href="#about" className="hover:text-gold">About</a></li>
              <li><a href="#projects" className="hover:text-gold">Projects</a></li>
              <li><a href="#contact" className="hover:text-gold">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Legal</h5>
            <ul className="space-y-2 text-sm text-paper/70">
              <li><a href="#" className="hover:text-gold">Privacy</a></li>
              <li><a href="#" className="hover:text-gold">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-paper/10 pt-8 text-center text-sm text-paper/60">
          <p>&copy; 2025 EA Power & Solar Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
