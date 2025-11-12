import { useLocation } from "react-router-dom";

function TopicView() {
  const location = useLocation();
  return (
    <div>
      <h2>Aihe {location.pathname} 🎉</h2>
    </div>
  );
}

export default TopicView;
