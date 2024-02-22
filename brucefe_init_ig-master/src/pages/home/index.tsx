import IGHeader from "components/IGHeader";
import IGContainer from "components/IGContainer";
import IGStory from "./components/IGStory/Index";
import IGPost from "./components/IGPost";
import IGProfile from "./components/IGProfile/Index";
import Loading from "components/Loading";
import { useGetIGPostsQuery } from "services/homeServices";

const IGPostList: React.FC = () => {
  const { data, isLoading } = useGetIGPostsQuery("all");
  return (
    <>
      {isLoading ? (
        <div className="w-full flex justify-center mt-20">
          <Loading />
        </div>
      ) : (
        data?.map((item) => {
          const {
            id,
            location,
            account,
            avatar,
            photo,
            likes,
            description,
            hashTags,
            createTime,
          } = item;
          return (
            <IGPost
              location={location}
              account={account}
              avatar={avatar}
              photo={photo}
              likes={likes}
              description={description}
              hashTags={hashTags}
              createTime={createTime}
              key={id}
            />
          );
        })
      )}
    </>
  );
};

const Home: React.FC = () => {
  return (
    <>
      <IGHeader />
      <IGContainer />
      <div className="flex lg:justify-center">
        {/* left, 大於lg w:600px */}
        <div className="w-full lg:w-[600px]">
          <IGStory />
          <IGPostList />
        </div>
        {/* right 小於lg隱藏,大於lg w:424px */}
        <div className="hidden lg:block lg:w-[424px]">
          <IGProfile />
        </div>
      </div>
    </>
  );
};

export default Home;
