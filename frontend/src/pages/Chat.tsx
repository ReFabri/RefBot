import { Box, Avatar } from "@mui/material";
import { useAuth } from "../context/AuthContext";

const Chat = () => {
  const auth = useAuth();
  const avatarName = auth?.user?.name
    .split(" ")
    .filter((str, i) => i <= 1)
    .map((str) => str[0])
    .join("");

  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        width: "100%",
        height: "100%",
        mt: 3,
        gap: 3,
      }}
    >
      <Box
        sx={{
          display: { md: "flex", xs: "none", sm: "none" },
          flex: 0.2,
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "60vh",
            bgcolor: "rgb(17, 29, 39)",
            borderRadius: 5,
            flexDirection: "column",
            mx: 3,
          }}
        >
          <Avatar
            sx={{
              mx: "auto",
              my: 2,
              bgcolor: "white",
              color: "black",
              fontWeight: 700,
            }}
          >
            {avatarName}
          </Avatar>
        </Box>
      </Box>
    </Box>
  );
};

export default Chat;
