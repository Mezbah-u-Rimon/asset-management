

const MemberBirth = (member,) => {

    const { name, image, date } = member.member;
    console.log(name, image, date,);
    const today = new Date();
    const birthDate = new Date(date);
    birthDate.setFullYear(today.getFullYear());

    // Calculate remaining days
    const diffTime = birthDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 3600 * 24));

    console.log(diffDays);

    return (
        <div className="flex justify-center items-center flex-col w-96 mx-auto bg-gray-200 rounded-lg pb-5">
            <img className="rounded-lg" src={image} />
            <h3 className="text-2xl font-bold py-3">{name}</h3>
            <p>Date of Birth: {date}</p>
            {diffDays > 0 ? (
                <p>Remaining Days: {diffDays}</p>
            ) : (
                <p>Happy Birthday!</p>
            )}
        </div>
    );
};

export default MemberBirth;