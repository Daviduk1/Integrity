import React from 'react'
import './Card.css'

const Cards = () => {
  return (
    <section className='p-4' id='cardsection'>
        <div className="container">
            
            <div className="row g-5 pt-5 " id='cards'>
                <div className="col-md">
                    <div className="card bg-dark text-white " style={{width:'25rem', borderTopLeftRadius:'40px', borderBottomRightRadius:'40px' }}>
                        <div className="card-body">
                            <h2 className='text-center pt-2 'style={{width:'60px', height:'60px',backgroundColor:'#6FCEC3',borderRadius:'50%', position:'relative',bottom:'45px', right:'30px', boxShadow:'0 0 50px rgba(0, 0, 0, 0.25)' }}>1</h2>
                            <h4 style={{position:'relative', bottom: '2rem'}}>
                            Attracting social-responsible
                            businesses
                            </h4>
                            <p style={{position:'relative', bottom: '1rem'}}>
                            Signatories of CBi publicly commit to and demonstrate integer business operations, therefore increasing their attractiveness for such social-responsible customers, investors, and partners. This will help to convince more Nigerian business actors to actively engage against corruption which consequently will generate greater investment inflows.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md">
                    <div className="card bg-dark text-white" style={{width:'25rem', borderTopLeftRadius:'40px', borderBottomRightRadius:'40px' }}>
                        <div className="card-body">
                            <h2 className='text-center pt-2'style={{width:'60px', height:'60px',backgroundColor:'#82CE6F',borderRadius:'50%', position:'relative',bottom:'45px', right:'30px', boxShadow:'0 0 50px rgba(0, 0, 0, 0.25)', }}>2</h2>
                            <h4 style={{position:'relative', bottom: '2rem'}}>
                            Enhancing business <br></br>
                            reputation
                            </h4>
                            <p style={{position:'relative', bottom: '2rem'}}>
                            Signatories of CBi publicly commit to and demonstrate integer business operations, therefore increasing their attractiveness for such social-responsible customers, investors, and partners. This will help to convince more Nigerian business actors to actively engage against corruption which consequently will generate greater investment inflows.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md">
                    <div className="card bg-dark text-white" style={{width:'25rem', borderTopLeftRadius:'40px', borderBottomRightRadius:'40px' }}>
                        <div className="card-body">
                            <h2 className='text-center pt-2'style={{width:'60px', height:'60px',backgroundColor:'#9D2BC6',borderRadius:'50%', position:'relative',bottom:'45px', right:'30px', boxShadow:'0 0 50px rgba(0, 0, 0, 0.25)'}}>3</h2>
                            <h4 style={{position:'relative', bottom: '2rem'}}>
                            Reducing uncertainty<br></br>
                            and risks
                            </h4>
                            <p className='pb-4'style={{position:'relative', bottom: '2rem'}}>
                            The impact of corruption on the environment in which businesses operate is manifold. Where corruption introduces uncertainty, it also increases risk. In this respect, joining CBi signals accountability and reliability of integer business operations, which again helps to attract (risk-adverse) national and international businesses.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md ">
                    <div className="card bg-dark text-white" style={{width:'25rem', borderTopLeftRadius:'40px', borderBottomRightRadius:'40px' }}>
                        <div className="card-body">
                            <h2 className='text-center pt-2'style={{width:'60px', height:'60px',backgroundColor:'#093BBD',borderRadius:'50%', position:'relative',bottom:'45px', right:'30px', boxShadow:'0 0 50px rgba(0, 0, 0, 0.25)'}}>4</h2>
                            <h4 style={{position:'relative', bottom: '2rem'}}>
                            Minimizing risk of criminal/<br></br>
                            civil sanctions
                            </h4>
                            <p style={{position:'relative', bottom: '2rem'}}>
                            The risk of criminal and/or civil sanctions is real; companies that practice, condone or turn a blind eye to corruption may find that they become entangled in infractions of the law. Engaging in anti-corruption initiatives like CBi constitutes an important step to minimize the risk of litigation by unwanted and risky practices.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md">
                    <div className="card bg-dark text-white" style={{width:'25rem', borderTopLeftRadius:'40px', borderBottomRightRadius:'40px' }}>
                        <div className="card-body">
                            <h2 className='text-center pt-2'style={{width:'60px', height:'60px',backgroundColor:'#D23A2C',borderRadius:'50%', position:'relative',bottom:'45px', right:'30px', boxShadow:'0 0 50px rgba(0, 0, 0, 0.25)' }}>5</h2>
                            <h4 style={{position:'relative', bottom: '2rem'}}>
                            Protection of shareholders<br></br>
                            assets
                            </h4>
                            <p className='pb-4'style={{position:'relative', bottom: '2rem'}}>
                            The protection of shareholder assets is a key duty of management. Since corruption can erode such an asset base, a CBi membership helps to establish procedures that discourage corruption in-house and payment of graft to other entities and thereby contributes to protecting shareholders assets.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md">
                    <div className="card bg-dark text-white" style={{width:'25rem', borderTopLeftRadius:'40px', borderBottomRightRadius:'40px' }}>
                        <div className="card-body">
                            <h2 className='text-center pt-2'style={{width:'60px', height:'60px',backgroundColor:'#C4C81A',borderRadius:'50%', position:'relative',bottom:'45px', right:'30px', boxShadow:'0 0 50px rgba(0, 0, 0, 0.25)'}}>6</h2>
                            <h4 style={{position:'relative', bottom: '2rem'}}>
                            Heightening employee<br></br>
                            awareness of corporate policy
                            </h4>
                            <p className='pb-4'style={{position:'relative', bottom: '2rem'}} >
                            Organisations that join CBi send a strong signal to their employees that the fight against corruption is taken seriously. It helps to encourage and support employees in resisting corruption and motivates employees to be proud of the organisation’s integrity and reputation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
       
  )
}

export default Cards