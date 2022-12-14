// App.js
// Kindacode.com
import { useState } from "react";
import nearestColor from 'nearest-color';
import colorNameList from 'color-name-list'

const App = () => {
    const [selectedImage, setSelectedImage] = useState();

    // This function will be triggered when the file field change
    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
        }
    };

    // This function will be triggered when the "Remove This Image" button is clicked
    const removeSelectedImage = () => {
        setSelectedImage();
    };

    const colors = colorNameList.reduce((o, { name, hex }) => Object.assign(o, { [name]: hex }), {});

    const nearest = nearestColor.from(colors);

    // get closest named color
    nearest('#f1c1d1'); // => Fairy Tale

    return (
        <>
            <div style={styles.container}>
                <input
                    accept="image/*"
                    type="file"
                    onChange={imageChange}
                />

                {selectedImage && (
                    <div style={styles.preview}>
                        <img
                            src={URL.createObjectURL(selectedImage)}
                            style={styles.image}
                            alt="Thumb"
                        />
                        <button onClick={removeSelectedImage} style={styles.delete}>
                            Remove This Image
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default App;

// Just some styles
const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 50,
    },
    preview: {
        marginTop: 50,
        display: "flex",
        flexDirection: "column",
    },
    image: { maxWidth: "100%", maxHeight: 320 },
    delete: {
        cursor: "pointer",
        padding: 15,
        background: "red",
        color: "white",
        border: "none",
    },
};