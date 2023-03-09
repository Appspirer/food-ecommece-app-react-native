import React from "react";
import cart from '../assets/svgs/cart.svg'
import cart_focus from '../assets/svgs/cart_focus.svg'
import home from '../assets/svgs/home.svg'
import home_focus from '../assets/svgs/home_focus.svg'
import poi from '../assets/svgs/poi.svg'
import poi_focus from '../assets/svgs/poi_focus.svg'
import user from '../assets/svgs/user.svg'
import user_focus from '../assets/svgs/user_focus.svg'
import search from '../assets/svgs/search.svg'
import filter from '../assets/svgs/filter.svg'
import close_button from '../assets/svgs/close_button.svg'
import minus from '../assets/svgs/minus.svg'
import plus from '../assets/svgs/plus.svg'

const SVGs = {
    cart,
    cart_focus,
    home,
    home_focus,
    poi,
    poi_focus,
    user,
    user_focus,
    search,
    filter,
    close_button,
    minus,
    plus
}

export default {
    Icons: ({ name = "", height, width }) => {
        if (name in SVGs) {
            const Icons = SVGs[name]
            return <Icons name={name} height={height} width={width} />
        } else {
            return null
        }
    }
}