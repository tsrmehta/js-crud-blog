import { useState, useRef, useEffect } from "react";

import InputImage from "../../components/image-input/image-input.component";
import FormHeader from "../../components/form-header/form-header.component";
import TextInput from "../../components/text-input/text-input.component";
import FormInput from "../../components/form-input/form-input.component";
import TagInput from "../../components/tag-input/tag-input.component";

import { PostBlogFormWrapper, PostBlogForm } from "./post-blog.styles";

const DEFAULT_BLOGDATA = {
  articleBody: "",
  datePublished: new Date(),
  description: "",
  image: {
    caption: "",
    imageId: 0,
  },
  headline: "",
  keywords: [],
  viewableBy: "Anyone",
};

const PostBlog = () => {
  const [blogImage, setBlogImage] = useState(null);
  const [blogData, setBlogData] = useState(DEFAULT_BLOGDATA);

  const contentEdityableRef = useRef(null);
  const isFirstmount = useRef(0);

  const handleImageInput = (e) => {
    const imageFile = e.target.files[0];
    setBlogImage(imageFile);
  };

  const handleTextInput = (e) => {
    const { name, value } = e.target;
    const newBlogdata = { ...blogData, [name]: value };
    setBlogData(newBlogdata);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  const handleDivChange = (e) => {
    const currentText = e.target.innerText;
    const currentKewords = blogData.keywords;
    const currentKeywordsString = currentKewords.join("");

    if (currentText.includes(currentKeywordsString)) return;

    setBlogData({ ...blogData, keywords: [...currentKewords] });
  };

  const handleKeyUpEvent = (e) => {
    if (e.keyCode === 13) {
      const currentText = e.target.innerText;

      const currentKewords = blogData.keywords;
      const currentKeywordsString = currentKewords.join("");
      const reqWord = currentText.replace(currentKeywordsString, "");
      const trimedWord = reqWord?.trim();

      const newKewords = [...currentKewords, trimedWord];

      setBlogData({ ...blogData, keywords: newKewords });

      //* some other way with error
      // const currentKeywordsLength = currentKewords.length;
      // const lastWord = currentKeywordsLength
      //   ? currentKewords[currentKeywordsLength - 1]
      //   : "";

      // const indexOflastWord = currentKeywordsLength
      //   ? currentText.lastIndexOf(lastWord)
      //   : 0;
      // // console.log(indexOflastWord);

      // const reqWord = currentText.slice(indexOflastWord + lastWord.length);
      //alternative logic---> reqWord.replace(lastWord,"");

      // e.target.innerHTML = ""
      // const childs = e.target.childNodes;
      // childs.forEach((c) => {
      //   console.log(c.tagName);
      //   if (c.tagName === "DIV") {
      //     // return c.remove();
      //   }
      //   // return c.nodeType === Node.TEXT_NODE && c.remove();
      // });

      // console.log(e.target.childNodes);
    }
  };

  function setEndOfContenteditable(contentEditableElement) {
    var range, selection;
    if (document.createRange) {
      //Firefox, Chrome, Opera, Safari, IE 9+
      range = document.createRange(); //Create a range (a range is a like the selection but invisible)
      range.selectNodeContents(contentEditableElement); //Select the entire contents of the element with the range
      range.collapse(false); //collapse the range to the end point. false means collapse to end rather than the start
      selection = window.getSelection(); //get the selection object (allows you to change selection)
      selection.removeAllRanges(); //remove any selections already made
      selection.addRange(range); //make the range you have just created the visible selection
    } else if (document.selection) {
      //IE 8 and lower
      range = document.body.createTextRange(); //Create a range (a range is a like the selection but invisible)
      range.moveToElementText(contentEditableElement); //Select the entire contents of the element with the range
      range.collapse(false); //collapse the range to the end point. false means collapse to end rather than the start
      range.select(); //Select the range (make it the visible selection
    }
  }

  useEffect(() => {
    if (isFirstmount.current < 2) {
      isFirstmount.current += 1;
    } else {
      setEndOfContenteditable(contentEdityableRef.current);
    }
    // contentEdityableRef.current.focus();
  }, [blogData.keywords]);

  const removeTag = (index) => {
    const currentKeywords = blogData.keywords;
    currentKeywords.splice(index, 1);
    setBlogData({ ...blogData, keywords: currentKeywords });
  };

  return (
    <PostBlogFormWrapper>
      <PostBlogForm onSubmit={handleFormSubmit}>
        <FormHeader />
        <FormInput
          labelText="Enter Your Blog Header"
          inputName="headline"
          handleTextInput={handleTextInput}
          inputValue={blogData.headline}
        />
        <TextInput
          labelText="Enter Your Article Body"
          inputName="articleBody"
          handleTextInput={handleTextInput}
          inputValue={blogData.articleBody}
        />
        <FormInput
          labelText="Enter Your Blog description"
          inputName="description"
          handleTextInput={handleTextInput}
          inputValue={blogData.description}
        />
        <TagInput
          labelText="Enter Tags For your Post"
          removeTag={removeTag}
          ref={contentEdityableRef}
          handleDivChange={handleDivChange}
          handleKeyUpEvent={handleKeyUpEvent}
          keywords={blogData.keywords}
        />
        <InputImage handleImageInput={handleImageInput} />
        <button>Submit</button>
      </PostBlogForm>
    </PostBlogFormWrapper>
  );
};

export default PostBlog;
