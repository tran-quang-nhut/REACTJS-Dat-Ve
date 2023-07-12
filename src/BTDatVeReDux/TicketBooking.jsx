import React, { Component } from 'react';
import danhSachGheData from "../data/danhSachGhe.json";
import SeatInfo from './SeatInfo';
import SeatRow from './SeatRow';

export default class TicketBooking extends Component {
    renderSeatLayout = () => {
        return danhSachGheData.map((hangGhe,index) => {
            return(
                <div key={index}>
                    <SeatRow hangGhe={hangGhe} soHangGhe={index}/>
                </div>
            )
        })
    }

    render() {
        return (
            <div className='bg-overlay'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-8 text-center ">
                            <h3 className='mt-3 text-warning ' style={{fontSize: '45px'}}>Đặt vé xe phim CyberSoft</h3>
                            <h5 className='pt-0 ' style={{fontSize: '35px'}} >Màn hình</h5>
                            <div className='screen mt-3' ></div>
                            <div className='text-left fs-ghe ml-5 mt-2'>
                                {this.renderSeatLayout()} 
                            </div>
                        </div>
                        <div className="col-4">
                            <SeatInfo/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}