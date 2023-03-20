import React from 'react'

const ourPrograms = () => {
    return (
        <div className='whatWeDo prg'>
            <div className="container">
                <h2>Our Programs</h2>
                <div className="card">
                    <div className="cardLeft">
                        <p>
                            Delight Rwanda, while implementing the BCC program as a first step of undertaking community mobilization to raise awareness in the community on health and hygiene, education affairs, gender-related issues, socio-economic development, and social protection, this program shows the dramatic impact realized in its years of existence, holistic, knowledge-intensive awareness and training programs conducted to the vulnerable community like youth, girls, and women, and direct financial support/ start capital given to some of the most marginalized women former street vendors.<br />
                            The Delight Rwanda approach is an interactive process with tailored methods using a variety of communication channels that lead to positive behavior change and capacity-building impact. The BCC program demonstrates how our work enables beneficiaries' families to end poverty and hunger – while improving their behavioral change.<br />
                            Since 2008, the program has been working to introduce and build capacity in behavioral change communication methodologies at the local level, with the involvement of local and national agencies. The approach with the line agencies has consisted of a participatory review of existing information, education, and communication (IEC), developing skills in formative research and development of BCC strategies, designing messages and campaigns, and finally, monitoring effectiveness.
                        </p>
                    </div>
                    <div className="cardRight">
                        <img src={require("../images/opdd1.png")} alt="" />
                        {/* <img src={require("../images/opddd1.png")} alt="" /> */}
                        <h4>Behavior Change Communication</h4>
                    </div>
                </div>
                <div className="card">
                    <div className="cardLeft">
                        <p>
                            Delight Rwanda’s long-term youth entrepreneurship goals are embedded in a strategy of transforming African youth from job seekers to job creators in technological, technical, agricultural, knowledge-based, and service-oriented economies to financial income status.<br />
                            Delight Rwanda empowers youths in a process where they are encouraged to develop successful projects to be funded. The training programs have resulted in employment opportunities with returns that rarely justify the investment. We find cooperatives to the extent exclusive that effectively improve rural incomes and reduce rural poverty.
                        </p>
                    </div>
                    <div className="cardRight sec">
                        <img src={require("../images/opdd2.png")} alt="" />
                        {/* <img src={require("../images/opddd2.png")} alt="" /> */}
                        <h4>Women Economic Empowerment</h4>
                    </div>
                </div>
                <div className="card">
                    <div className="cardLeft">
                        <p>
                            Children in Rwanda continue to be exposed to multiple, complex and deeply intertwined protection risks and vulnerabilities associated with their exposure to all forms of violence (physical, sexual, psychological, and emotional), exploitation, abuse and neglect in all settings (at home, at school, in their communities). Delight Rwanda and our partners are working to improve the well-being of children and create a protective environment that enables children to be cared for and protected within their families and their communities.<br />
                            Through the implementation of Child Protection and Advocacy programmes, our staff and partners are working to improve behavior change of community and family members towards children; capacity and resilience of children to protect themselves and their peers from abuse, exploitation and other forms of violence; enhanced formal and informal mechanisms to effectively collaborate to protect girls and boys, especially the most vulnerable, from violence, abuse and neglect, and enforce laws and policies on child protection create an enabling and protective environment for girls and boy.
                        </p>
                    </div>
                    <div className="cardRight sec">
                        <img src={require("../images/opdd3.png")} alt="" />
                        <h4>Youth Capacity Building</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ourPrograms