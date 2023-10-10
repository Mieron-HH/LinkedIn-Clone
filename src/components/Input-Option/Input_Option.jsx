import "./_input_option.scss";

const InputOption = ({ Icon, title, color, size }) => {
	return (
		<div className="inputOption__component">
			{Icon && <Icon style={{ color }} size={size && size} />}
			<h4>{title}</h4>
		</div>
	);
};

export default InputOption;
