import React from 'react';
import fancyicon from '../assets/images/fancyicon.png'
import linethree from '../assets/images/linethree.png'
import groupchild from '../assets/images/groupchild.png'
import ludoplay from '../assets/images/ludoplay.png'
import blocks from '../assets/images/blocks.png'
import arrowright from '../assets/images/arrowright.png'
import listdot from '../assets/images/listdot.png'

function Blog() {
  return (
    <section className="Blog-page">
  <div className='bacground-purple'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <img src={fancyicon} alt="" className="fancy-icons floating" />
                        </div>
                        <div className='col-lg-4'>
                            <h1 className='heading-main text-center'>
                            Blog
                            </h1>
                            <ul className='breadcrumb justify-content-center text-white align-items-center gap-1'>
                                <a href='/' className='nav-link'><li>Home | </li></a>
                                <a href='/' className='nav-link' style={{ color: "#ffb06c" }}><li>Blog</li></a>
                            </ul>
                        </div>
                        <div className='col-lg-4'>
                            <img src={linethree} alt="" className="fancy-iconss floating" />
                        </div>
                    </div>
                    
                </div>
                
            </div>

            <div className='container'>
   
        <div className='row blog-gutter program-mobile-preview'>
            <div className='col-lg-4 wid-program'>
            
              <div className='box-blog'>
              <img src={groupchild} alt="" className="blog-images" />
              <div className='main-display-admin'>
                <div className='d-flex gap-3'>
                <div><p className='admin-name'><span className='color-dot'><img src={listdot} alt="" className="list-dot" /></span> Admin</p></div>
                <div><p className='admin-name'><span className='color-dot'><img src={listdot} alt="" className="list-dot" /></span> Date : 22-11-2024</p></div>
                </div>
              </div>
              <h5>Top 5 Benefits Bootcamp Building Confidence and Character</h5>
              <button type="readmore" className='read-more'>Read More <span className='image-arrow-read'><img src={arrowright} alt="" className="blog-images-arrow" /></span></button>
              </div>
            </div>
            <div className='col-lg-4 wid-program'>
              <div className='box-blog'>
              <img src={ludoplay} alt="" className="blog-images" />
              <div className='main-display-admin'>
                <div className='d-flex gap-3'>
                <div><p className='admin-name'><span className='color-dot'><img src={listdot} alt="" className="list-dot" /></span> Admin</p></div>
                <div><p className='admin-name'><span className='color-dot'><img src={listdot} alt="" className="list-dot" /></span> Date : 22-11-2024</p></div>
                </div>
              </div>
              <h5>Top 5 Benefits Bootcamp Building Confidence and Character</h5>
              <button type="readmore" className='read-more'>Read More <span className='image-arrow-read'><img src={arrowright} alt="" className="blog-images-arrow" /></span></button>
              </div>
            </div>
            <div className='col-lg-4 wid-program'>
              <div className='box-blog'>
              <img src={blocks  } alt="" className="blog-images" />
              <div className='main-display-admin'>
                <div className='d-flex gap-3'>
                <div><p className='admin-name'><span className='color-dot'><img src={listdot} alt="" className="list-dot" /></span> Admin</p></div>
                <div><p className='admin-name'><span className='color-dot'><img src={listdot} alt="" className="list-dot" /></span> Date : 22-11-2024</p></div>
                </div>
              </div>
              <h5>Top 5 Benefits Bootcamp Building Confidence and Character</h5>
              <button type="readmore" className='read-more'>Read More <span className='image-arrow-read'><img src={arrowright} alt="" className="blog-images-arrow" /></span></button>
              </div>
            </div>
            <div className='col-lg-4 wid-program mt-5'>
            
              <div className='box-blog'>
              <img src={groupchild} alt="" className="blog-images" />
              <div className='main-display-admin'>
                <div className='d-flex gap-3'>
                <div><p className='admin-name'><span className='color-dot'><img src={listdot} alt="" className="list-dot" /></span> Admin</p></div>
                <div><p className='admin-name'><span className='color-dot'><img src={listdot} alt="" className="list-dot" /></span> Date : 22-11-2024</p></div>
                </div>
              </div>
              <h5>Top 5 Benefits Bootcamp Building Confidence and Character</h5>
              <button type="readmore" className='read-more'>Read More <span className='image-arrow-read'><img src={arrowright} alt="" className="blog-images-arrow" /></span></button>
              </div>
            </div>
            <div className='col-lg-4 wid-program mt-5'>
              <div className='box-blog'>
              <img src={ludoplay} alt="" className="blog-images" />
              <div className='main-display-admin'>
                <div className='d-flex gap-3'>
                <div><p className='admin-name'><span className='color-dot'><img src={listdot} alt="" className="list-dot" /></span> Admin</p></div>
                <div><p className='admin-name'><span className='color-dot'><img src={listdot} alt="" className="list-dot" /></span> Date : 22-11-2024</p></div>
                </div>
              </div>
              <h5>Top 5 Benefits Bootcamp Building Confidence and Character</h5>
              <button type="readmore" className='read-more'>Read More <span className='image-arrow-read'><img src={arrowright} alt="" className="blog-images-arrow" /></span></button>
              </div>
            </div>
            <div className='col-lg-4 wid-program mt-5'>
              <div className='box-blog'>
              <img src={blocks  } alt="" className="blog-images" />
              <div className='main-display-admin'>
                <div className='d-flex gap-3'>
                <div><p className='admin-name'><span className='color-dot'><img src={listdot} alt="" className="list-dot" /></span> Admin</p></div>
                <div><p className='admin-name'><span className='color-dot'><img src={listdot} alt="" className="list-dot" /></span> Date : 22-11-2024</p></div>
                </div>
              </div>
              <h5>Top 5 Benefits Bootcamp Building Confidence and Character</h5>
              <button type="readmore" className='read-more'>Read More <span className='image-arrow-read'><img src={arrowright} alt="" className="blog-images-arrow" /></span></button>
              </div>
            </div>
            </div>
            
        </div>
</section>

  );
}

export default Blog;
