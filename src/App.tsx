import React, {ReactElement, useState} from 'react';
import VierBijVier from "./4By4Grid";
import DrieBijDrie from "./DrieBijDrie";

function App(): JSX.Element {

    const [vier, setVier] = useState<boolean | null>(false)
    const [drie, setDrie] = useState<boolean | null>(false)

    if (vier === false && drie === false) {
        return <div style={{height: '100vh'}}>
            <div style={{
                width: '100%',
                backgroundColor: 'pink',
                height: '50vh',
                textAlign: 'center',
                justifyContent: 'center',
                fontSize: 80,
                display: 'flex',
                alignItems: 'center',
            }} onClick={() => setVier(true)}>4x4
            </div>

            <div  style={{
                width: '100%',
                backgroundColor: 'salmon',
                height: '50vh',
                textAlign: 'center',
                justifyContent: 'center',
                fontSize: 80,
                display: 'flex',
                alignItems: 'center',
            }} onClick={() => setDrie(true)}>3x3
            </div>
        </div>
    }
    if (vier) {
        return <div style={{height: '100vh'}}>
            <VierBijVier/>
        </div>
    }
    if (drie) {
        return <div style={{height: '100vh'}}>
            <DrieBijDrie/>
        </div>
    }
    return <div/>
}

export default App;
