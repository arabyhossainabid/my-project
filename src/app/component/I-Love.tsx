const LoveMessage = () => {
    const message = "";
  
    return (
      <div>
        {[...Array(300)].map((_, index) => (
          <p key={index}>{`${index + 1}. ${message}`}</p>
        ))}
      </div>
    );
  };
  
  export default LoveMessage;
  