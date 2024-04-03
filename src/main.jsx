import React from 'react';
import ReactDOM from 'react-dom/client';
import { elementorCommon } from './elementorCommon.js';
import { JSON1, SCREENSHOT_DARK_1, SCREENSHOT_LIGHT_1, URL1, URL2 } from './mock';

window.elementorCommon = elementorCommon;
window.elementor = {
	config: {
		version: '3.21.2',
		user: {
			is_administrator: true,
		},
	}
}
window.elementorAppConfig = {
	'kit-library': {
		access_level: 0,
		access_tier: 'free',
		is_pro: false,
	},
};

import LayoutApp from '../../elementor-core/modules/ai/assets/js/editor/layout-app.js';
import { DirectionProvider, ThemeProvider } from '@elementor/ui';

ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
	<React.Fragment>
		<div style={{
			margin: '50px',
			padding: '50px',
			position: 'absolute',
		}}>
			<DirectionProvider rtl={false}>
				<ThemeProvider colorScheme="auto">
					<LayoutApp
						mode="layout"
						editorSessionId={`editor-session-${Math.random()}`}
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
						attachments={[
							// { ...URL1 },
							// { ...URL2 },
							// { ...JSON1 },
						]}
						onData={() => {
							console.log( 'onData' );
							return SCREENSHOT_LIGHT_1;
							// return SCREENSHOT_DARK_1;
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
						onClose={() => {
							console.log( 'onClose' );
						}}
					/>
				</ThemeProvider>
			</DirectionProvider>
		</div>
	</React.Fragment>,
);
