import React, { useState } from 'react';
import Button from './Button';
import OpButton from './OpButton';

const Calcu = () => {

    const [ input, setInput ] = useState("");
    const [ previousNumber, setPreviousNumber ] = useState("");
    let [ currentNumber, setCurrentNumber ] = useState("");
    const [ operator, setOperator ] = useState("");
    const [ operatorText, setOperatorText ] = useState("");

    const addToInput = val => {
        setInput ( input + val );
    }

    const addDecimal = val => {
        if(input.indexOf(".") === -1){
            setInput( input + val );
        }
    }

    const addZero = val => {
        if(input !== ""){
            setInput( input + val );
        }
    }

    const clear = () => {
        setInput("");
        setOperatorText("");
        setPreviousNumber("");
    }

    const add = val => {
        setPreviousNumber(input);
        setInput("");
        setOperator("add");
        setOperatorText(val);
    }

    const divide = val => {
        setPreviousNumber(input);
        setInput("");
        setOperator("divide");
        setOperatorText(val);
    }

    const subtract = val => {
        setPreviousNumber(input);
        setInput("");
        setOperator("subtract");
        setOperatorText(val);
    }

    const multiply = val => {
        setPreviousNumber(input);
        setInput("");
        setOperator("multiply");
        setOperatorText(val);
    }

    const equals = () => {
        currentNumber = input;

        if(operator === "add"){
            let result = parseFloat(currentNumber) + parseFloat(previousNumber);
            let res = result.toString();
            setInput(res);
            setOperatorText("");
            setPreviousNumber("");
        }else if(operator === "subtract"){
            let result = parseFloat(currentNumber) - parseFloat(previousNumber);
            let res = result.toString();
            setInput(res);
            setOperatorText("");
            setPreviousNumber("");
        }else if(operator === "multiply"){
            let result = parseFloat(currentNumber) * parseFloat(previousNumber);
            let res = result.toString();
            setInput(res);
            setOperatorText("");
            setPreviousNumber("");
        }else if(operator === "divide"){
            let result = parseFloat(CurrentNumber) / parseFloat(previousNumber);
            let res = result.toString();
            setInput(res);
            setOperatorText("");
            setPreviousNumber("");
        }            
    }

    return (
        <>
            <div
                style={{
                    width:'330px',
                    height:'580px',
                    background: 'url(img/CalcuBg.jpg)',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }} 
                className='container d-flex justify-content-center align-items-center mt-2'>
                <div 
                    style={{
                        width:'330px',
                        height:'500px'
                    }} 
                    className='row'>
                    <div 
                        style={{
                            position: 'relative',
                            right: '12px'
                        }}
                        className='col-lg-12'>
                        <div 
                            style={{
                                height:'180px'
                            }}>
                            <div className='d-flex justify-content-start'>    
                                <span
                                    style={{
                                        fontSize:'70px',
                                        color: 'white'
                                    }}>
                                    
                                    { previousNumber === "" ? "" : previousNumber }
                                    {/* { ' ' } */}
                                    { operatorText === "" ? "" : operatorText }
                                    {/* { ' ' } */}
                                    { input === "" ? "" : input }
                                    
                                </span>
                            </div>
                            {/* <div className='d-flex justify-content-end text-muted'>
                                <span
                                    style={{
                                        fontSize:'50px'
                                    }} >
                                    { previousNumber === "" ? "" : previousNumber }
                                    { " " }
                                    { operatorText === "" ? "" : operatorText }
                                    { " " }
                                    { input === "" ? "" : input }
                                </span>
                            </div> */}
                        </div>
                        <div className='d-flex'>
                            <div className='row flex-column px-3'>
                                <Button 
                                    text={ '7' }  
                                    onClick={ addToInput }/>
                                <Button
                                    text={ '4' }  
                                    onClick={ addToInput }/>
                                <Button 
                                    text={ '1' } 
                                    onClick={ addToInput }/>
                                <Button 
                                    text={ '.' }
                                    onClick={ addDecimal }/>
                            </div>
                            <div className='row flex-column px-3'>
                                <Button 
                                    text={ '8' }  
                                    onClick={ addToInput }/>
                                <Button 
                                    text={ '5' }
                                    onClick={ addToInput }/>
                                <Button
                                    text={ '2' }  
                                    onClick={ addToInput }/>
                                <Button 
                                    text={ '0' }  
                                    onClick={ addZero }/>
                            </div>
                            <div className='row flex-column px-3'>
                                <Button 
                                    text={ '9' } 
                                    onClick={ addToInput }/>
                                <Button 
                                    text={ '6' }  
                                    onClick={ addToInput }/>
                                <Button 
                                    text={ '3' } 
                                    onClick={ addToInput }/>
                                <Button 
                                    text={ 'C' } 
                                    onClick={ clear }/>
                                
                            </div>
                            <div className='d-flex flex-column justify-content-center align-items-center ml-4'>
                                <div className='row'>
                                    <OpButton
                                        text={ '-' } 
                                        color={ '#00a8cc' } 
                                        onClick={ subtract }/>
                                    <OpButton 
                                        text={ '/' } 
                                        color={ '#00a8cc' } 
                                        onClick={ divide }/>
                                </div>
                                <div className='row py-3'>
                                    <OpButton 
                                        text={ '+' } 
                                        color={ '#00a8cc' } 
                                        onClick={ add }/>
                                    <OpButton 
                                        text={ 'x' } 
                                        color={ '#00a8cc' } 
                                        onClick={ multiply }/>
                                </div>
                                <div className='row py-2'>
                                    <button
                                        style={{
                                            fontSize:'25px',
                                            height: '60px',
                                            width: '120px',
                                            backgroundColor:'#00a8cc'
                                        }}
                                        className='btn text-white rounded-pill mt-2 border-secondary'
                                        onClick={ equals }>
                                            =
                                    </button>     
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calcu;