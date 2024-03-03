import React, {useState} from "react";


export default function DrieBijDrie(): JSX.Element {


    const [vakje00, setVakje00] = useState(false)
    const [vakje01, setVakje01] = useState(false)
    const [vakje02, setVakje02] = useState(false)

    const resultaatx = (vakje00 ? 4 : 0) + (vakje01 ? 1 : 0) + (vakje02 ? 2 : 0)

    const [vakje12, setVakje12] = useState(false)
    const [vakje21, setVakje21] = useState(false)
    const [vakje22, setVakje22] = useState(false)

    const resultaaty =  (vakje12 ? 1 : 0) + (vakje21 ? 2 : 0) + (vakje22 ? 4 : 0)


    return <div>
        <div style={{
            color: "red",
            position: "absolute",
            fontSize: 40,
            left: '50%',
            top: '50%'
        }}>{'(' + resultaatx + ', ' + resultaaty + ')'}</div>
        <div style={{display: "flex", flexWrap: 'wrap', height: '100vh'}}>
            <div style={{width: '33%', backgroundColor: vakje00 ? 'white' : "black"}}
                 onClick={() => setVakje00(!vakje00)}/>
            <div style={{width: '33%', backgroundColor: vakje01 ? 'white' : "black"}}
                 onClick={() => setVakje01(!vakje01)}/>
            <div style={{width: '33%', backgroundColor: 'white'}}/>


            <div style={{width: '33%', backgroundColor: vakje02 ? 'white' : "black"}}
                 onClick={() => setVakje02(!vakje02)} />
            <div style={{width: '33%', backgroundColor: 'white'}}/>
            <div style={{width: '33%', backgroundColor: vakje12 ? 'white' : "black"}}
                 onClick={() => setVakje12(!vakje12)} />

            <div style={{width: '33%'}} />
            <div style={{width: '33%', backgroundColor: vakje21 ? 'white' : "black"}}
                 onClick={() => setVakje21(!vakje21)} />
            <div style={{width: '33%', backgroundColor: vakje22 ? 'white' : "black"}}
                 onClick={() => setVakje22(!vakje22)} />

        </div>
    </div>
}