import React from "react";
import { ReactDOM } from "react";
import App from './App';
import './login.css';
import Formaction from './formaction';
function Login(){
    return <React.Fragment>
        
        {/* <div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="modal-box">
                
                 <button type="button" class="btn btn-primary btn-lg show-modal" data-toggle="modal" data-target="#myModal">
                  Login Form
                </button> 
 
                
                <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content clearfix">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"></span></button>
                            <div class="modal-body">
                                <h3 class="title">Login Form</h3>
                                <p class="description">Login here Using Email & Password</p>
                                <form>
                                <div class="form-group">
                                    <span class="input-icon"><i class="fa fa-user"></i></span>
                                    <input type="email" class="form-control" placeholder="Enter email"/>
                                </div>
                                <div class="form-group">
                                    <span class="input-icon"><i class="fas fa-key"></i></span>
                                    <input type="password" class="form-control" placeholder="Password"/>
                                </div>
                                <div class="form-group checkbox">
                                    <input type="checkbox"/>
                                    <label>Remamber me</label>
                                </div>
                                <a href="" class="forgot-pass">Forgot Password?</a>
                                <button type="button" class="btn">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> */}
{/* <form action="action_page.php" method="post">
  <div class="imgcontainer">
    <img src="img_avatar2.png" alt="Avatar" class="avatar"/>
  </div>

  <div class="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>

    <button type="submit">Login</button>
    <label>
      <input type="checkbox" checked="checked" name="remember"/> Remember me
    </label>
  </div>

  <div class="container" style="background-color:#f1f1f1">
    <button type="button" class="cancelbtn">Cancel</button>
    <span class="psw">Forgot <a href="#">password?</a></span>
  </div>
</form> */}



{/* <div class="pt-5">
  <h1 class="text-center">HTML Login Page with Bootstrap Example</h1>
  
<div class="container">
                <div class="row">
                    <div class="col-md-5 mx-auto">
                        <div class="card card-body">
                                                    
                            <form id="submitForm" action="/login" method="post" data-parsley-validate="" data-parsley-errors-messages-disabled="true" novalidate="" _lpchecked="1">
                                <input type="hidden" name="_csrf" value="7635eb83-1f95-4b32-8788-abec2724a9a4"/>
                                <div class="form-group required">
                                    <lSabel for="username">Username / Email</lSabel>
                                    <input type="text" class="form-control text-lowercase" id="username" required="" name="username" value=""/>
                                </div>                    
                                <div class="form-group required">
                                    <label class="d-flex flex-row align-items-center" for="password">Password 
                                        <a class="ml-auto border-link small-xl" href="/forget-password">Forget?</a></label>
                                    <input type="password" class="form-control" required="" id="password" name="password" value=""/>
                                </div>
                                <div class="form-group mt-4 mb-4">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="remember-me" name="remember-me" data-parsley-multiple="remember-me"/>
                                        <label class="custom-control-label" for="remember-me">Remember me?</label>
                                    </div>
                                </div>
                                <div class="form-group pt-1">
                                    <button class="btn btn-primary btn-block" type="submit">Log In</button>
                                </div>
                            </form>
                            <p class="small-xl pt-3 text-center">
                                <span class="text-muted">Not a member?</span>
                                <a href="/signup">Sign up</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
</div> */}
<ul className="size">
  <li><a href="/">HOME</a></li>
  <li><a href="/Contact">DRAWINGS</a></li>
  <li><a href="/App1">STORY</a></li>
  <li><a href="/story">CONTACT</a></li>
  <li><a href="/login">LOGIN</a></li>
  {/* <li><a href="/">ABOUT</a></li> */}
</ul>
<div className="div">  
    <center> <h1>  Login Form </h1> </center> 
    <form>
        <div class="container"> 
            <label>Username : </label> 
            <input type="text" placeholder="Enter Username" name="username" required/>
            <label>Password : </label> 
            <input type="password" placeholder="Enter Password" name="password" required/>
            <button type="submit" formAction={<Formaction/>}>Login</button> 
            <input type="checkbox" checked="checked"/> Remember me 
            <button type="button" class="cancelbtn"> Cancel</button> 
            Forgot <a href="#"> password? </a> 
        </div> 
    </form>   
</div>   
    </React.Fragment>

}
export default Login;