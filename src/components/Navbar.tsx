import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const router = useRouter();

  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundImage: 'url("https://img5.pic.in.th/file/secure-sv1/nav1737daffb37b65aaa.png")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '70px',
        padding: '0 2rem',
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      {/* Logo or Navbar Title */}
      <div style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}>
        ITC GLOBAL
      </div>

      {/* Main Links */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          fontSize: '1rem',
        }}
      >
        {['/', '/race-tree', '/scoreboard-overview', '/race-info'].map((path) => {
          const pageName = {
            '/': 'Home',
            '/race-tree': 'Race Tree',
            '/scoreboard-overview': 'Overview',
            '/race-info': 'Race Info',
          }[path];

          return (
            <Link key={path} href={path} passHref>
              <div
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '4px',
                  textAlign: 'center',
                  transition: 'background-color 0.3s ease',
                }}
                className="hoverable-link"
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = '#ef233c';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = 'transparent';
                }}
              >
                {pageName}
                {router.pathname === path && (
                  <div
                    style={{
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      bottom: '-4px',
                      height: '2px',
                      backgroundColor: 'white',
                    }}
                  />
                )}
              </div>
            </Link>
          );
        })}
      </div>

      {/* Responsive CSS for Mobile */}
      <style jsx>{`
        @media (max-width: 768px) {
          nav {
            flex-direction: column !important;
            align-items: center !important;
            height: auto !important;
            padding: 0 1rem !important;
            background-size: cover !important;
            background-position: center !important;
          }

          /* Adjust logo font size and spacing */
          nav > div:first-child {
            font-size: 20px !important;
            margin-bottom: 0.5rem !important;
          }

          /* Stack links vertically on small screens */
          .hoverable-link {
            padding: 0.5rem 0 !important;
            text-align: center !important;
            width: 100% !important;
          }

          /* Adjust font size for links */
          nav > div > div {
            font-size: 0.9rem !important;
          }
        }

        @media (max-width: 480px) {
          nav {
            padding: 0 0.5rem !important;
          }

          /* Further reduce font size for very small screens */
          nav > div:first-child {
            font-size: 18px !important;
          }

          nav > div > div {
            font-size: 0.8rem !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
