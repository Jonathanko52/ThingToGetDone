import React from 'react';


const Do = () => (
<div className='col-sm-12 DoItBox'>
                          <h3>Do it!</h3>
                        <div className='DoItList col-sm-6'>
                            <h4>Do it Items</h4>
                            <div className='DoItItemButtons'>
                                <button className="btn btn-primary">Do it later</button>
                                <button className="btn btn-primary">Do it later</button>
                            </div>
                        </div>
                        <div className='DoItItem col-sm-6'>
                            <h4>2:00</h4>
                            <div className='DoItItemButtons'>
                                <button className="btn btn-primary">Start</button>
                                <button className="btn btn-primary">Stop</button>
                            </div>
                        </div>
                    </div>
);

export default Do