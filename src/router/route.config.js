//一级路由
import Home from '../views/Home';
//故事详情
import Storydetails from '../views/Storydetails';
//宝宝看儿歌详情
import SongsItemdetail from '.././views/SongsItemdetail'
//动画片详情
import Cartoondetails from '../views/Cartoondetails';
//宝宝听详情
import Listenbabydetails from '../views/Listenbabydetails';

//二级路由
import Babylook from '../views/Home/Babylook';
import Listenbaby from '../views/Home/Listenbaby';
import My from '../views/Home/My';

// Babylook 三级路由
import Songs from '../views/Home/Babylook/Songs';
import Story from '../views/Home/Babylook/Story';
import Cartoon from '../views/Home/Babylook/Cartoon';
// Listenbaby 三级路由
import Listensongs from '../views/Home/Listenbaby/Listensongs';
import Listenstory from '../views/Home/Listenbaby/Listenstory';

const route = [{
        path: "/listenbabydetails",
        component: Listenbabydetails
    },
    {
        path: "/cartoondetails",
        component: Cartoondetails
    },
    {
        path: "/storydetails",
        component: Storydetails
    },
    {
        path: "/songsitemdetail",
        component: SongsItemdetail
    },
    {
        path: "/",
        component: Home,
        children: [{
                path: "/babylook",
                component: Babylook,
                children: [{
                        path: "/babylook/songs",
                        component: Songs
                    },
                    {
                        path: "/babylook/story",
                        component: Story
                    },
                    {
                        path: "/babylook/cartoon",
                        component: Cartoon
                    },
                    {
                        from: "/babylook",
                        to: "/babylook/songs"
                    }
                ]
            },
            {
                path: "/listenbaby",
                component: Listenbaby,
                children: [{
                        path: "/listenbaby/listensongs",
                        component: Listensongs
                    },
                    {
                        path: "/listenbaby/listenstory",
                        component: Listenstory
                    },
                    {
                        from: "/listenbaby",
                        to: "/listenbaby/listensongs"
                    }
                ]
            },
            {
                path: "/my",
                component: My
            },
            {
                from: "/",
                to: '/babylook'
            }
        ]
    }
]

export default route