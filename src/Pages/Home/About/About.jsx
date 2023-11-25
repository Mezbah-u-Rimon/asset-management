

const About = () => {
    return (
        <div className="flex my-20 flex-col lg:flex-row gap-8 justify-center items-center">
            <div className="flex-1">
                <img src="https://cdn-bkknn.nitrocdn.com/fGcPNFYNoLNWGSllWzgDxtBAbrFDaIYE/assets/images/optimized/rev-3b327ff/www.caspio.com/wp-content/uploads/2023/08/CTA-image2.webp" alt="" />
            </div>
            <div className="flex-1 px-10 space-y-3">
                <h3 className="text-xl text-blue-700 font-bold">About us </h3>
                <h1 className="text-4xl font-bold">Enterprise-Ready Platform</h1>
                <p className="text-gray-500 pr-10">
                    While business users appreciate the platform for its ease of use, IT experts value the enterprise-grade security, scalability and compliance.
                    Caspio’s integrated online database is built on Microsoft SQL Server. As a Microsoft Gold Partner, Caspio provides unparalleled database performance, governance and security features such as audit trail and data encryption at rest. Additionally, Caspio runs on AWS, the world’s most comprehensive and broadly adopted cloud infrastructure trusted by the most demanding global brands.
                </p>
            </div>
        </div>
    );
};

export default About;