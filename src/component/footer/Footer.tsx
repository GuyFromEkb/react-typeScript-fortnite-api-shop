import './footer.scss';

const Footer = () => {
  return (
    <footer className='page-footer light-blue darken-4'>
      <div className='container'>
        © {new Date().getFullYear()} React, My Learning Project
      </div>
    </footer>
  );
};

export default Footer;
