import * as React from "react";
import { Component, ReactElement } from "react";
import { Slider, SliderProps } from "material-ui";

import Img from "../img/Img";

import "./IconSlider.css";

class IconSlider extends Component<IIconSliderProps> {
    private sliderStyle: Object = {
        marginTop: "3px",
        marginBottom: 0
    };

    public render(): ReactElement<HTMLElement> {
        const {iconLeft, iconRight, ...props} = this.props;

        return (
            <div className="icon-slider">
                <Img className="icon icon-left" src={this.props.iconLeft}/>
                <div className="slider">
                    <Slider sliderStyle={this.sliderStyle} {...props}/>
                </div>
                <Img className="icon icon-right" src={this.props.iconRight}/>
            </div>
        );
    }
}

interface IIconSliderProps extends SliderProps {
    iconLeft: string;
    iconRight: string;
}

export default IconSlider;
