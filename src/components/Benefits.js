import React from 'react'
import { Link } from 'react-router-dom'

const Benifits = () => {
  const benefits = [
    {
      a: 'Indian Market',
      links: "https://getbootstrap.com/docs/5.3/utilities/link/"
    },
    {
      a: 'Fundamentals Analysis',
      links: "https://www.youtube.com/"
    },
    {
      a: 'Technical Analysis',
      links: ""
    },
    {
      a: 'Crypto Currency',
      links: ""
    },
    {
      a: 'Binary Trading',
      links: ""
    },
    {
      a: 'Trade Management',
      links: ""
    },
    {
      a: 'Options Chains',
      links: ""
    },
    {
      a: 'Hadging Strategy',
      links: ""
    },
    {
      a: 'Scalping Strategy',
      links: ""
    },
    {
      a: 'Money Management',
      links: ""
    },
    {
      a: 'Psycology building',
      links: ""
    },
    {
      a: 'Online Classes',
      links: ""
    },
    {
      a: 'Offline Classes',
      links: ""
    },
    {
      a: '1-1 Doubt Sessions',
      links: ""
    },
    {
      a: 'Portfolio Trading',
      links: ""
    }

  ]
  return (
    <div className=" benefit container">
      <h1 className='text-center  mx-3'>BENEFITS</h1>
      <div className="row row-cols-3 my-2 mx-2">
        {benefits.map((benefits) => {
          return (
            <div className="col" key={benefits.a} >
              <div className="benefitsCard card text-bg-dark mb-5 bg-body-dark rounded" >
                <div className="card-body" >
                  <h5 className="card-title align-middle" style={{ textAlign: 'center' }} >
                    <Link to={benefits.links} className="links">{benefits.a}</Link> </h5>
                </div>
              </div>
            </div>
          )
        })
        }
      </div>
    </div>
  )
}

export default Benifits
