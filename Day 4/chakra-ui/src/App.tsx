/** @format */

import { Box, Button, Stack } from "@chakra-ui/react";
import { CardInstagram, TCard } from "./components/card.component";

function App() {
  const data: TCard[] = [
    {
      username: "jordan",
      avatar_url:
        "https://cdn.setirkanan.co.id/images/2023/05/02/0fccd2145f6f702bf1a634efc38217ec47ab7846/ezgif.com-gif-maker-(16).jpg",
      location: "Purwadhika BSD",
      image_url:
        "https://live.staticflickr.com/4909/30801388817_5c9abefe9c_b.jpg",
      caption: "nissan gtr",
      likes: 1000,
    },
    {
      username: "daffa",
      avatar_url:
        "https://i1.sndcdn.com/avatars-000210966670-q69y4a-t500x500.jpg",
      location: "Nusa Loka BSD",
      image_url:
        "https://thumbor.prod.vidiocdn.com/olKPU8YHfcaMlXDIerMHG3EAAFs=/smart/filters:strip_icc():quality(70)/vidio-web-prod-user/uploads/user/avatar/34758660/dafa_b0d9b6-dfabdb.jpg",
      caption: "100 sama kandang",
      likes: 1000000,
    },
  ];
  return (
    <>
      <Box
        bg={"black"}
        p={"20px"}
        w="100%"
        color={"white"}
        fontWeight={"700"}
        textTransform={"uppercase"}
        fontSize={"xx-large"}
      >
        hello
      </Box>

      <Stack width={"200px"} margin={"auto"} my={"40px"}>
        <Button colorScheme="facebook" size={"md"}>
          ok
        </Button>
        <Button colorScheme="twitter" size={"md"}>
          ok
        </Button>
        <Button colorScheme="red" size={"md"}>
          ok
        </Button>
        <Button colorScheme="yellow" size={"md"}>
          ok
        </Button>
      </Stack>

      <Stack gap={"20px"} alignItems={"center"}>
        {data.map((card) => (
          <CardInstagram {...card} />
        ))}
      </Stack>
    </>
  );
}

export default App;
