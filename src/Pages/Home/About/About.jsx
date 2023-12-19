

const About = () => {

    return (
        <div className="flex my-20 flex-col-reverse lg:flex-row gap-3 justify-center items-center">
            <div className="flex-1">
                <img src="https://kyimages.kyinbridges.com/1662840314597.png" alt="" />
            </div>
            <div className="flex-1 text-center lg:text-left px-10 space-y-3">
                <h3 className="text-xl text-indigo-500 font-bold">About us </h3>
                <h1 className="text-4xl font-bold">Enterprise-Ready Platform</h1>
                <p className="text-gray-500 lg:pr-10">
                    While business users appreciate the platform for its ease of use, IT experts value the enterprise-grade security, scalability and compliance.
                    Caspio’s integrated online database is built on Microsoft SQL Server. As a Microsoft Gold Partner, Caspio provides unparalleled database performance, governance and security features such as audit trail and data encryption at rest. Additionally, Caspio runs on AWS, the world s most comprehensive and broadly adopted cloud infrastructure trusted by the most demanding global brands.
                </p>
            </div>
        </div>
    );
};

export default About;