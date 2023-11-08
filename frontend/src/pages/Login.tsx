import React from "react";
import { Box, Button, Typography } from "@mui/material";
import CustomizedInput from "../components/shared/CustomizedInput";
import { IoIosLogIn } from "react-icons/io";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const auth = useAuth();
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    try {
      toast.loading("Logging In", { id: "login" });
      await auth?.login(email, password);
      toast.success("Logged In Successfully", { id: "login" });
    } catch (error) {
      console.log(error);
      toast.error("Login Failed", { id: "login" });
    }
  };

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
            <CustomizedInput name="email" label="email" type="email" />
            <CustomizedInput name="password" label="password" type="password" />
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
              LOGIN
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
