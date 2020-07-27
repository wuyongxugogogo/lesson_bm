import React, { useEffect, useRef, memo } from 'react';
import Horizen from '../../baseUI/horizen-item/index';
import { connect } from 'react-redux';
import { NavContainer } from './style';
import { categoryTypes, alphaTypes } from '../../api/config'

function Singers(props) {
    const { category, alpha } = props;
    const handleUpdateAlpha = () => {

    }
    const handleUpdateCategory = () => {

    }
    return (
        <div>
            <NavContainer>
                <Horizen title="分类(默认热门):" list={categoryTypes}
                    handleClick={(v) => handleUpdateCategory(v)} oldValue={category}
                />
                <Horizen title="首字母:" list={alphaTypes} 
                    handleClick={(v) => handleUpdateAlpha(v)} oldValue={alpha}
                />
            </NavContainer>
        </div>
    )
}

const mapStateTopProps = (state) => ({
    category: state.singers.category,
    alpha: state.singers.alpha
})

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateTopProps, mapDispatchToProps)(memo(Singers));