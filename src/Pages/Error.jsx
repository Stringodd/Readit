import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <section className='section'>
            <h2>404</h2>
            <p>Sayfa bulunamadı</p>
            <Link to='/'>Anasayfaya dön</Link>
        </section>
    );
};
export default Error;