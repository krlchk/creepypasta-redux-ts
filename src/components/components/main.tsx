import {
  AllStoriesComponent,
  StatisticsComponent,
  TagsComponent,
} from "./components";
import {  Routes, Route } from "react-router";
import { StoryPage } from "./components/components";
import { TagPage } from "./components/components/tag-page";
import { FavStories } from "./components/components/fav-stories";

export const Main = () => {
  return (
    <Routes>
      <Route path="/allstories" element={<AllStoriesComponent />} />
      <Route path="/tags" element={<TagsComponent />} />
      <Route path="/statistic" element={<StatisticsComponent />} />
      <Route path="/allstories/story/:id" element={<StoryPage />} />
      <Route path="/tags/:id" element={<TagPage/>}/>
      <Route path="/favStories" element={<FavStories/>}/>
    </Routes>
  );
};
