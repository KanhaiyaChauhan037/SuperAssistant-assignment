// import React, { useState } from "react";
// import { Box, Flex, Text, Heading, Input, Checkbox } from "@chakra-ui/react";

// const Question2 = () => {
//   const [preview, setPreview] = useState("");
//   const [selectedWords, setSelectedWords] = useState([]);

//   const handleWordDoubleClick = (word) => {
//     setSelectedWords((prevSelectedWords) => [...prevSelectedWords, word]);
//   };

//   return (
//     <Box mt="1rem">
//       <Box
//         ml="20px"
//         borderLeft="5px solid #1598c0"
//         borderRadius="10px"
//         w="60%"
//         p="20px"
//         boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
//       >
//         <Heading mb="20px" size="sm">
//           Question 2
//         </Heading>
//         <Box>
//           <Text
//             fontWeight={"500"}
//             fontSize={["md"]}
//             mt={"10px"}
//             color="#374151"
//           >
//             Preview *
//           </Text>
//           <Input
//             readOnly
//             type="text"
//             contentEditable="false"
//             placeholder="Preview"
//             value={preview}
//           />
//         </Box>
//         <Box>
//           <Text
//             fontWeight={"500"}
//             fontSize={["md"]}
//             mt={"10px"}
//             color="#374151"
//           >
//             Sentence
//           </Text>
//           <Input
//             onChange={(e) => setPreview(e.target.value)}
//             type="text"
//             placeholder="Double click the word here to convert them into blanks"
//             onDoubleClick={(e) => {
//               const selectedWord = window.getSelection().toString().trim();
//               if (selectedWord) {
//                 handleWordDoubleClick(selectedWord);
//               }
//             }}
//           />
//         </Box>
//         <Box ml="15px" mt="20px">
//           {selectedWords.length === 0 ? (
//             <Checkbox>
//               <Input placeholder="option 1" />
//             </Checkbox>
//           ) : (
//             selectedWords.map((word, index) => (
//               <Box>
//                 <Checkbox mb="8px" key={index}>
//                   <Input value={word} />
//                 </Checkbox>
//               </Box>
//             ))
//           )}
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Question2;

// import React, { useState, useEffect } from "react";
// import { Box, Flex, Text, Heading, Input, Checkbox } from "@chakra-ui/react";

// const Question2 = () => {
//   const [preview, setPreview] = useState("");
//   const [sentence, setSentence] = useState("");
//   const [selectedWords, setSelectedWords] = useState([]);
//   const [questionsAndAnswers, setQuestionsAndAnswers] = useState([]);

//   useEffect(() => {
//     // Load data from Local Storage when the component mounts
//     const storedData = localStorage.getItem("questionsAndAnswers");
//     if (storedData) {
//       setQuestionsAndAnswers(JSON.parse(storedData));
//     }
//   }, []);

//   useEffect(() => {
//     // Save data to Local Storage whenever it changes
//     const dataToStore = JSON.stringify(questionsAndAnswers);
//     localStorage.setItem("questionsAndAnswers", dataToStore);
//   }, [questionsAndAnswers]);

//   const handleWordDoubleClick = (word) => {
//     setSelectedWords((prevSelectedWords) => [...prevSelectedWords, word]);
//   };

//   const handleAddQuestion = () => {
//     const newQuestion = {
//       sentence: sentence,
//       answers: selectedWords,
//     };

//     setQuestionsAndAnswers((prevQuestionsAndAnswers) => [
//       ...prevQuestionsAndAnswers,
//       newQuestion,
//     ]);

//     // Clear the input fields after adding a new question
//     setSentence("");
//     setSelectedWords([]);
//   };

//   return (
//     <Box mt="1rem">
//       <Box
//         ml="20px"
//         borderLeft="5px solid #1598c0"
//         borderRadius="10px"
//         w="60%"
//         p="20px"
//         boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
//       >
//         <Heading mb="20px" size="sm">
//           Question 2
//         </Heading>
//         <Box>
//           <Text
//             fontWeight={"500"}
//             fontSize={["md"]}
//             mt={"10px"}
//             color="#374151"
//           >
//             Preview *
//           </Text>
//           <Input
//             readOnly
//             type="text"
//             contentEditable="false"
//             placeholder="Preview"
//             value={preview}
//           />
//         </Box>
//         <Box>
//           <Text
//             fontWeight={"500"}
//             fontSize={["md"]}
//             mt={"10px"}
//             color="#374151"
//           >
//             Sentence
//           </Text>
//           <Input
//             onChange={(e) => setSentence(e.target.value)}
//             type="text"
//             placeholder="Double click the word here to convert them into blanks"
//             onDoubleClick={(e) => {
//               const selectedWord = window.getSelection().toString().trim();
//               if (selectedWord) {
//                 handleWordDoubleClick(selectedWord);
//               }
//             }}
//             value={sentence}
//           />
//         </Box>
//         <Box ml="15px" mt="20px">
//           {selectedWords.length === 0 ? (
//             <Checkbox>
//               <Input placeholder="option 1" />
//             </Checkbox>
//           ) : (
//             selectedWords.map((word, index) => (
//               <Box key={index}>
//                 <Checkbox mb="8px">
//                   <Input value={word} />
//                 </Checkbox>
//               </Box>
//             ))
//           )}
//         </Box>
//         <Box mt="20px">
//           <button onClick={handleAddQuestion}>Add Question</button>
//         </Box>
//         <Box mt="20px">
//           <Text fontWeight="500">Stored Questions and Answers:</Text>
//           {questionsAndAnswers.map((qa, index) => (
//             <Box key={index} mt="10px">
//               <Text>Question: {qa.sentence}</Text>
//               <Text>Answers: {qa.answers.join(", ")}</Text>
//               <Text>
//                 Sentence:{" "}
//                 {qa.answers.reduce(
//                   (modifiedSentence, answer) =>
//                     modifiedSentence.replace(
//                       new RegExp("\\b" + answer + "\\b", "gi"),
//                       "____"
//                     ),
//                   qa.sentence
//                 )}
//               </Text>
//             </Box>
//           ))}
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Question2;


import React, { useState } from "react";
import { Box, Input, Checkbox, Button, Text,useToast } from "@chakra-ui/react";

const PostQuestion = () => {
  const [sentence, setSentence] = useState("");
  const [selectedWords, setSelectedWords] = useState([]);
  const toast = useToast();
  const handleWordDoubleClick = (word) => {
    setSelectedWords((prevSelectedWords) => [...prevSelectedWords, word]);
  };

  const handleAddQuestion = () => {
    const newQuestion = {
      sentence: sentence,
      answers: selectedWords,
    };

    fetch("https://super-lvuk.onrender.com/api/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newQuestion),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add the question.");
        }
        return response.json();
      })
      .then(() => {
        setSentence("");
          toast({
            title: `Question Created successfully`,
            position: "top",
            status: "success",
            isClosable: "true",
            duration: 2000,
          });
        setSelectedWords([]);
      })
      .catch((error) => {
        console.error("Error while adding the question:", error);
      });
  };

  return (
    <Box mt="1rem">
      <Box
        ml="20px"
        borderLeft="5px solid #1598c0"
        borderRadius="10px"
        w="60%"
        p="20px"
        boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
      >
        <Text mb="20px" fontWeight="bold" fontSize="lg">
          Cloze type Question
        </Text>
        <Box>
          <Input type="text" placeholder="preview" value={sentence} readOnly />
        </Box>
        <Box>
          <Text fontWeight="500" fontSize="md" mt="10px" color="#374151">
            Sentence
          </Text>
          <Input
            onChange={(e) => setSentence(e.target.value)}
            type="text"
            placeholder="Double click the word here to convert them into blanks"
            onDoubleClick={(e) => {
              const selectedWord = window.getSelection().toString().trim();
              if (selectedWord) {
                handleWordDoubleClick(selectedWord);
              }
            }}
            value={sentence}
          />
        </Box>
        <Box ml="15px" mt="20px">
          {selectedWords.length === 0 ? (
            <Checkbox>
              <Input placeholder="option 1" />
            </Checkbox>
          ) : (
            selectedWords.map((word, index) => (
              <Box key={index}>
                <Checkbox mb="8px">
                  <Input value={word} />
                </Checkbox>
              </Box>
            ))
          )}
        </Box>
        <Box w="20%" m="auto">
          <Button mt="30px" onClick={handleAddQuestion} colorScheme="teal">
            Add Question
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PostQuestion;
