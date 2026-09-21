import './Footer.css'

// Instagram de la cuenta (vann.hobi).
const INSTAGRAM_URL = 'https://www.instagram.com/vann.hobi?stkn=YWJiM3lucGU3NG9s'

export default function Footer() {
  return (
    <footer className="footer">
      <a
        className="footer__link"
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="footer__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9"
               strokeLinecap="round" strokeLinejoin="round">
            <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
            <circle cx="12" cy="12" r="4.2" />
            <circle cx="17.6" cy="6.4" r="1.15" fill="currentColor" stroke="none" />
          </svg>
        </span>
        <span className="footer__text">Si me quieres conocer puedes dar clic aquí : D</span>
      </a>
      <p className="footer__copy">created by: vann.hobi</p>
      <p className="footer__copy">Proyecto de fans, no oficial</p>
    </footer>
  )
}
