import { createStackNavigator } from "react-navigation";
import Trending from '../views/mainScreen/Trending/Trending';
import Bookmark from '../views/mainScreen/Bookmark/Bookmark';
import Entertainment from '../views/mainScreen/Entertainment/Entertainment';
import FooterComponent from '../inc/footer/FooterComponent';


export default MainStack = createStackNavigator({
    Trending: {
        screen: Trending,
    },
    Bookmark:{
      screen:Bookmark,
    },
    Entertainment:{
        screen:Entertainment
    }
  }, {
    initialRouteName: 'Trending',
  }
  );
