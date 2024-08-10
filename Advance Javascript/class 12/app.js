import {
  getDownloadURL,
  ref,
  storage,
  uploadBytesResumable,
  doc,
  setDoc,
  db,
  addDoc,
  collection,
  getDocs,
} from "./js/firebase.js";

window.addEventListener("load", async () => {
  const uid = localStorage.getItem("uid");

  const snapShots = await getDocs(collection(db, "blogs"));
  const tempArr = [];
  snapShots.forEach((doc) => {
    if (doc.data().isPrivate) {
      //   console.log("isPrivate", isPrivate);
      if (doc.data().uid == uid) {
        const obj = {
          ...doc.data(),
          id: doc.id,
        };
        tempArr.push(obj);
      }
    } else {
      const obj = {
        ...doc.data(),
        id: doc.id,
      };
      tempArr.push(obj);
    }
  });
  console.log("tempArr", tempArr);

  renderBlogUI(tempArr);
});

const title = document.getElementById("title");
const content = document.getElementById("content");
const image = document.getElementById("image");
const uid = localStorage.getItem("uid");
const createBlog = document.getElementById("createBlog");
const parent = document.getElementById("parent");
const flexSwitchCheckChecked = document.getElementById(
  "flexSwitchCheckChecked"
);

const handleSubmit = async () => {
  console.log("Title ", title.value);
  console.log("Image", image.files[0]);
  const imageUrl = await uploadImage(image.files[0]);
  const blogObj = {
    title: title.value,
    content: content.value,
    imageUrl: imageUrl,
    uid: uid,
    isPrivate: flexSwitchCheckChecked.checked,
  };

  await addDoc(collection(db, "blogs"), blogObj);
  var myModalEl = document.getElementById("createBlog");
  var modal = bootstrap.Modal.getInstance(myModalEl);
  modal.hide();

  alert("Blog Sucessfully Created.");

  //   console.log("imageUrl ", imageUrl);
  //   console.log("Content", content.value);
};

const renderBlogUI = (tempArr) => {
  //   const arr = [1, 2, 3, 4, 5];
  for (const value of tempArr) {
    parent.innerHTML += ` <div class="col-lg-6 col-md-12 col-sm-12 my-2">
          <div class="card">
            <h5 class="card-header">
              <img
                src="${value.imageUrl}"
                width="100%"
                height="300px"
                alt=""
              />
            </h5>
            <div class="card-body">
              <h5 class="card-title"> ${value.title} </h5>
              <p class="card-text">
              ${value.content}
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>`;
  }
};

const uploadImage = (file) => {
  return new Promise((resolve, reject) => {
    const metadata = {
      contentType: "image/jpeg",
    };

    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, "images/" + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        //   switch (error.code) {
        //     case 'storage/unauthorized':
        //       // User doesn't have permission to access the object
        //       break;
        //     case 'storage/canceled':
        //       // User canceled the upload
        //       break;

        //     // ...

        //     case 'storage/unknown':
        //       // Unknown error occurred, inspect error.serverResponse
        //       break;
        //   }
        reject(error);
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          resolve(downloadURL);
        });
      }
    );
  });
};

window.handleSubmit = handleSubmit;
