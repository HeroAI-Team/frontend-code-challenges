const TOGGLE_SWITCH = 'TOGGLE_SWITCH';

const toggleState = {
  isOn: false,
}

const switchReducer = (state = toggleState, action) => {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        isOn: !state.isOn,
      };
    default:
      return state;
  }
}

const toggleSwitch = () => ({
  type: TOGGLE_SWITCH,
});

/*
Given the redux logic above, please complete the functional component below.
The desired behaviour is to toggle the switch by pressing the button while displaying the boolean value of the switch in the <p></p>
*/


function Switch() {

  return (
    <div>
      <p>{display boolean here}</p>
      <button onClick={on Press event here}>Toggle switch</button>
    </div>
  );
}



