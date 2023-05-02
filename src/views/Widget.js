import React from 'react'

export default function Widget() {
    return (
        <div className="main container">
            <div className="row">
                <div className="col-xs-12">
                    <div className="col-xs-12 col-sm-6 col-sm-offset-3 col-lg-4 col-lg-offset-4 weather-panel">
                        <div className="col-xs-6">
                            <h2>Lucerne<br/><small>May 24, 2016</small></h2>
                            <p className="h3"><i className="mi mi-fw mi-lg mi-rain-heavy"></i> Rainy</p>
                        </div>
                        <div className="col-xs-6 text-center">
                            <div className="h1 temperature">
                                <span>12°</span>
                                <br/>
                                    <small>8° / 13°</small>
                            </div>
                        </div>
                        <div className="col-xs-12">
                            <ul className="list-inline row forecast">
                                <li className="col-xs-4 col-sm-2 text-center">
                                    <h3 className="h5">Wed</h3>
                                    <p><i className="mi mi-fw mi-2x mi-cloud-sun"></i><br/>9°/18°</p>
                                </li>
                                <li className="col-xs-4 col-sm-2 text-center">
                                    <h3 className="h5">Thu</h3>
                                    <p><i className="mi mi-fw mi-2x mi-sun"></i><br/>12°/23°</p>
                                </li>
                                <li className="col-xs-4 col-sm-2 text-center">
                                    <h3 className="h5">Fri</h3>
                                    <p><i className="mi mi-fw mi-2x mi-cloud-sun"></i><br/>14°/24°</p>
                                </li>
                                <li className="col-xs-4 col-sm-2 text-center">
                                    <h3 className="h5">Sat</h3>
                                    <p><i className="mi mi-fw mi-2x mi-rain"></i><br/>15°/23°</p>
                                </li>
                                <li className="col-xs-4 col-sm-2 text-center">
                                    <h3 className="h5">Sun</h3>
                                    <p><i className="mi mi-fw mi-2x mi-rain-heavy"></i><br/>15°/22°</p>
                                </li>
                                <li className="col-xs-4 col-sm-2 text-center">
                                    <h3 className="h5">Mon</h3>
                                    <p><i className="mi mi-fw mi-2x mi-clouds"></i><br/>12°/17°</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
