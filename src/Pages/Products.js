import React from "react";
import { Grid, Typography, Button } from "@mui/material";

export default function Product({ search }) {
  const Handler = () => {
    const Search = ProductData.map(
      (item) => item.ProductName.toLowerCase().includes
    );
  };

  const ProductData = [
    {
      Image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/0/z/w/-original-imaghhvg4zhuz87z.jpeg?q=70",
      ProductName: "Bolt Astra",
      ProductPrice: 1499,
    },
    {
      Image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/s/7/f/-original-imahf4qppx6fkxtw.jpeg?q=70",
      ProductName: "Bolt Y1",
      ProductPrice: 1199,
    },
    {
      Image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/f/y/f/-original-imahy3uqgtzmdsge.jpeg?q=70",
      ProductName: "realme Buds",
      ProductPrice: 1499,
    },
    {
      Image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/a/5/0/-original-imahy3uqdmgx6qey.jpeg?q=70",
      ProductName: "realme Buds T111",
      ProductPrice: 1499,
    },
  ];

  return (
    <Grid container item xs={12}>
      <Grid item xs={12}>
        <Typography sx={{ fontSize: "50px", padding: "25px 0 25px 0" }}>
          Buds Products
        </Typography>
      </Grid>

      <Grid container item xs={12}>
        {ProductData.map((item) => (
          <DataProducts
            image={item.Image}
            name={item.ProductName}
            price={item.ProductPrice}
          />
        ))}
      </Grid>
    </Grid>
  );
}

function DataProducts(Props) {
  return (
    <Grid container xs={3}>
      <Grid container item xs={12}>
        <Grid item xs={12}>
          <img
            src={Props.image}
            alt="not found"
            style={{ height: "150px", width: "200px" }}
          />
        </Grid>

        <Grid item xs={12}>
          <Typography sx={{ fontSize: "30px" }}>{Props.name}</Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography sx={{ fontSize: "30px" }}>{Props.price}</Typography>
        </Grid>

        <Grid item xs={5}>
          <Button
            variant="contained"
            sx={{ width: "120px", padding: "9px", marginLeft: "80px" }}
          >
            ADD TO CART
          </Button>
        </Grid>

        <Grid item xs={5}>
          <Button variant="contained" sx={{ width: "120px", padding: "9px" }}>
            BUY NOW
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
