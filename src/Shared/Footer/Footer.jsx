import moment from 'moment';

const Footer = () => {
  return (
    <>
      <div className="footer footer-center p-4 bg-base-300 text-base-content">
        <aside>
          <p>Copyright © {moment().format("Y")} - All right reserved by ACME Industries Ltd</p>
        </aside>
      </div>
    </>
  );
};

export default Footer;
