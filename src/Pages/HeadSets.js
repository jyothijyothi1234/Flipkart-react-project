import React from "react";
import { Grid, Typography, Button } from "@mui/material";

export default function HeadSets() {

    const HeadSetProduct = [
        {
          Image:
            "https://rukminim2.flixcart.com/image/612/612/l0sgyvk0/headphone/e/w/c/buds-z2-oneplus-original-imagcg5gfpcg5ndv.jpeg?q=70",
          Name: "One Plus Bullets Wireless",
          Price: 699,
        },
        {
          Image:
            "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/a/x/y/gusto-70-hours-playtime-bluetooth-wireless-neckband-headphones-original-imahffbj7cgp3kfe.jpeg?q=70",
          Name: "Ucool Gusto 70",
          Price: 1799,
        },
        {
          Image:
            "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/t/4/p/-original-imagrddw8rpjwfag.jpeg?q=70",
          Name: "Realme Buds Wireless",
          Price: 494,
        },
        {
          Image:
            "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/z/1/0/fire-t777-neckband-hi-bass-wireless-bluetooth-headphone-40-hours-original-imagwk9hd6z2zypr.jpeg?q=70",
          Name: "TECH FIRE",
          Price: 449,
        },
      ];


 
      const Handler=()=>{


        const filteredData=HeadSetProduct.map((item)=>item.Name.toLowerCase().includes)
      }

  return (
    <Grid container xs={12}>
      <Grid item xs={12} sx={{ padding: "40px" }}>
        <Typography sx={{ fontSize: "50px" }}>Wireless Buds</Typography>
      </Grid>
      <Grid container item xs={12} sx={{ marginBottom: "50px" }}>
        {HeadSetProduct.map((item) => (
          <DataWireless
            image={item.Image}
            name={item.Name}
            price={item.Price}
          />
        ))}
      </Grid>
    </Grid>
  );
}

function DataWireless(Props) {
  return (
    <Grid container item xs={3}>
      <Grid item xs={12}>
        <img
          src={Props.image}
          alt=" not found "
          style={{ height: "250px", width: "200px" }}
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
  );
}



