
// import React, { useState } from 'react';

// const App = () => {
//   const [data, setData] = useState({
//     username: '',
//     email: '',
//     pass: '',
//   });

//   const [errors, setErrors] = useState({
//     email: '',
//     pass: '',
//   });

//   const { username, email, pass } = data;

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData({
//       ...data,
//       [name]: value,
//     });

//     setErrors({
//       ...errors,
//       [name]: '',
//     });
//   };

//   const isEmailValid = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const isPasswordValid = (password) => {
//     const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,}$/;
//     return passwordRegex.test(password);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newErrors = {};

//     if (username=== '') {
//       newErrors.username = 'Please enter your name';
//     }

//     if (email=== '') {
//       newErrors.email = 'Please enter your email address';
//     }

//     if (pass=== '') {
//       newErrors.pass = 'Please enter your password';
//     }

//     if (!isEmailValid(email)) {
//       newErrors.email = 'Please enter a valid email address';
//     }

//     if (!isPasswordValid(pass)) {
//       newErrors.pass =
//         'Password should be at least 6 characters and contain at least one uppercase letter, one special character, and one number';
//     }
//     setErrors(newErrors);
//     console.log('Form data:', data);
//   };

//   return (
//     <div>
//       <form>
//         <div>
//           <input
//             type="text"
//             name="username"
//             value={username}
//             onChange={handleChange}
//             placeholder="name"
//           />
//           {errors.username && <p className="error">{errors.username}</p>}
//         </div>
//         <div>
//           <input
//             type="email"
//             name="email"
//             value={email}
//             onChange={handleChange}
//             placeholder="email"
//           />
//           {errors.email && <p className="error">{errors.email}</p>}
//         </div>
//         <div>
//           <input
//             type="password"
//             name="pass"
//             value={pass}
//             onChange={handleChange}
//             placeholder="password"
//           />
//           {errors.pass && <p className="error">{errors.pass}</p>}
//         </div>
//         <button onClick={handleSubmit}>Submit</button>
//       </form>
//     </div>
//   );
// };

// export default App;


import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Heading,
  Input,
  List,
  ListItem,
  Text,
  useToast,
} from "@chakra-ui/react";

function App() {
  const toast = useToast();
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editing, setediting] = useState(null);
  const [edite, Setedite] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
      showToast("Task added", "success");
    } else {
      showToast("Please enter a task", "warning");
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    showToast("Task deleted", "success");
  };

  const toggletask = (taskId) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  const startediting = (taskId) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    setediting(taskId);
    Setedite(taskToEdit.text);
  };

  const cancelediting = () => {
    setediting(null);
    Setedite("");
  };

  const saveEditedTask = () => {
    if (edite !== "") {
      setTasks(
        tasks.map((task) => {
          if (task.id === editing) {
            return { ...task, text: edite };
          }
          return task;
        })
      );
      setediting(null);
      Setedite("");
      showToast("Task updated", "success");
    } else {
      showToast("Please enter a task", "warning");
    }
  };

  const showToast = (message, status) => {
    toast({
      title: message,
      status: status,
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box p={4} m="auto" w="40rem">
      <Heading as="h1" mb={4} textAlign={"center"}>
        Todo App
      </Heading>
      <FormControl mb={4}>
        <FormLabel>Add a new task</FormLabel>
        <Input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter task"
        />
      </FormControl>
      <Button colorScheme="teal" mb={4} onClick={addTask}>
        Add Task
      </Button>
      <List spacing={2}>
        {tasks.map((task) => (
          <ListItem key={task.id} display="flex" alignItems="center">
            {editing === task.id ? (
              <>
                <FormControl flex={1} mr={2}>
                  <Input
                    type="text"
                    value={edite}
                    onChange={(e) => Setedite(e.target.value)}
                  />
                </FormControl>
                <Button colorScheme="teal" onClick={saveEditedTask} mr={2}>
                  Save
                </Button>
                <Button onClick={cancelediting}>Cancel</Button>
              </>
            ) : (
              <>
                <Checkbox
                  isChecked={task.completed}
                  onChange={() => toggletask(task.id)}
                  mr={2}
                />
                <Text
                  flex={1}
                  className={task.completed ? "completed" : ""}
                  textDecoration={task.completed ? "line-through" : "none"}
                >
                  {task.text}
                </Text>
                <Button
                  colorScheme="teal"
                  onClick={() => startediting(task.id)}
                  mr={2}
                >
                  Edit
                </Button>
                <Button onClick={() => deleteTask(task.id)}>Delete</Button>
              </>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default App;
