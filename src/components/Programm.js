import React from 'react';
import childsports from '../assets/images/childsports.png'
import playingfootball from '../assets/images/playingfootball.png'
import playingcarem from '../assets/images/playingcarem.png'
import arrowjoin from '../assets/images/arrowjoin.png'
import twolines from '../assets/images/twolines.png'
import { Link } from "react-router-dom";


function Programm() {
    return (

        <section className="program">
    <p className="text-center Our-programs-color">Our programs</p>
    <div className='two-lines-img'>
    <img src={twolines} alt="" className="two-lines-img-one" />
    </div>
    <h2 className="text-center">
        Young Minds<br/>
        Adventures and Innovations
    </h2>
    <div className="container box-program-main">
        <div className="row program-mobile-preview">
            <div className="col-lg-4 wid-program">
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
                        <Link to={'/Eventform'} style={{ textDecoration: 'none' }}>
                        <button className='join-now'>Join Now <span><img src={arrowjoin} alt="" className="arrow-circle-img" /></span></button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 wid-program">
                <div className="img1">
                    <div>
                        <img src={playingfootball} alt="" className="child-sports" />
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
                        <Link to={'/Eventform'} style={{ textDecoration: 'none' }}>
                        <button className='join-now'>Join Now <span><img src={arrowjoin} alt="" className="arrow-circle-img" /></span></button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 wid-program">
                <div className="img1">
                    <div>
                        <img src={playingcarem} alt="" className="child-sports" />
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
                        <Link to={'/Eventform'} style={{ textDecoration: 'none' }}>
                        <button className='join-now'>Join Now <span><img src={arrowjoin} alt="" className="arrow-circle-img" /></span></button>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


    );
}

export default Programm;
