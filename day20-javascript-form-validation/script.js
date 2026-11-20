function Validate() 
{
    var uname=document.getElementById("uname").value;
    var pwd=document.getElementById("pwd").value;

    if(uname=="" ||uname==null)
    {
        alert("username cannot be blank");
        return false;
    }
    if(pwd.length<8)
    {
          alert("pwd must be atleast 8 characters ");
          return false;
    }
    return true;
}