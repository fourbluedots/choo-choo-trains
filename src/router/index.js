import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Events from '@/components/events/Events';
import Event from '@/components/events/Event';
import CreateEvent from '@/components/events/CreateEvent';
import Museums from '@/components/museums/Museums';
import Trains from '@/components/trains/Trains';
import Profile from '@/components/user/Profile';
import SignIn from '@/components/user/SignIn';
import SignUp from '@/components/user/SignUp';

Vue.use(Router);

export default new Router({
  routes: [

    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/events',
      name: 'Events',
      component: Events,
    },
    {
      path: '/events/:id',
      name: 'event',
      component: Event,
    },
    {
      path: '/events/new',
      name: 'CreateEvent',
      component: CreateEvent,
    },
    {
      path: '/museums',
      name: 'Museums',
      component: Museums,
    },
    {
      path: '/trains',
      name: 'Trains',
      component: Trains,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp,
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn,
    },
  ],
  mode: 'history',
});
