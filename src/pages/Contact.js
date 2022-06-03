import {useState} from "react";

function Contact(){
  const handleForm = (event) => {
    alert('Message Sent')
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return(
    <div className="bg-stone-200 h-screen page-body">
      <h1 className="text-2xl font-bold">Contact Us</h1>
      <form className="mt-8 flex flex-col gap-y-4" onSubmit={handleForm}>
        <label className="inline-block">
          Name
          <input 
            type="text" 
            className="border-solid border rounded-md ml-2 px-1 focus:outline-none"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
        </label>
        <label className="inline-block">
          Email
          <input 
            type="email" 
            className="border-solid border rounded-md ml-2 px-1 focus:outline-none"
            placeholder="Enter email"
            value={email}            
            onChange={(e) => setEmail(e.target.value)}
            />
        </label>
        <label className="flex flex-row align-top">
          Message:
          <textarea 
            type="text" 
            className="border-solid border rounded-md ml-2 px-1 focus:outline-none"
            placeholder="Enter name"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            >
            </textarea>
        </label>  
        <button 
          type="submit"
          className="bg-stone-400 w-fit px-2 rounded-sm uppercase font-medium"
        >Send</button>
      </form>

      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Message: {message}</p>

    </div>
  );
}

export default Contact;