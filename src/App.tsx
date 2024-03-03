import React, {ReactElement, useState} from 'react';

function App() {


    const [vakje00, setVakje00] = useState(false)
    const [vakje01, setVakje01] = useState(false)
    const [vakje02, setVakje02] = useState(false)
    const [vakje10, setVakje10] = useState(false)
    const [vakje11, setVakje11] = useState(false)
    const [vakje20, setVakje20] = useState(false)

    const resultaatx = (vakje00 ? 32 : 0) + (vakje01 ? 8 : 0) + (vakje02 ? 1 : 0) + (vakje10 ? 16 : 0) + (vakje11 ? 2 : 0) + (vakje20 ? 4 : 0)

    const [vakje13, setVakje13] = useState(false)
    const [vakje22, setVakje22] = useState(false)
    const [vakje23, setVakje23] = useState(false)
    const [vakje31, setVakje31] = useState(false)
    const [vakje32, setVakje32] = useState(false)
    const [vakje33, setVakje33] = useState(false)

    const resultaaty = (vakje13 ? 1 : 0) + (vakje22 ? 2 : 0) + (vakje23 ? 8 : 0) + (vakje31 ? 4 : 0) + (vakje32 ? 16 : 0) + (vakje33 ? 32 : 0)

    return (
        <div style={{height: '100vh'}}>
            <div style={{color: "red", position: "absolute", fontSize: 40, left: '50%', top: '50%'}}>{'(' + resultaatx + ', ' + resultaaty + ')'}</div>
            <div style={{display: "flex", flexWrap: 'wrap', height: '100vh'}}>
                <div style={{width: '25%',  backgroundColor: vakje00 ? 'white' : "black"}}
                     onClick={() => setVakje00(!vakje00)}></div>
                <div style={{width: '25%', backgroundColor: vakje01 ? 'white' : "black"}}
                     onClick={() => setVakje01(!vakje01)}></div>
                <div style={{width: '25%', backgroundColor: vakje02 ? 'white' : "black"}}
                     onClick={() => setVakje02(!vakje02)}></div>
                <div style={{width: '25%', backgroundColor: 'white'}}></div>
                <div style={{width: '25%', backgroundColor: vakje10 ? 'white' : "black"}}
                     onClick={() => setVakje10(!vakje10)}></div>
                <div style={{width: '25%', backgroundColor: vakje11 ? 'white' : "black"}}
                     onClick={() => setVakje11(!vakje11)}></div>
                <div style={{width: '25%', backgroundColor: 'white'}}></div>
                <div style={{width: '25%', backgroundColor: vakje13 ? 'white' : 'black'}}
                     onClick={() => setVakje13(!vakje13)}></div>
                <div style={{width: '25%', backgroundColor: vakje20 ? 'white' : "black"}}
                     onClick={() => setVakje20(!vakje20)}></div>
                <div style={{width: '25%'}}></div>
                <div style={{width: '25%', backgroundColor: vakje22 ? 'white' : "black"}}
                     onClick={() => setVakje22(!vakje22)}></div>
                <div style={{width: '25%', backgroundColor: vakje23 ? 'white' : "black"}}
                     onClick={() => setVakje23(!vakje23)}></div>
                <div style={{width: '25%'}}></div>
                <div style={{width: '25%', backgroundColor: vakje31 ? 'white' : "black"}}
                     onClick={() => setVakje31(!vakje31)}></div>
                <div style={{width: '25%', backgroundColor: vakje32 ? 'white' : "black"}}
                     onClick={() => setVakje32(!vakje32)}></div>
                <div style={{width: '25%', backgroundColor: vakje33 ? 'white' : "black"}}
                     onClick={() => setVakje33(!vakje33)}></div>

            </div>
        </div>

    );
}

export default App;
