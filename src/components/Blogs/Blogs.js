import React from 'react';
import './Blogs.css';
const Blogs = () => {
    return (
        <div className='container'>
            <div className='mt-5 ques'>
                <h2>Q-1: Defference between authentication and authorization.</h2>
                <div className='ans-1 mt-3'>
                <div>
                <h4>Authentication:</h4>
                <p>1. In authentication process, users or persons are verified.</p>
                <p>2. It is done before the authorization process.</p>
                <p>3. It needs usually users login details.</p>
                <p>4. Example: Employees in a company are required to authenticate through the network before accessing their company email</p>
                </div>
                <div>
                    <h4>Authorization:</h4>
                    <p>1. While in this process, users or persons are validated.</p>
                    <p>2. While this process is done after the authentication process.</p>
                    <p>3. While it needs user’s privilege or security levels.</p>
                    <p>4. Example: After an employee successfully authenticates, the system determines what information the employees are allowed to access</p>
                </div>
                </div>
            </div>

            <div className='ques mt-3'>
                <h2>Q-2: Why are you using firebase? What other options do you have to implement authentication?</h2>
                <div>
                    <h5>Five major reasons we use Firebase.</h5>
                    <p>1. Analytics: <br />Firebase Analytics is a product that I think every scale, type, kind of developer must use. <br />2. Remote config: <br />Firebase Remote Config lets you do the A/B testing, provide a personalized experience and much more, totally depends on how you use it. <br />3. Database: <br />Firebase Database is something we can call super amazing! It provides two types of database to you. <br />4. Cloud Messaging: <br />Firebase Cloud Messaging is also a convenient and useful product; its basic functionality is implemented as soon as you put its dependency on Android Studio. <br />5. Authentication: <br />Firebase Authentication can help you to implement the feature that a newbie can dream of, like doing email/SMS verification, letting users sign in/sign up.</p>
                </div>
            </div>

            <div className='ques mt-3 mb-4'>
                <h2>Q-3: What other services does firebase provide other than authentication?</h2>
                <div>
                    <h4>There are many services which Firebase provides, Most useful of them are:</h4>
                    <p>1.Cloud Firestore. <br />2.Cloud Functions. <br />3.Authentication. <br />4.Hosting. <br />5.Cloud Storage. <br />6.Google Analytics. <br />7.Predictions. <br />8.Cloud Messaging.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;