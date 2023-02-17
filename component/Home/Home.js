import React, { Fragment } from "react";
import "./Home.css";
import Product from "./Product.js";
// import book from '../../../images/book.png';



import MetaData from "../layout/MetaData";
<img src={<book />} alt="" />

const product = {
    name: "Tshirt",
    // image: [{ url: "https://images.search.yahoo.com/images/view;_ylt=Awr.10hTeMZjkxs_LCOJzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2NjZDIzYmFjZjU4OWZiYzUwYzJlYjJiOWY5MDc0ZmRhBGdwb3MDMTcEaXQDYmluZw--?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dt-shirt%2Bdesign%26type%3DE210US885G91712%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D17&w=900&h=900&imgurl=www.seoclerk.com%2Fpics%2F445925-3Ch2Km1498579737.jpg&rurl=https%3A%2F%2Fwww.seoclerk.com%2Fdesign%2F445925%2FT-Shirt-Summer-Design&size=127.4KB&p=t-shirt+design&oid=ccd23bacf589fbc50c2eb2b9f9074fda&fr2=piv-web&fr=mcafee&tt=T-Shirt+Summer+Design+for+%245+-+SEOClerks&b=0&ni=21&no=17&ts=&tab=organic&sigr=9U3Snkbb.3Ci&sigb=po46lYfQWzHD&sigi=RlEns1H.sjgu&sigt=ZLh._4gO5o.V&.crumb=pBzIcafzmuA&fr=mcafee&fr2=piv-web&type=E210US885G91712" }],
    print: "$25",
    _id: "raviraj",
};
const Home = () => {
    return (


        <Fragment>
            <logo />
            <MetaData title="Home" />

            <div className="homes">

                <h2 className="homeHeading">FEATURED PRODUCTS</h2>
            </div>
            <div className="container" id="container">
                <Product product={product} />
            </div>

        </Fragment>

    )
};
export default Home;