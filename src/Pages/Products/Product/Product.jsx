import PropTypes from 'prop-types';
import icon1 from '../../../../public/images/icons/delete 1.png'
import icon2 from '../../../../public/images/icons/Frame.png'
import icon3 from '../../../../public/images/icons/Frame1 .png'
import { Link } from 'react-router-dom';


const Product = ({ product, handleDelete }) => {

    const { _id, photo, price, category, name, taste } = product


    return (
        <div>
            <div className="card card-compact shadow-md p-2">
                <figure><img className='h-[220px] w-full' src={photo} alt="Shoes" /></figure>
                <div className="card-body">

                    <h2 className='text-xl'>{name}</h2>
                    <div className='flex justify-between mt-2'>
                        <h2>Price: ${price} </h2>
                        <h2>{category}</h2>
                        <h2>Taste: {taste} </h2>
                    </div>

                    <div className='flex justify-around items-center mt-4'>
                        <button>  <img className='bg-[#D2B48C] w-6 h-6' src={icon2} alt="" /> </button>

                        <Link to={`/updateCoffee/${_id}`}>
                            <button> <img className='w-6 h-6' src={icon3} alt="" /> </button>
                        </Link>

                        <button onClick={() => handleDelete(_id)}> <img className='w-6 h-6' src={icon1} alt="" /> </button>
                    </div>
                </div>
            </div>
        </div >
    );
};

Product.propTypes = {
    product: PropTypes.object.isRequired,
    handleDelete: PropTypes.func.isRequired
}

export default Product;