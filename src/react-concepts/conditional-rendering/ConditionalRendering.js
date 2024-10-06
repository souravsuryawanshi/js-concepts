const UserGreeting = () => {
    return (
        <div>
            Hi User!
        </div>
    )
}

const GuestGreeting = () => {
    return (
        <div>
            Please Sign Up
        </div>
    )
}


const Greeting = (isLoggedIn) => {
    return isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
}


const ConditionalRendering = (props) => {
   

    
    return (
        <>
        <Greeting isLoggedIn={false} />
        </>
    );
}