import './Button.css'

export default function Button({clickFunc, label ='Click Me', color = 'slateblue'}) {
    return (<button className='Button' onClick={clickFunc} style={{backgroundColor: color}}>
        {label}
        </button>
    );
}

