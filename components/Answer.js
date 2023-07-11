import M from '@components/Math';
import I from '@components/Inline';
import styles from './Answer.module.css'

function check(e, correct) {
  if (e.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();

    // Trigger the button element with a click

    let output = e.target.parentElement.lastChild;

    if (e.target.value == correct) {
      output.style.color = "green";
      output.innerHTML = "Correct!"
    } else {
      output.style.color = "red";
      output.innerHTML = "Incorrect, try again."
    }

  }
}

export default function Answer({ correct }) {
  return (
    <div className = "center">
      <I>x = </I>
      {' '}
      <input className={styles.input} onKeyPress = {(e) => {check(e, Number(correct))}}></input>
      {' '}
      <span className = {styles.output}></span>
    </div>
  );
}
