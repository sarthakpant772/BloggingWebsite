import { Box, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import Card from "../../molecules/Card";
import axios from "axios";

interface IDataset {
  _id: string;
  createdAt: string;
  title: string;
  description: string;
}

const ShowAllBlog = () => {
  const [loding, setLoading] = useState<boolean>(true);
  const [dataset, setDataset] = useState<IDataset[]>([
    {
      _id: "",
      createdAt: "",
      title: "",
      description: "",
    },
  ]);

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://blogging-website-wine.vercel.app/blog/allBlogs"
      );
      // console.log({ ...res.data });
      setDataset(res.data);
      // console.log(dataset);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box
      sx={{
        width: "95%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {loding ? (
        <Skeleton
          sx={{
            width: "100%",
            height: "7em",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "1em",
          }}
          animation="wave"
          variant="rectangular"
        />
      ) : (
        // <Typography>loading...</Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {dataset.map((data) => (
            <Card {...data} />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default ShowAllBlog;
