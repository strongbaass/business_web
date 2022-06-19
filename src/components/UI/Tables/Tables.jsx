import React from "react";
import firsticon from '../../../img/svg/Protect Cloud.svg'
import secondicon from '../../../img/svg/Secure.svg'
import thirdicon from '../../../img/svg/Cloud.svg'
import fourthicon from '../../../img/svg/Target.svg'

const Tables = () => {
    return(
        <div className="tables_wrapper">
            <ul className="tables">
                <li className="first_table table">
                    <img src={firsticon} className="icons" alt="" />
                    <h3 className="table_title">Finance Securit</h3>
                    <p className="table_description">All information and transactions will be well encrypted and double security in every activity. Safer transactions, calmer users</p>
                    <a className="table_link_learnmore" href="">Learn More</a>
                    </li>
                <li className="second_table table">
                    <img src={secondicon} className="icons" alt="" />
                   <h3 className="table_title">Synchronization</h3>
                   <p className="table_description">Synced from a Windows, Mac, or Ubuntu Linux computer to the cloud and vice versa without any problems.</p>
                   <a className="table_link_learnmore" href="">Learn More</a>
                    </li>
                <li className="third_table table">
                    <img src={thirdicon} className="icons" alt="" />
                    <h3 className="table_title">Cloud Drive</h3>
                    <p className="table_description">It doesn't cost a fortune to move your work online —in fact, it's free! Starting from 5 GB of free storage.</p>
                    <a className="table_link_learnmore" href="">Learn More</a>
                    </li>
                <li className="fourth_table table">
                    <img src={fourthicon} className="icons" alt="" />
                    <h3 className="table_title">File Sharing</h3>
                    <p className="table_description">Ease of accessing files locked by someone with the sharing with friend feature so you can enjoy it together.</p>
                    <a className="table_link_learnmore" href="">Learn More</a>
                    </li>
            </ul>
        </div>
    )
}

export default Tables;