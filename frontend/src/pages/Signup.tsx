import React, { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import CustomizedInput from "../components/shared/CustomizedInput";
import { IoIosLogIn } from "react-icons/io";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    try {
      toast.loading("Signing In", { id: "signup" });
      await auth?.signup(name, email, password);
      toast.success("Successfully signed in", { id: "signup" });
    } catch (error) {
      console.log(error);
      toast.error("Signup Failed", { id: "signup" });
    }
  };

  useEffect(() => {
    if (auth?.user) {
      return navigate("/chat");
    }
  }, [auth, navigate]);

  return (
    <Box width={"100%"} height={"100%"} display="flex" flex={1}>
      <Box
        padding={8}
        marginTop={8}
        display={{ md: "flex", sm: "none", xs: "none" }}
      >
        <img src="robot3.png" alt="Robot" style={{ width: "400px" }} />
      </Box>
      <Box
        display="flex"
        flex={{ xs: 1, md: 0.5 }}
        justifyContent={"center"}
        alignItems={"center"}
        padding={2}
        marginLeft={"auto"}
        marginTop={16}
      >
        <form
          onSubmit={submitHandler}
          style={{
            margin: "auto",
            padding: "30px",
            boxShadow: "10px 10px 20px #000",
            borderRadius: "10px",
            border: "none",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h4"
              textAlign="center"
              padding={2}
              fontWeight={600}
            >
              Login
            </Typography>
            <CustomizedInput name="name" label="Name" type="text" />
            <CustomizedInput name="email" label="Email" type="email" />
            <CustomizedInput name="password" label="Password" type="password" />
            <Button
              type="submit"
              sx={{
                px: 2,
                py: 1,
                marginTop: 2,
                width: "100%",
                borderRadius: 2,
                bgcolor: "#00fffc",
                ":hover": {
                  bgcolor: "white",
                  color: "black",
                },
              }}
              endIcon={<IoIosLogIn />}
            >
              SIGNUP
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Signup;
