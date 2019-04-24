import gamingHeadsets from './gaming-headsets.svg';
import earpieces from './earpieces.svg';
import microphone from './microphone.svg';
import accessories from './accessories.svg';

import alloyCoreRGB from './alloy-core-rgb.svg';
import alloyEliteRGB from './alloy-elite-rgb.svg';

import savageDDR3 from './savage-ddr3.svg';
import predatorDDR4 from './predator-ddr4.svg';

import pulsefireCore from './pulsefire-core.svg';
import pulsefireSurge from './pulsefire-surge.svg';

import chargeplayDuo from './chargeplay-duo.svg';
import chargeplayQuad from './chargeplay-quad.svg';

import furyRGB from './fury-rgb.svg';
import savageExo from './savage-exo.svg';

import Audio from './Audio.jpg';
import Earpieces from './Earpieces.jpg';
import Microphone from './Microphone.jpg';
import FuryS from './FuryS.jpg';
import AlloyCoreRGB from './AlloyCoreRGB.jpg';
import AlloyEliteRGB from './AlloyEliteRGB.jpg'
import PredatorDDR4 from './PredatorDDR4.jpg';
import SavageDDR3 from './SavageDDR3.jpg';
import PulsefireSurge from './PulsefireSurge.jpg';
import PulsefireCore from './PulsefireCore.jpg';
import ChargePlayDuo from './ChargePlayDuo.jpg';
import ChargePlayQuad from './ChargePlayQuad.jpg';
import FuryRGB from './FuryRGB.jpg';
import SavageEXO from './SavageEXO.jpg';

export const productImages = {
	gamingHeadsets: {img: gamingHeadsets, title: 'Cloud MIX', id: 0, quantity: 5, price: 1000},
	earpieces: {img: earpieces, title: 'Cloud Earbuds', id: 1, quantity: 2, price: 500},
	microphone: {img: microphone, title: 'QuadCast', id: 2, quantity: 0, price: 3500},
	accessories: {img: accessories, title: 'Fury S', id: 3, quantity: 4, price: 200},
	alloyCoreRGB: {img: alloyCoreRGB, title: 'Alloy Core RGB', id: 4, quantity: 1, price: 1750},
	alloyEliteRGB: {img: alloyEliteRGB, title: 'Alloy Elite RGB', id: 5, quantity: 6, price: 2000},
	savageDDR3: {img: savageDDR3, title: 'Predator', id: 6, quantity: 1, price: 1300},
	predatorDDR4: {img: predatorDDR4, title: 'Savage', id: 7, quantity: 0, price: 800},
	pulsefireCore: {img: pulsefireCore, title: 'Pulsefire Surge', id: 8, quantity: 10, price: 1200},
	pulsefireSurge: {img: pulsefireSurge, title: 'Pulsefire Core', id: 9, quantity: 3, price: 600},
	chargeplayDuo: {img: chargeplayDuo, title: 'ChargePlay Duo', id: 10, quantity: 8, price: 400},
	chargeplayQuad: {img: chargeplayQuad, title: 'ChargePlay Quad', id: 11, quantity: 2, price: 750},
	furyRGB: {img: furyRGB, title: 'Fury RGB', id: 12, quantity: 0, price: 850},
	savageExo: {img: savageExo, title: 'Savage EXO', id: 13, quantity: 9, price: 1125}
}

export const designImages = {
	audio: [{img: Audio, id: 0}, {img: Earpieces, id: 1}, {img: Microphone, id: 2}, {img: FuryS, id: 3}],
	keyboards: [{img: AlloyCoreRGB, id: 4}, {img: AlloyEliteRGB, id: 5}],
	'memory modules': [{img: PredatorDDR4, id: 6}, {img: SavageDDR3, id: 7}],
	'gaming mouse': [{img: PulsefireSurge, id: 8}, {img: PulsefireCore, id: 9}],
	'charging device': [{img: ChargePlayDuo, id: 10}, {img: ChargePlayQuad, id: 11}],
	'data storage': [{img: FuryRGB, id: 12}, {img: SavageEXO, id: 13}]
}