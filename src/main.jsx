import React from 'react';
import ReactDOM from 'react-dom/client';
import {elementorCommon} from "./elementorCommon.js";
window.elementorCommon = elementorCommon;
import LayoutApp from './../../elementor-editor-env/plugins/elementor/modules/ai/assets/js/editor/layout-app.js';

ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
	<React.Fragment>
		<div style={{
			margin: '50px',
			padding: '50px',
			position: 'absolute',
		}}>
			<LayoutApp
				onData={() => {
					console.log( 'onData' );
				}}
				onConnect={() => {
					console.log( 'onConnect' );
				}}
				onDisconnect={() => {
					console.log( 'onDisconnect' );
				}}
				onGenerate={() => {
					console.log( 'onGenerate' );
				}}
				onInsert={() => {
					console.log( 'onInsert' );
				}}
				onSelect={() => {
					console.log( 'onSelect' );
				}}
				colorScheme="auto"
				onClose={() => {
					console.log( 'onClose' );
				}}
				isRTL={false}
			/>
		</div>
	</React.Fragment>,
);
