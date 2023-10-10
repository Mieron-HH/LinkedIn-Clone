import "./_widgets.scss";

// ICONS
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const Widgets = () => {
	const newsArticle = (heading, subtitle) => (
		<div className="widgets__article">
			<div className="widgetsArticle__left">
				<FiberManualRecordIcon className="icon" />
			</div>

			<div className="widgetsArticle__right">
				<h4>{heading}</h4>
				<p>{subtitle}</p>
			</div>
		</div>
	);

	return (
		<div className="widgets__component">
			<div className="widgets__header">
				<h2>LinkedIn News</h2>

				<InfoIcon className="icon" />
			</div>

			{newsArticle(
				"Why workers take on a no-win job",
				"Top news - 1,987 readers"
			)}

			{newsArticle(
				"Airports: the new coworking space",
				"7h ago - 1,197 readers"
			)}

			{newsArticle("New office for remote workers", "7h ago - 885 readers")}

			{newsArticle(
				"US job growth blows past forecasts",
				"7h ago - 20,172 readres"
			)}

			{newsArticle("UAW won't expand strikes", "7h ago - 2,471 readers")}
		</div>
	);
};

export default Widgets;
