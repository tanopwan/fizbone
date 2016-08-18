import React from 'react';
import { Link } from 'react-router';

const Product = () => (
    <div>
        <div className="row row-eq-height fizbone-content">
            <div className="col-xs-12">
                <p className="fizbone-menu-title">P R O D U C T S</p>
            </div>
            <div className="col-xs-6 fizbone-vertical-middle">
                <img className="media-object" src="/images/fiz02.jpg"/>
            </div>
            <div className="col-xs-6 fizbone-word-content fizbone-vertical-middle">
                สินค้า: ขนมขบเคี้ยวตับไก่ฟรีสดราย<br/>
                Product: Chicken Liver Freeze Dried Dog Treats
            </div>
        </div>
        <div className="row fizbone-content-background fizbone-content">
            <div className="col-xs-12">
                <p className="fizbone-menu-title">F R E E Z E - D R I E D</p>
            </div>
            <div className="col-xs-6 fizbone-word-content fizbone-vertical-middle">
                ฟรีซดราย: การถนอมอาหารรูปแบบใหม่ทีทำให้อาหารแห้งด้วยความเย็น<br/>
                Freeze-dried: Preserve Chicken Liver By Freezing
            </div>
            <div className="col-xs-6 fizbone-vertical-middle">
                <img className="media-object" src="/images/fiz01.jpg"/>
            </div>
        </div>
        <div className="row row-eq-height fizbone-content">
            <div className="col-xs-12">
                <p className="fizbone-menu-title">N U T R I T I O N S</p>
            </div>
            <div className="col-xs-6 fizbone-vertical-middle">
                <img className="media-object" src="/images/fiz02.jpg"/>
            </div>
            <div className="col-xs-6 fizbone-word-content fizbone-vertical-middle">
                สินค้า: ขนมขบเคี้ยวตับไก่ฟรีสดราย<br/>
                Product: Chicken Liver Freeze Dried Dog Treats
            </div>
        </div>
        <div className="row fizbone-content-background fizbone-content">
            <div className="col-xs-12">
                <p className="fizbone-menu-title">B R A N D</p>
            </div>
            <div className="col-xs-6 fizbone-word-content fizbone-vertical-middle">
                ฟรีซดราย: การถนอมอาหารรูปแบบใหม่ทีทำให้อาหารแห้งด้วยความเย็น<br/>
                Freeze-dried: Preserve Chicken Liver By Freezing
            </div>
            <div className="col-xs-6 fizbone-vertical-middle">
                <img className="media-object" src="/images/fiz03.png"/>
            </div>
        </div>
    </div>
);

export default Product;
