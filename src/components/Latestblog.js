import React from 'react';
import groupchild from '../assets/images/groupchild.png'
import ludoplay from '../assets/images/ludoplay.png'
import blocks from '../assets/images/blocks.png'
import arrowright from '../assets/images/arrowright.png'
import listdot from '../assets/images/listdot.png'

function Latestblog() {
  return (
    <section className="latest-blog">
        <div className='container'>
        <h2 class="text-center text-center mt-0">Latest Blog</h2>
        <p class="interactive interactive-one">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. <br />Aliquam in hendrerit urna.</p>
        <div className='row blog-gutter'>
            <div className='col-lg-4'>
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
            <div className='col-lg-4'>
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
            <div className='col-lg-4'>
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
        <script>
          
        </script>
</section>

  );
}

export default Latestblog;
