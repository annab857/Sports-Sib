// Checkout Page

import React, { useState } from 'react';

const CheckoutPage = () => {
    const [deliveryOption, setDeliveryOption] = useState('pickup');

    const handleOptionChange = (event) => {
        setDeliveryOption(event.target.value);
    };

    return (
        <div>
            <h1>Checkout</h1>
            <form>
                <label>
                    <input
                        type="radio"
                        value="pickup"
                        checked={deliveryOption === 'pickup'}
                        onChange={handleOptionChange}
                    />
                    Pickup
                </label>
                <label>
                    <input
                        type="radio"
                        value="delivery"
                        checked={deliveryOption === 'delivery'}
                        onChange={handleOptionChange}
                    />
                    Delivery
                </label>
                <button type="submit">Continue</button>
            </form>
            <p>Selected option: {deliveryOption}</p>
        </div>
    );
};

export default CheckoutPage;