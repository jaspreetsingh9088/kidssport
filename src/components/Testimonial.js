import React from 'react';
import imagetestominal from '../assets/images/imagetestominal.png'
import profilereview from '../assets/images/profilereview.png'
import quotegreen from '../assets/images/quotegreen.png'
import childgroup from '../assets/images/childgroup.png'

function Testimonial() {
  return (
    <>
    <section className="Testimonial">
    <div className="container purple-lg-review">
        <div className="row align-items-center">
            <div className="col-lg-7">
                <div className="text-center">
                    <div>
                        <h2 class="text-center text-white">Testimonial</h2>
                    </div>
                    <div>
                        <img src={quotegreen} alt="" className="quote" />
                    </div>
                    <div className="d-flex">
                        <p className="letter">
                            My 10-year-old daughter recently participated in the kids'
                            sports bootcamp offered by Kidscamp, and I can't say enough positive things
                            about her experience. From start to finish, the program was incredibly
                            well-organized, engaging, and fun for kids of all levels.
                        </p>
                    </div>
                    <div>
                        <img src={profilereview} alt="" className="girl-img" />
                        <h5 className="Jessica">Jessica</h5>
                        <p className="Gareema">Mother of Gareema</p>
                    </div>
                </div>
            </div>

            <div className="col-lg-5">
                <div>
                    <img src={imagetestominal} alt="" className="image-testimonial floating" />
                </div>
            </div>
        </div>
    </div>
</section>
<section className='child-group'>
    <div className='container'>
<img src={childgroup} alt="" className="child-group-img" />
</div>
</section>
</>
  );
}

export default Testimonial;
