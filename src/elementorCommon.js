export const elementorCommon = {
	ajax: {
		addRequest: ( endpoint, options ) => {
			switch (endpoint) {
				case 'ai_generate_layout':
					return options.success( {
						'all': [],
						'text': 'This is a test',
						'response_id': '55bf304e-bc88-4097-830a-e07e38c1b860',
						'usage': 50000,
						'base_template_id': '30403',
						'template_type': 'Pro',
					} );
				case 'ai_get_remote_config':
					return options.success( {
						config: {
							webBasedBuilderUrl: 'http://localhost:3000/choose-element',
							jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxMjYyNDI1Nn0sIndlYnNpdGUiOnsidXJsIjoiaHR0cDovL2xvY2FsaG9zdDo4ODg4LyJ9LCJzdWJzY3JpcHRpb24iOnt9LCJpYXQiOjE3MDUzMTg2NTgsImV4cCI6MTcwNTMyMjI1OH0.z6kr-lxm0-gN5dyk8vkGrE5n7Py6N5ctvO0lU-PAvE8',
						},
					} );
				case 'ai_get_user_information':
					return options.success( {
						'is_connected': true,
						'is_get_started': true,
						'usage': {
							'hasAiSubscription': false,
							'usedQuota': 440,
							'quota': 660,
						},
					} );
			}
		},
	},
};
