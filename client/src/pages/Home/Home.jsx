import {Link, useNavigate} from "react-router-dom"
import Button from "../../components/shared/Button/Button";
import Card from "../../components/shared/card/Card";

function Home() {

  const navigate = useNavigate()

  const onClick = () => {
    navigate("/register")
  }

  return (
    <div className="container my-5 w-25">
      <Card title="Welcome to let's chat">
        <div className="my-2">
          <p>
            We're working hard to get Let's chat<br></br>
            redy for everyone! While we wrap up <br></br>
            the finishing youches, we're adding<br></br>
            people gradually to make sure nothing<br></br>
            breakes :)
          </p>
          <Button onClick={onClick} text="Get your UserName"/>
        </div>
        <div className="">
          <span> Have an Invited text ? </span>
          <Link to="/login">
            SignIn
          </Link>
        </div>
      </Card>
    </div>
  );
}

export default Home;
