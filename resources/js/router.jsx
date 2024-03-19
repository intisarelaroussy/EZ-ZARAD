
import { createBrowserRouter} from 'react-router-dom';
import DefaultLayout from './page/DefaultLayout';
import GuestLayout from './page/GuestLayout';
import Fournisseurs from './components/fournisseurs/Fournisseurs';
import EditF from './components/fournisseurs/EditF';
import CreateF from './components/fournisseurs/CreateF';
import Login from './components/Marche/Login';
import NotFound from './components/Marche/NotFound';
import Marche from './components/Marche/Marché';
import Create from './components/Marche/Create';
import Edit from './components/Marche/Edit';
import Livraisons from './components/Livraison/CreateL';


const router = createBrowserRouter([
    {
        element :<DefaultLayout />,
        children: [
            {
                path: '/Creat',
                element :<Create />
            },
            {
                path: '/',
                element :<Marche/>
            },
            {
                path: '/Edit/:MarchéId',
                element :<Edit />
            },
            ,
            {
                path: '/CreatF',
                element :<CreateF />
            },

            {
                path: '/Fournisseurs',
                element :<Fournisseurs />
            },
            ,
            {
                path: '/EditF/:FournisseurId',
                element :<EditF />
            },
            {
                path: '/Edit/:MarchéId/CreateL',
                element :<Livraisons />
            }



        ]
    },
    {
        element :<GuestLayout />,
        children : [
            {
                path: '/Login',
                element :<Login />
            },
            {
                path:'*',
                element :<NotFound />
            }
        ]
    }


])


export default router;
