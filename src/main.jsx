import React from 'react';
import ReactDOM from 'react-dom/client';
import { elementorCommon } from './elementorCommon.js';

window.elementorCommon = elementorCommon;

window.ElementorAiConfig = {
	url_to_container_url: 'http://localhost:3000',
};

import LayoutApp from './../../elementor-editor-env/plugins/elementor/modules/ai/assets/js/editor/layout-app.js';

ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
	<React.Fragment>
		<div style={{
			margin: '50px',
			padding: '50px',
			position: 'absolute',
		}}>
			<LayoutApp
				attachmentsTypes={{
					json: {
						promptSuggestions: [
							{ text: '[JSON] Create a layout for a blog post' },
							{ text: '[JSON] Create a layout for a product page' },
							{ text: '[JSON] Create a layout for a contact page' },
						],
					},
					url: {
						promptSuggestions: [
							{ text: '[URL] Create a layout for a blog post' },
							{ text: '[URL] Create a layout for a product page' },
							{ text: '[URL] Create a layout for a contact page' },
						],

					},
				}}
				attachments={[{
						type: 'url',
						previewHTML: ``,
						content: '{}',
						label: 'domain.com',
					}]}
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
