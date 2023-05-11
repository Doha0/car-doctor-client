import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-50 my-10">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" alt="" />
                    <img src={parts} className="w-1/2 absolute top-1/2 right-4 
                    border-[12px] border-white rounded-lg shadow-2xl" alt="" />
                </div>
                <div className='lg:w-1/2 space-y-5'>
                    <h2 className="text-4xl font-semibold text-orange-600" >About us</h2>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p className="py-6">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.  </p>
                    <button className="btn btn-secondary bg-orange-600">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;