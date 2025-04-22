import React, { Suspense, use } from 'react'
import { useState,useRef } from 'react';
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber';
import  Fox  from '../components/models/Fox';
import Loader from '../components/Loader';
import  useAlert  from '../hooks/useAlert';
import Alert from '../components/Alert';

const Contact = () => {
  const formRef = useRef(null);
  const [form,setForm] = useState({name:'',email:'',message:''});
  const [isloading,setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('idle');
  const{alert,showAlert,hideAlert} = useAlert();

  const handleChange = (e) => {
    setForm({...form,[e.target.name]:e.target.value});
  }
  const handleFocus = (e) =>setCurrentAnimation('walk');
  const handleBlur = (e) => setCurrentAnimation('idle');


  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('hit');
    // Handle form submission logic here
    //console.log('Form submitted:', form);



    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'Shahil Yadav',
        from_email: form.email,
        to_email: 'shahilyadavy1998@gmail.com',
        message: form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY

    ).then(()=>{
      setIsLoading(false);
      showAlert({show:true,text:'Email sent successfully!',type:'success'});




      setTimeout (() =>{
        hideAlert();
        setCurrentAnimation('idle');
        setForm({name:'',email:'',message:''});
      },3000);


    }).catch((error)=>{
      console.log('Error sending email:', error);
      setIsLoading(false);
      setCurrentAnimation('idle');
      showAlert({show:true,text:'Your message are received .',type:'danger'});

    })
  }
  return (
    <section>
      <div className='flex flex-col justify-center items-center h-screen'>
      {alert.show && <Alert {...alert} />}

        <h1 className='text-3xl font-bold'>Get In Touch</h1>
        <p className='mt-4 text-lg'>We would love to hear from you!</p>
        <form className='mt-8 w-full max-w-md'
        onSubmit = {handleSubmit}>
          <input type="text" name="name" placeholder="Your Name"  required value = {form.name} onChange ={handleChange} onFocus={handleFocus}
          onBlur = {handleBlur}
          
          
          className='w-full p-2 border border-gray-300 rounded mb-4'/>



          <input type="email" name="email" placeholder="shahilyadavy1998@gmail.com"  required value = {form.email} onChange = {handleChange} onFocus= {handleFocus}className='w-full p-2 border border-gray-300 rounded mb-4'/>

          <textarea  name ="message"placeholder="Let me know how can I help you!" rows={4} required value = {form.message} onChange ={handleChange}  onFocus={handleFocus}className='w-full p-2 border border-gray-300 rounded mb-4'>

          </textarea>


          <button type="submit" 

          onFocus= {handleFocus} 
          onBlur = {handleBlur}
          disabled={isloading}
          className='bg-blue-500 text-white py-2 px-4 rounded'>
            {isloading ? 'Sending..' : 'Send Message'}</button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px">

      <Canvas
       camera = {{
        position: [0, 0, 5],
        fov: 50,
        near: 0.1,
        far: 1000,
       }}>

        <directionalLight position={[0, 0, 1]} intensity={2.5} />
        <ambientLight intensity={0.5} />
        <Suspense fallback={<Loader/>}>
          <Fox 
          currentAnimation={currentAnimation}
          position = {[0.5,0.35,0]}
          rotation = {[12.6,-0.6,0]}
          scale = {[0.5,0.5,0.5]}/>



          </Suspense>


       </Canvas>




      </div>
    </section>
    
  )
}

export default Contact
