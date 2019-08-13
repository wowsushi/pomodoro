import React from 'react'

const radios = [
  'none',
  'default',
  'alarm',
  'happy',
  'beep',
  'bell',
  'funk',
  'drama',
  'digital',
  'drop',
  'horn',
  'music',
  'ring',
  'gong',
  'whistle'
]

function Ringtones (props) {
  console.log('props', props)
  return (
      <section class="ringtones">
        <div>
          <h2>work</h2>
          <ul>
            { radios.map(radio => {
              return (
                <li >
                  <input id={`${radio}-work`} type="radio" name="work" value={`${radio}-work`} />
                  <label for={`${radio}-work`} onClick={props.playSound.bind(this, radio)}><span></span>{radio}</label>
                  { (props.playing === radio)?
                      <audio src={`./sound_effect/${radio}.mp3`} autoplay="true">
                        <h3>遇到不支援的瀏覽器會出現這行字</h3>
                      </audio>
                   : ''}
                </li>
              )
            })}
          </ul>
        </div>
        <div>
          <h2>break</h2>
          <ul>
            { radios.map(radio => {
              return (
                <li >
                  <input id={`${radio}-break`} type="radio" name="break" value={`${radio}-break`}/>
                  <label for={`${radio}-break`} onClick={props.playSound.bind(this, radio)}><span></span>{radio}</label>
                  { (props.playing === radio)?
                      <audio src={`./sound_effect/${radio}.mp3`} autoplay="true">
                        <h3>遇到不支援的瀏覽器會出現這行字</h3>
                      </audio>
                   : ''}
                </li>
              )
            })}
          </ul>
        </div>
    </section>
  )
}

export default Ringtones
