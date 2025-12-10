const Footer = () => {
  return (
    <footer className="relative py-24 border-t border-border/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <h3 className="font-display text-4xl font-semibold text-metallic mb-4">
            BlackLetter
          </h3>
          <p className="text-muted-foreground text-sm font-light mb-12 max-w-md">
            The operating system for modern law. Elevating legal practice through intelligent design.
          </p>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-10 text-sm text-muted-foreground mb-12">
            <a href="#" className="hover:text-foreground transition-colors duration-300 font-light">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors duration-300 font-light">
              Terms of Service
            </a>
            <a href="#" className="hover:text-foreground transition-colors duration-300 font-light">
              Contact
            </a>
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

          {/* Copyright */}
          <p className="text-muted-foreground/40 text-xs font-light tracking-wide">
            © 2024 BlackLetter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;