type PropsType = {
  text: string;
};

const Password = ({ text }: PropsType) => {
  const handleCopyClick = () => {
    const tempInput = document.createElement('input');
    document.body.appendChild(tempInput);
    tempInput.value = text;
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
  };

  return (
    <div className="w-[343px] h-[50px] border-2 border-black flex items-center justify-around wrap">
      <h1 className="pass w-[280px]">{text}</h1>
      <div className="cursor-pointer" onClick={handleCopyClick}>
        <img src="public\Shape (1).png" alt="" />
      </div>
    </div>
  );
};

export default Password;
