import React from 'react';
import Footer from './Footer';
import Navbar2 from './Navbar2';

function Blog() {
  return (
    <div>
      <Navbar2 />
      <div className="blog-container">
        <div className="blog-post">
          <h2 className="blog-title">Quality Riding Gear</h2>
          <div className="blog-content">
            <p className="blog-paragraph">
              Safety comes first, and that starts with the right riding gear. Explore our collection of helmets, jackets, gloves, and boots designed to provide protection without compromising style. Our gear is crafted from durable materials and equipped with advanced features to keep you safe and comfortable on your rides.
            </p>
            <img src="images/blogimg1.png" alt="Image 1" className="blog-image" />
          </div>
        </div>
        <div className="blog-post">
          <h2 className="blog-title">Performance Parts and Accessories</h2>
          <div className="blog-content">
            <img src="images/blogimg2.png" alt="Image 2" className="blog-image" />
            <p className="blog-paragraph">
              Upgrade your bike with high-performance parts and accessories to unleash its full potential. From exhaust systems and performance brakes to sleek mirrors and custom grips, we offer a wide range of products to enhance both the aesthetics and performance of your motorcycle.
            </p>
          </div>
        </div>
        <div className="blog-post">
          <h2 className="blog-title">Explore the Open Road</h2>
          <div className="blog-content">
            <p className="blog-paragraph">
              Embark on your next adventure with confidence and style. Discover our selection of touring gear, luggage solutions, and navigation systems to make every journey memorable. Whether you're planning a weekend getaway or a cross-country tour, we have everything you need to hit the open road with ease.
            </p>
            <img src="images/blogimg3.png" alt="Image 3" className="blog-image" />
          </div>
        </div>
        <div className="blog-post">
          <h2 className="blog-title">Shop with Confidence</h2>
          <div className="blog-content">
            <img src="images/logoblack.png" alt="Image 4" className="blog-image" />
            <p className="blog-paragraph">
              At Riders Zone, we're committed to providing a seamless shopping experience and exceptional customer service. Shop with confidence knowing that your satisfaction is our top priority. With secure payment options, fast shipping, and hassle-free returns, we make it easy to find the perfect gear and accessories for your riding needs.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
