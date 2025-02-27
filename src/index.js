import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

function Dia(props){
    return(
        <button> 
            {
                (props.dia > 0 && props.dia <32) ? props.dia : "-"
            }
        </button>
    )
}

function Semana(props){
    return(
        <div>
            <Dia dia= { props.primeiroDia }/>
            <Dia dia=  { props.primeiroDia + 1} />
            <Dia dia=  { props.primeiroDia + 2} />
            <Dia dia=  { props.primeiroDia + 3} />
            <Dia dia=  { props.primeiroDia + 4} />
            <Dia dia=  { props.primeiroDia + 5} />
            <Dia dia=  { props.primeiroDia + 6} />
        </div>
        
    )
}

function Calendario(props){
    return(
        <div>
         {props.mes}/{props.ano} 
         <div>
        <button>Dom </button>
        <button>Seg </button>
        <button>Ter </button>
        <button>Qua </button>
        <button>Qui </button>
        <button>Sex </button>
        <button>Sab </button>
        
        </div>
        <Semana primeiroDia={-5} />
        <Semana primeiroDia={2} />
        <Semana primeiroDia={9} />
        <Semana primeiroDia={16} />
        <Semana primeiroDia={23} />
        <Semana primeiroDia={30} />
        </div>
    )

}

function Agenda(){
    return(
        <div>
            <div>Agenda do Ocean</div>
            <Calendario mes={"05"} ano={"2021"}/>
        </div>
    )
}

ReactDOM.render(

    <Agenda />,
    //<p>Olá, Ocean</p>,
    document.getElementById('root')
)

/* import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calendar from 'react-calendar';

// Componente Dia
class Day extends React.Component {
    state = { hasEvent: '0'};

    constructor() {
        super();
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(event) {
        console.log("Estado atual do dia " + this.props.date + " eh " + this.state.hasEvent);
        if(this.state.hasEvent === '0') {
            this.setState( { hasEvent: '1' } );
        } else {
            this.setState( { hasEvent: '0' } )
        }
        console.log("Estado final do dia " + this.props.date + " eh " + this.state.hasEvent);
    }

    render () {
        return (
            <button className="date" onClick={this.handleOnClick}>
                { 
                    (this.props.date > 0 && this.props.date < 32 ) ? // pergunta 
                        this.props.date : // se sim
                        '\u2001' // se nao
                }
            </button>
        );
    }
}

// Componente Semana
function Week(props) {
    return (
        <div className="week">
            <Day date={props.startDate}     weekday={"Dom"} />
            <Day date={props.startDate + 1} weekday={"Seg"} />
            <Day date={props.startDate + 2} weekday={"Ter"} />
            <Day date={props.startDate + 3} weekday={"Qua"} />
            <Day date={props.startDate + 4} weekday={"Qui"} />
            <Day date={props.startDate + 5} weekday={"Sex"} />
            <Day date={props.startDate + 6} weekday={"Sab"} />
        </div> 
    )
}

// Componente Calendario
function Calendario(props) {
    return (
        <div>
            <div>
                {props.mes}/{props.ano}   
            </div>   
            <Week startDate={0}/>
            <Week startDate={7}/>
            <Week startDate={14}/>
            <Week startDate={21}/>
            <Week startDate={28}/> 
        </div>
    ) 
}

// Componente Agenda
function Scheduler() {
    const [value, onChange] = useState(new Date());
    return (
        <div>
            <div>
                <Calendario mes={"03"} ano={"2021"} />
            </div>
            <div>
                <Calendar
                    onChange={onChange}
                    value={value}
                />
            </div>
        </div>
    )
}

ReactDOM.render(
    // Renderizar..
    // Componente
    <Scheduler/>,
    // Em qual elemento
    document.getElementById('root')
); */