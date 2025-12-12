import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

function Flipkart() {
  const [cartItems, setCartItems] = useState(0);

  const [search, setSearch] = useState("");
  // const [filterUpdate, setFilterUpdate] = useState([]);
  const [buy, setBuy] = useState(0);

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

  const handleAddToCart = () => {
    setCartItems(cartItems + 1);
  };

  const handlebuyer = () => {

    setBuy(buy + 1)

  }


  // const Handler=()=>{
  //   const data= ProductData.filter((item)=>

  //     item.ProductName.toLowerCase().includes(search.toLowerCase())

  //       );
  //       setFilterUpdate(search);

  //     }

  // const handleSearch = () => {
  //   const filteredData = ProductData.filter((item) =>
  //     item.ProductName.toLowerCase().includes(search.toLowerCase())
  //   );
  //   setFilterUpdate(filteredData);
  // };

  return (
    <Grid container xs={12}>
      <Grid
        item
        xs={12}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{ bgcolor: "white", border: "1px solid white", marginTop: "20px" }}
      >
        <img
          src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
          alt="not found"
        />
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1, width: "800px" }}
            placeholder="Search For Products Brands and More"
            inputProps={{ "aria-label": "search google maps" }}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Paper>

        <Button
          variant="contained"
          height={"400px"}
          sx={{
            color: "black",
            border: "1px solid white",
            bgcolor: "blue",
            borderRadius: "10px",
          }}
        // onClick={() =>setFilterUpdate(Handler) }
        >
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" alt="not found"

          />
          Login{buy}
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxNCAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF80OTc0Xzc1OTY5KSI+CjxwYXRoIGQ9Ik0zIDJMNyA2TDExIDIiIHN0cm9rZT0iIzExMTExMiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2RfNDk3NF83NTk2OSIgeD0iMC4yNSIgeT0iMC4yNSIgd2lkdGg9IjEzLjUiIGhlaWdodD0iOS44MTI1IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHk9IjEiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMSIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xNiAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzQ5NzRfNzU5NjkiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfNDk3NF83NTk2OSIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPC9kZWZzPgo8L3N2Zz4K"
            alt="not found"
          />
        </Button>
        <Button
          variant="contained"
          sx={{
            color: "black",
            border: "1px solid white",
            borderRadius: "10px",
            height: "50px"
          }}
        >
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"
            alt="not found"
          />
          Cart ({cartItems})
        </Button>

        <Button
          variant="contained"
          sx={{
            color: "black",
            border: "1px solid white",
            borderRadius: "10px",
            height: "50px"
          }}
        >
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg"
            alt="not found"
          />
          Become a Seller
        </Button>

        <Button
          variant="contained"
          sx={{
            color: "black",
            border: "1px solid white",
            bgcolor: "white",
            borderRadius: "10px",
          }}
        >
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_3verticalDots-ea7819.svg"
            alt="not found"
          />
        </Button>
      </Grid>

      {/* <Grid container xs={12}>
         <Grid item xs={10}></Grid>
      </Grid>  */}

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
              onAddToCart={handleAddToCart}
              buyAdd={handlebuyer}
            />
          ))}
        </Grid>

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
                onAddToCart={handleAddToCart}
                buyAdd={handlebuyer}

              />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

function DataProducts({ image, name, price, onAddToCart, buyAdd }) {
  return (
    <Grid container xs={3}>
      <Grid container item xs={12}>
        <Grid item xs={12}>
          <img
            src={image}
            alt="not found"
            style={{ height: "150px", width: "200px" }}
          />
        </Grid>

        <Grid item xs={12}>
          <Typography sx={{ fontSize: "30px" }}>{name}</Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography sx={{ fontSize: "30px" }}>{price}</Typography>
        </Grid>

        <Grid item xs={5}>
          <Button
            variant="contained"
            sx={{ width: "120px", padding: "9px", marginLeft: "80px" }}
            onClick={onAddToCart}
          // onClick={()=>{dispatch(increment(cartItems))}}
          >
            ADD TO CART
          </Button>
        </Grid>

        <Grid item xs={5}>
          <Button
            variant="contained"
            sx={{ width: "120px", padding: "9px", marginLeft: "50px" }}
            onClick={buyAdd}
          >
            BUY NOW
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

function DataWireless({ name, price, image, onAddToCart, buyAdd }) {
  return (
    <Grid container item xs={3}>
      <Grid item xs={12}>
        <img
          src={image}
          alt=" not found "
          style={{ height: "250px", width: "200px" }}
        />
      </Grid>

      <Grid item xs={12}>
        <Typography sx={{ fontSize: "30px" }}>{name}</Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography sx={{ fontSize: "30px" }}>{price}</Typography>
      </Grid>

      <Grid item xs={5}>
        <Button
          variant="contained"
          sx={{ width: "120px", padding: "9px", marginLeft: "80px" }}
          onClick={onAddToCart}
        // onClick={()=>{dispatch(increment(cartItems))}}
        >
          ADD TO CART
        </Button>
      </Grid>

      <Grid item xs={5}>
        <Button
          variant="contained"
          sx={{ width: "120px", padding: "9px", marginLeft: "50px" }}
          onClick={buyAdd}
        >
          BUY NOW
        </Button>
      </Grid>
    </Grid>
  );
}

export default Flipkart;