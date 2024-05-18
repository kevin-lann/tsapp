import React, { ReactNode } from 'react'
import {useState, useEffect, useRef} from 'react'
import { type Color } from "../lib/types"


type ButtonProps = {
    themeColor: string
    padding: [number, number]
    style: React.CSSProperties // style as a builtin type object
}

type OtherProps = {
    children: ReactNode // any jsx element including plaintext
    fart?: number //optional
}

interface MoreProps { // interfaces can only describe objects. Less useful than type alias.
    text: string
    count: number
}

// create type alias for attributes relating to a certain HTML element type
// eg we have in the following: src, style, alt, etc
type ImageProps = React.ComponentProps<"img"> & { // use & to add additional props "intersectiong"
    variant: "primary" | "secondary"
}

interface SuperButtonProps extends ButtonProps { // use extend to add mroe props ontop another interface
    size: "md" | "lg" | "xl"
}

type User = {
    name: string
    age: number
} | null

type Guest = Omit<User, "name"> // removes name field

// GENERICS ==========================
const convertToArray = <T,>(value: T): T[] => { // need to put comma <T,> because otherwise jsx reads like HTML tag
    return [value]
}
// can also write traditional func:
function convertToArray2<T>(value: T): T[] {
    return [value]
}

type GenericProps<T> = {
    countValue: T
    countHistory: T[]
}

// defautl vals for props
// const Button = (age=13) => ...
const Button = (props: ButtonProps) => {

    const {themeColor, padding, style} = props

    const [count ,setCount] = useState(0)
    const [user, setUser] = useState<User>(null) //explicitly type a useState

    const ref = useRef<HTMLButtonElement>(null)

    useEffect(
        () => {
            const prevButtonColor = localStorage.getItem("buttonColor") as Color // as keyword (cast)
            
        }    
    ,[count])

    function convertCurrency(amount: number, currency: string):number {
        // ...
        return amount * 1.37
    }

    const onClick = ():void => {
        setCount(count + 1)
    }

    return (
        <div className = "flex flex-col justify-center content-center items-center">
            <h1 style={style}> Check out this stupid button 🤣 </h1>
            <h2 className="text-[24pt]"> {count} </h2>
            <button className={`w-[50%] bg-${themeColor}-100 text-${themeColor}-500 text-[48pt] m-20 py-${padding[0].toString()} px-${padding[1].toString()} border-solid border-2 rounded-[40px]
            hover:scale-[101%] hover:border-${themeColor}-200
            active:scale-[99%] active:bg-${themeColor}-200
            `}
            onClick={onClick}>
                
                Button
                
            </button>
        </div>
    )
}

export default Button