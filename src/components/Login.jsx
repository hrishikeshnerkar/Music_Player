import React from "react";
import styled from "styled-components";
import login_image from "../components/login.png";


export default function Login() {
    const handleClick = async () => {
        const clientId = "66e81a6a81644b68a70bad685920327f";
        const redirectUrl = "http://localhost:3000/";
        const apiUri = "https://accounts.spotify.com/authorize";

        const scope = [
            "user-read-private",
            "user-read-email",
            "user-modify-playback-state",
            "user-read-playback-state",
            "user-read-currently-playing",
            "user-read-recently-played",
            "user-read-playback-position",
            "user-top-read",
        ];
        window.location.href = `${apiUri}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
            " "
        )}&response_type=token&show_dialog=true`;
    };
    return (
        <Container>
            <img
                src={login_image}
                alt="melodify"
            />
            <button onClick={handleClick}>Connect Melodify</button>
        </Container>
    );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #1db954;
  gap: 5rem;
  img {
    height: 100wh;
  }
  button {
    padding: 1rem 5rem;
    border-radius: 5rem;
    border: none;
    background-color: black;
    color: #49f585;
    font-size: 1.4rem;
    cursor: pointer;
  }
`;