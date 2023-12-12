const InfiniteVerticalSlider = ({ tech, speed = 16000 }) => {
  console.log(tech);
    return (
      <div className="inner">
        <div className="wrapper">
          <section style={{ "--speed": `${speed}ms` }} className="secc">
            {tech.map(({ id, tech }) => (
              <div className="tech" key={id}>
               <span>{tech}</span>
              </div>
            ))}
          </section>
          <section style={{ "--speed": `${speed}ms` }} className="secc">
            {tech.map(({ id, tech }) => (
              <div className="tech" key={id}>
                <span>{tech}</span>
              </div>
            ))}
          </section>
          <section style={{ "--speed": `${speed}ms` }} className="secc">
            {tech.map(({ id, tech }) => (
              <div className="tech" key={id}>
                <span className="whitespace-nowrap">{tech}</span>
              </div>
            ))}
          </section>
        </div>
      </div>
    );
  };
  
  export { InfiniteVerticalSlider };