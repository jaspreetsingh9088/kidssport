import React from 'react';
import childsports from '../assets/images/childsports.png'
import arrowjoin from '../assets/images/arrowjoin.png'
import twolines from '../assets/images/twolines.png'


function Programm() {
    return (

        <section className="program">
    <p className="text-center">Our programs</p>
    <div className='two-lines-img'>
    <img src={twolines} alt="" className="two-lines-img-one" />
    </div>
    <h2 className="text-center">
        Young Minds<br/>
        Adventures and Innovations
    </h2>
    <div className="container box-program-main">
        <div className="row">
            <div className="col-lg-4">
                <div className="img1">
                    <div>
                        <img src={childsports} alt="" className="child-sports" />
                    </div>
                    <div>
                        <h5 className="Activities">Sports Activities</h5>
                    </div>
                    <div>
                        <p className="sports-pg">
                            Lorem ipsum dolor sit amet consectetur
                            adipiscing elit Ut et massa mi. Aliquam in
                            hendrerit urna. Pellentesque sit amet
                            sapien.
                        </p>
                    </div>
                    <div className="d-flex gap-4 justify-content-between align-items-center">
                        <p className="old">8-18 Years old</p>
                        <button className='join-now'>Join Now <span><img src={arrowjoin} alt="" className="arrow-circle-img" /></span></button>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="img1">
                    <div>
                        <img src={childsports} alt="" className="child-sports" />
                    </div>
                    <div>
                        <h5 className="Activities">Sports Activities</h5>
                    </div>
                    <div>
                        <p className="sports-pg">
                            Lorem ipsum dolor sit amet consectetur
                            adipiscing elit Ut et massa mi. Aliquam in
                            hendrerit urna. Pellentesque sit amet
                            sapien.
                        </p>
                    </div>
                    <div className="d-flex gap-4 justify-content-between align-items-center">
                        <p className="old">8-18 Years old</p>
                        <button className='join-now'>Join Now <span><img src={arrowjoin} alt="" className="arrow-circle-img" /></span></button>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="img1">
                    <div>
                        <img src={childsports} alt="" className="child-sports" />
                    </div>
                    <div>
                        <h5 className="Activities">Sports Activities</h5>
                    </div>
                    <div>
                        <p className="sports-pg">
                            Lorem ipsum dolor sit amet consectetur 
                            adipiscing elit Ut et massa mi. Aliquam in
                            hendrerit urna. Pellentesque sit amet
                            sapien.
                        </p>
                    </div>
                    <div className="d-flex gap-4 justify-content-between align-items-center">
                        <p className="old">8-18 Years old</p>
                        <button className='join-now'>Join Now <span><img src={arrowjoin} alt="" className="arrow-circle-img" /></span></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


    );
}

export default Programm;
