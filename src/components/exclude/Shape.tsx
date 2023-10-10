import React from 'react'

type ShapeType = "cube" | "rectangle" | "square" | "triangle"
type TwoDShapeType = Exclude<ShapeType, "cube">

type ThemeType = "dark" | "light"
type ColorType = "red" | "green" | "blue"


type ItemProps = {
    color: Exclude<`${ThemeType}-${ColorType}`,"dark-yellow">
}


const Shape = (props: ItemProps) => {
    const shape: ShapeType = "cube"
    const twoDShape: TwoDShapeType = "square"
    return (  
        <div>

        </div>
    );
}
 
export default Shape;