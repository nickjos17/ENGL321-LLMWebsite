import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { WaterEnergy } from './pages/water-energy/water-energy';
import { Solutions } from './pages/solutions/solutions';
import { AirNoise } from './pages/air-noise/air-noise';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'water-energy', component: WaterEnergy },
  { path: 'air-noise', component: AirNoise},
  { path: 'solutions', component: Solutions },
  { path: '**', redirectTo: '' }
];