const Link = ({ href, target, className, children }: any) => {
  return (
    <div>
      <a href={href} target={target} className={className}>
        {children}
      </a>
    </div>
  );
};

export default Link;
