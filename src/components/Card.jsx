function Card({children}){
  const card_style={
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '20px',
    margin: '10px 0',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
  };
  return (
    <div style={card_style}>
      {children}
    </div>
  );
}
export default Card;