const IcoItemGrid = ({ico}) => {

    const {id, name, symbol} = ico;

    return (
       <div>
            <p>{`${id}, ${name}(${symbol})`}</p>
        </div>
    );
};

export default IcoItemGrid;