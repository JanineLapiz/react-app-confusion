import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';


class Menu extends Component {
    render() {
        // dishes variable has been passed down from App component
        // it is already available, hence, in props
        const menu = this.props.dishes.map(dish => {
            return(
                <div key={dish.id} className='col-12 col-md-5 m-1'>
                    <Card onClick={() => this.props.onClick(dish.id)}>
                        <CardImg width='100%' src={dish.image} alt={dish.name}/>
                        <CardImgOverlay body='true' className='ml-5'>
                            <CardTitle heading='true'>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return(
        <div className='container'>
            <div className='row'>
                {menu}
            </div>
        </div>);
    }
}

export default Menu;