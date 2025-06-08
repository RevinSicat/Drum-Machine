//HTML Element Variables

//HTML React Element Variable
const reactDrumMachine = ReactDOM.createRoot(document.getElementById('drum-machine'));

//Vairables
const audioState = [
    {
        key: "Q",
        name: "Heater-1",
        href: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"
    },{
        key: "W",
        name: "Heater-2",
        href: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"
    },{
        key: "E",
        name: "Heater-3",
        href: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"

    },{
        key: "A",
        name: "Heater-4",
        href: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"
    },{
        key: "S",
        name: "Clap",
        href: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"
    },{
        key: "D",
        name: "Open-HH",
        href: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
    },{
        key: "Z",
        name: "Kick-n'-Hat",
        href: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"
    },{
        key: "X",
        name: "Kick",
        href: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"
    },{
        key: "C",
        name: "Closed-HH",
        href: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"
    }
]

//Classes
class DisplayDrumMachine extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            display: ""
        }
        this.updateDisplay = this.updateDisplay.bind(this);
    }
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }
    updateDisplay (name){
        this.setState({display: name});
    }
    handleKeyPress = (e) => {
        const key = e.key.toUpperCase();
        const audioObj = audioState.find(a => a.key === key);
        if (audioObj) {
            const button = document.getElementById(audioObj.key);
            if (button) {
                button.classList.add("active");
                button.click();
                setTimeout(() => {
                    button.classList.remove("active");
                }, 100);
            }
        }
    };
    render(){
       return (
            <div>
                {drumPads(this.updateDisplay)}
                <div id="display-div">
                    <h3 id="display">
                        {this.state.display}
                    </h3>
                </div>
            </div>
        )
    }
}

//Functions
const drumPads = (updateDisplay) => (
    <div id="drum-pad-div">
        {audioState.map(audio => (
            <button className="drum-pad" id={audio.key} key={audio.key} onClick={(e) => {
                const audioTag = e.currentTarget.querySelector('audio');
                audioTag.currentTime = 0;
                audioTag.play();
                updateDisplay(audio.name);
                }}>
                <audio src={audio.href} className="clip" id={audio.key}></audio>
                {audio.key}
            </button>
        ))}
    </div>
)

//Event Listeners


//Initialization
reactDrumMachine.render(<DisplayDrumMachine />);