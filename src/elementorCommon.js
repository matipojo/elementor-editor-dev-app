export const elementorCommon = {
    ajax: {
        addRequest: ( endpoint, options ) => {
            switch (endpoint) {
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
