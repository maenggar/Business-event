import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from "../ReusableComponent/MyButton";


class Discount extends Component {
    state={
        discountStart:0,
        discountEnd:30
    }
    porcentage(){
        if(this.state.discountStart < this.state.discountEnd){
            this.setState({
                discountStart:this.state.discountStart+1
            })
        }
    }
    componentDidUpdate() {
        setTimeout(
            ()=>{
                this.porcentage()
            },100
        )
    }

    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">

                    <Fade onReveal={()=> this.porcentage()}>
                        <div className="discount_porcentage">
                            <span>{this.state.discountStart}%</span>
                            <span>off</span>
                        </div>
                    </Fade>

                    <Slide right>
                        <div className="discount_description">
                            <h3>Purchase tikets before 25 may 2019</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias commodi dolore dolorem
                                in.
                                Aperiam, atque dicta eveniet ex mollitia ut?</p>
                           <MyButton
                              text="Purchase Tickets"
                              bck="#ffa800"
                              color="white"
                              link="http:/google.com"
                           />
                        </div>
                    </Slide>


                </div>
            </div>
        );
    }
}

export default Discount;