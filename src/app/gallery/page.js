"use client";
import { gallery } from "@/data";
import React, { useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { imagedata } from "@/imagedata";
import styles from "./page.module.css";
// let listOfImages = [];

// let allcat = gallery.gallery.map((g) => {
//   return g.category;
// });

export default function Gallery() {
  let listofallimage_temp = [];
  imagedata.map((img) => {
    img.image.map((i) => {
      listofallimage_temp.push(
        img.category.replaceAll(" ", "")?.toLowerCase() + i + ".jpg"
      );
    });
  });

  const [cat, setCat] = React.useState("");
  let [listofallimage, setListofallimage] = React.useState(listofallimage_temp);
  let [filteredimagedata, setFilteredimagedata] = React.useState([]);

  function importAll(r) {
    return r.keys().map(r);
  }

  // listOfImages = importAll(
  //   require.context(
  //     "../../../public/gallery/wedding/",
  //     false,
  //     /\.(png|jpe?g|svg)$/
  //   )
  // );

  useEffect(() => {
    let filteredimagedata_temp = [];
    imagedata.map((img) => {
      if (img.category.replaceAll(" ", "")?.toLowerCase() == cat) {
        img.image.map((i) => {
          filteredimagedata_temp.push(
            img.category.replaceAll(" ", "")?.toLowerCase() + i + ".jpg"
          );
        });
      }
    });

    setFilteredimagedata(filteredimagedata_temp);

    return () => {
      setFilteredimagedata([]);
    };
  }, [cat]);

  const Tags = () => {
    return [
      <button onClick={(e) => setCat("")} className={styles["tags"]}>
        All
      </button>,
      ...gallery.gallery.map((g) => {
        return (
          <button
            className={styles["tags"]}
            onClick={(e) =>
              setCat(e.target.textContent.replaceAll(" ", "")?.toLowerCase())
            }
          >
            {g.category}
          </button>
        );
      }),
    ];
  };

  const ImageView = () => {
    return (
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry columnsCount={5} gutter="20px">
          {cat == "" &&
            listofallimage.map((img, i) => {
              return (
                <img
                  key={i}
                  src={`/gallery/${img}`}
                  style={{
                    width: "100%",
                    display: "block",
                    borderRadius: "var(--border-radius)",
                  }}
                />
              );
            })}
          {cat !== "" &&
            filteredimagedata.map((img, i) => {
              console.log(img);
              return (
                <img
                  key={i}
                  src={`/gallery/${img}`}
                  style={{
                    width: "100%",
                    display: "block",
                    borderRadius: "var(--border-radius)",
                  }}
                />
              );
            })}
        </Masonry>
      </ResponsiveMasonry>
    );
  };

  return (
    <div className="container">
      <div style={{ textAlign: "center" }}>
        <Tags />
      </div>
      <ImageView />
    </div>
  );
}
