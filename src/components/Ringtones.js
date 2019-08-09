import React from 'react'

const radios = [
  'none',
  'default',
  'alarm',
  'alert',
  'beep',
  'bell',
  'bird',
  'bugle',
  'digital',
  'drop',
  'horn',
  'music',
  'ring',
  'warning',
  'whistle'
]

function Ringtones (props) {

  return (
      <section class="ringtones">
        <div>
          <h2>work</h2>
          <ul>
            { radios.map(radio => {
              return (
                <li>
                  <input id={`${radio}-work`} type="radio" name="work" value={`${radio}-work`}/>
                  <label for={`${radio}-work`}><span></span>{radio}</label>
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
                <li>
                  <input id={`${radio}-break`} type="radio" name="break" value={`${radio}-break`}/>
                  <label for={`${radio}-break`}><span></span>{radio}</label>
                </li>
              )
            })}
          </ul>
        </div>
    </section>
  )
}

export default Ringtones
