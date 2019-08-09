import React from 'react'
import { Bar } from 'react-chartjs-2'

function Analytics (props) {
  return (
      <section class="analytics">
        <div>
          <h2>focus time</h2>
          <div className="analytics-content">
            <div>
              <h3>today</h3>
              <p><span>20</span> / tomato</p>
            </div>
            <div>
              <h3>week</h3>
              <p><span>108</span> / tomato</p>
            </div>
          </div>
        </div>
        <div>
          <h2>chart
            <span>{'< 2019.7.1 - 2019.7.7 >'}</span>
          </h2>
          <Bar
            data={ {
              labels: ['7/1', '7/2', '7/3', '7/4', '7/5', '7/6', '7/7'],
              datasets: [{
                  label: 'TOMATO',
                  data: [12, 16, 12, 8, 12, 3, 20],
                  backgroundColor: [
                      'white',
                      'white',
                      'white',
                      'white',
                      'white',
                      'white',
                      '#FF4384',
                  ]
              }]
            }}
            width={100}
            height={70}
          />
        </div>
    </section>
  )
}


export default Analytics
