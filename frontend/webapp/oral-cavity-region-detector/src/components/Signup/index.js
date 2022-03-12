import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

// Styles
import {Wrapper,Container, Img, Form, Border} from '../Login/Login.styles'
import  {Navbar} from "../Navbar"



const Signup = () => {
  return (
    <Wrapper>
        <Navbar>
        <Link to="/adminlogin">Admin</Link>
        </Navbar>
        <Container>
        <Img/>
        <Form>
        <Border>
            <table>
                <tbody>
                <tr><th>Request access from:</th></tr>
                <tr>
                <th>
                <input list="admins" name="admins"/>
                <datalist id="admins">
                  <option value="admin1"/>
                  <option value="admin2"/>
                  <option value="admin3"/>
                  <option value="admin4"/>
                  <option value="admin5"/>
                </datalist>
                </th>
                </tr>
                <tr><th>Full Name:</th></tr>
                <tr>
                <th><input></input></th>
                </tr>
                <tr><th>Reg No:</th></tr>
                <tr>
                <th><input></input></th>
                </tr>
                <tr><th>Email:</th></tr>
                <tr>
                <th><input></input></th>
                </tr>
                <tr><th>Password:</th></tr>
                <tr>
                <th><input></input></th>
                </tr>
                <tr><th>Confirm Password:</th></tr>
                <tr>
                <th><input></input></th>
                </tr>
                <tr>
                <th><button type="button">Request to Sign up</button></th>
                </tr>
                <tr><th>Already have an account? <Link to="/"><span>Sign in</span></Link></th></tr>
                </tbody>
            </table>
        </Border>
        </Form>
        </Container>
    </Wrapper>

  )
}

export default Signup