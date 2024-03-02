import { Box, InputBase } from '@mui/material'
import React from 'react'
import { Search } from '@mui/icons-material'
import styled from '@emotion/styled'
function SearchFeild({setText}) {
    const Component = styled(Box)`
            height : 45px;
            background: #fff;
            border-bottom : 1px solid  #F2F2F2;
            display : flex;
            align-items: center;
           `
    const Wrapper = styled(Box)`
            background-color: #f0f2f5;
            position : relative;
            margin: 0 13px;
            border-radius: 20px;
            width: 100%;
    `
    const SearchBox = styled(Box)`
    position : absolute;
    padding : 6px 10px;
    height : 100%;
    color: #919191;

    `
    const InputBox = styled(InputBase)`
            width: 100%;
            padding: 16px;
            padding-left: 65px;
            height : 15px;
            font-size: 14px;

    `
  return (
    <Component>
        <Wrapper>
            <SearchBox>
                <Search
                fontSize='small'/>
            </SearchBox>
            <InputBox
            placeholder='Search or start new chat'
            onChange={(e) => setText(e.target.value)}/>
            
        </Wrapper>
    </Component>
  )
}

export default SearchFeild
