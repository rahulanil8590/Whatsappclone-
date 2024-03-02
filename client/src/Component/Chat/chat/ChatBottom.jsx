//Material ui component Initialization
import { Box  , styled ,InputBase} from '@mui/material'
import {EmojiEmotionsOutlined , AttachFile , Mic} from '@mui/icons-material'
//end Initialization
// Hooks initialization
import React, { useEffect } from 'react'

// Hooks End

// Component import
import { uploadfile } from '../../../Service/Api'
//End Component
function ChatBottom({sendText ,setvalue , value , file ,setfile ,setImage}) {
  useEffect(() => {
    const getImage = async() =>{
      console.log(file ,"===file ");
      if (file) {
        let data = new FormData();
        data.append('name', file.name);
        data.append('file', file);
        console.log('Data of file:', data);
      
        try {
          const response =  await uploadfile(data);
          console.log('Response:', response.data);
          if (response && response.data) {
            setImage(response.data);
          } else {
            console.error('Invalid response format:', response);
          }
        } catch (error) {
          console.error('Error uploading file:', error);
        }
      }
    }
      
    getImage()
  },[file])
  const handlerInputBox =(e) =>{
    setvalue(e.target.value)
  }
  const handlefile = (e) =>{
    console.log(e.target.files[0], '==file');
    setfile(e.target.files[0])
    setvalue(e.target.files[0].name)
  }
  //css style
  const Container = styled(Box)`
  height: 55px;
  background: #ededed;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 15px;
  &  > * {
      margin: 5px;
      color: #919191;
  }
`;

const Input_Container = styled(Box)`
  border-radius: 18px;
  background-color: #FFFFFF;
  width: calc(94% - 100px);
`;

// const InputField = styled('input')({
//   width: '100%',
//   padding: '20px',
//   paddingLeft: '25px',
//   fontSize: '14px',
//   height: '20px',
// })
 

const InputField = styled(InputBase)`
  width: 100%;
  padding: 20px;
  padding-left: 25px;
  font-size: 14px;
  height: 20px;
`;

const ClipIcon = styled(AttachFile)`
  transform: 'rotate(40deg)'
`;
  //End
  return (
    <Container>
        <EmojiEmotionsOutlined/>
        <label htmlFor="clipfile">
        <ClipIcon/>
        </label>
        <input
         type='file'
         id='clipfile'
         style={{display: 'none'}}
         onChange={(e) => handlefile(e)}
         />
        <Input_Container>
            <InputField
              placeholder=' Enter the mssage'
              value={value}
              onChange={handlerInputBox}
              onKeyPress={(e) => sendText(e)}
            />
        </Input_Container>
        <Mic/>
    </Container>
  )
}

export default ChatBottom
