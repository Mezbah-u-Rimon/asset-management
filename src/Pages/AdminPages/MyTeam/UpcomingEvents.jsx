import MemberBirth from "./MemberBirth";


const UpcomingEvents = (myTeam) => {

    const today = new Date();
    const upcomingBirthdays = myTeam.myTeam.filter(member => {
        const birthDate = new Date(member.date);
        birthDate.setFullYear(today.getFullYear());
        return birthDate.getTime() >= today.getTime();
    });

    return (
        <div className="my-10">
            <h2 className="text-4xl font-bold text-indigo-500 text-center py-10">Upcoming Events </h2>
            {upcomingBirthdays.map(member => (
                <MemberBirth
                    key={member._id}
                    member={member}
                />
            ))}
        </div>
    );
};

export default UpcomingEvents;