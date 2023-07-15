import React from 'react';
import AppCard from './AppCard';
import 'bootstrap/dist/css/bootstrap.css';
import { useTrail, animated,useSpring } from "react-spring";
import App2 from './Header';
import "./css/Dashboard.css";
const Dashboard = () => {
  
  const apps = [
    {
      name: 'DWG',
      description: 'Descripción de la aplicación 1',
      url: 'http://dwg.azteca-comunicaciones.com/index.jsp?option=net.comtor.gui.admin.DiagnosticNE',
      tipo:'2'
    },
    {
      name: 'SAR',
      description: 'Descripción de la aplicación 2',
      url: 'https://sar.azteca-comunicaciones.com:8144/Login',
    },
    {
      name: 'Plan de Mejoramiento',
      description: 'Descripción de la aplicación 3 ',
      url: 'http://192.168.2.34/plan_mejoramiento/users/login',

    },
    // Agrega más aplicaciones según sea necesario
    {
      name: 'Suricato',
      description: 'Descripción de la aplicación 4 ',
      url: 'http://192.168.2.31/suricato/users/login',
      tipo:'1'
    },
    {
        name: 'Orion',
        description: 'Descripción de la aplicación 4 ',
        url: 'http://192.168.2.10:8787/Orion/Login.aspx?ReturnUrl=%2fOrion%2fSummaryView.aspx%3fViewID%3d651&ViewID=651',
        tipo:'1'
      },
      {
        name: 'Cacti',
        description: 'Descripción de la aplicación 4 ',
        url: 'http://192.168.2.31/cacti/',
        tipo:'1'
      },
      { 
        name: 'Cyberark',
        description: 'Descripción de la aplicación 4 ',
        url: 'https://cyberacc.aztecom.corp/PasswordVault/auth/ldap',
      },
      { 
        name: 'Grafana',
        description: 'Descripción de la aplicación 4 ',
        url: 'http://10.144.2.160:3000/zabbix/zabbix.php?action=dashboard.view',
        tipo:'1'
      },
      { 
        name: 'Potencias Ericsson',
        description: 'Descripción de la aplicación 4 ',
        url: 'http://192.168.2.31/potencias-opticas/?m=potencias_tabla&ip_spo=',
        tipo:'1'
      },
      { 
        name: 'Node Map',
        description: 'Descripción de la aplicación 4 ',
        url: 'http://192.168.2.31/node-map/users/login',
        tipo:'2'
      },
      { 
        name: "Zabbix",
        description: 'Descripción de la aplicación 4 ',
        url: 'http://10.144.2.160/zabbix/index.php?request=zabbix.php%3Faction%3Ddashboard.view',
        tipo:'1'
      },
      { 
        name: "Dataminer_TP",
        description: 'Descripción de la aplicación 4 ',
        url: 'http://10.217.226.152/root/login',
        tipo:'3'
      },
      { 
        name: "Dataminer_skyline",
        description: 'Descripción de la aplicación 4 ',
        url: 'http://10.217.226.152/root/login',
      },
      { 
        name: "Service Desk manager_TP",
        description: 'Descripción de la aplicación 4 ',
        url: 'http://sdm.prod.totalplay.com.mx/CAisd/pdmweb4.exe',
      },
      { 
        name: "Sonda Sentry 1",
        description: 'Descripción de la aplicación 4 ',
        url: '  http://10.231.1.172/',
      },
      { 
        name: "Sonda Sentry 2",
        description: 'Descripción de la aplicación 4 ',
        url: '  http://10.231.1.173/',
      },
      { 
        name: "Sonda Sentry Verify",
        description: 'Descripción de la aplicación 4 ',
        url: '  http://10.231.6.7/?page=&_z=0&',
      },
      { 
        name: "Sondas 3Play",
        description: 'Descripción de la aplicación 4 ',
        url: '  http://10.231.1.253:8080',
      },
      { 
        name: "Monitoring_TP",
        description: 'Descripción de la aplicación 4 ',
        url: 'http://10.217.226.152',
      },
      { 
        name: "GLPI",
        description: 'Descripción de la aplicación 4 ',
        url: 'https://servicedesk.azteca-comunicaciones.com/glpi/',
      },
      { 
        name: "American Towers",
        description: ' ',
        url: 'http://webacesso.americantower.com.co/login/login.aspx',
        tipo:'3'
      },
      { 
        name: "NCE_TP",
        description: ' ',
        url: ' https://10.231.1.252:31943/unisso/login.action?service=%2Funisess%2Fv1%2Fauth%3Fservice%3D%252Fncecommonwebsite%252Fv1%252Fnewportal%252Fportal%252Floading%252Floading.html&decision=1',
        tipo:'3'
      },
      
      
  ];
  
  const Herramientas = apps.filter(app => app.tipo === '1');
  const Gestores = apps.filter(app => app.tipo === '2');
  const Herramientas_TP = apps.filter(app => app.tipo === '3');
  const trail1 = useTrail(Herramientas.length, {
    from: { opacity: 0, transform: 'translate3d(0, 20px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    config: { mass: 1, tension: 500, friction: 40 }
  });
  const trail2 = useTrail(Gestores.length, {
    from: { opacity: 0, transform: 'translate3d(0, 20px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    config: { mass: 1, tension: 500, friction: 40 }
  });
  const trail3 = useTrail(Herramientas_TP.length, {
    from: { opacity: 0, transform: 'translate3d(0, 20px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    config: { mass: 1, tension: 500, friction: 40 }
  });
  return (
    
    <div>
        <div class="card-header">
        <App2 />
    </div>
   
   
   
    <div className="card-container">
    <div className='contenedor'>
    <h1>Herramientas de monitoreo</h1>
      <div className='herramientas'>
      {trail1.map((animation, index) => (
        
        <animated.a
          key={index}
          href={Herramientas[index].url}
          target="_blank"
          rel="noopener noreferrer"
          style={animation}
          className="card"
        
          
        >
              
              <h1>{Herramientas[index].name}</h1>
              <p>{Herramientas[index].description}</p>
              
              
          
        </animated.a>
      ))}
   
      </div>
      <h1>Gestores</h1>
      <div className='Gestores'>
      {trail2.map((animation, index) => (
        
        <animated.a
          key={index}
          href={Gestores[index].url}
          target="_blank"
          rel="noopener noreferrer"
          style={animation}
          className="card"
        
          
        >
              
              <h1>{Gestores[index].name}</h1>
              <p>{Gestores[index].description}</p>
              
              
          
        </animated.a>
      ))}
      </div>
      <h1>Herramientas de Gestion TP</h1>

    <div className='dashboard'>
    {trail3.map((animation, index) => (
        
        <animated.a
          key={index}
          href={Herramientas_TP[index].url}
          target="_blank"
          rel="noopener noreferrer"
          style={animation}
          className="card"
        
          
        >
              
              <h1>{Herramientas_TP[index].name}</h1>
              <p>{Herramientas_TP[index].description}</p>
              
              
          
        </animated.a>
      ))}
    </div>
    </div>
    </div>
    </div>
  );    
};

export default Dashboard;