var app = angular.module('resume', [])
    .controller('personCtrl', function ($scope) {
    $scope.personInfo = {
        img: 'https://media.licdn.com/dms/image/C5603AQGGwx8Kl4tfpg/profile-displayphoto-shrink_200_200/0?e=1545868800&v=beta&t=_R405XgW3cJd-MJb4BE95dT7YRMYPMuWjydWz5IbH6U',
        name: 'Jackie Rubly',
        description: 'front end web developer',
        email: {
            text: 'jackierubly@gmail.com',
            url: 'mailto:jackierubly@gmail.com'
        },
        social: [{
                url: 'https://github.com/jackierubly',
                icon: 'fa-github fa-lg'
            }, {
                url: 'https://www.linkedin.com/in/jackierubly',
                icon: 'fa-linkedin fa-lg'
            }, {
                url: 'https://twitter.com/',
                icon: 'fa-twitter fa-lg'
            }]
    };
})
    .controller('educationCtrl', function ($scope) {
    $scope.schools = [{
            name: 'Green River College',
            program: 'Information Technology',
            city: 'Auburn',
            state: 'Washington',
            stateAbbr: 'WA',
            dates: '1/2017 - Present'
        }, {
            name: 'FreeCodeCamp.org',
            program: 'Full Stack Web Development',
            city: 'Telecommute',
            state: 'Washington',
            stateAbbr: 'WA',
            dates: '2018 - Present'
        },];
})
    .controller('languagesCtrl', function ($scope) {
    $scope.languages = [{
            name: 'HTML',
            types: [
                'Slim',
                'Jade',
                'Haml'
            ]
        }, {
            name: 'CSS',
            types: [
                'SCSS',
                'LESS',
                'Bootstrap',
                'Foundation'
            ]
        }, {
            name: 'JavaScript',
            types: [
                'ES2015',
                'React',
                'jQuery',
                'GSAP'
            ]
        }, {
            name: 'Ruby',
            types: [
                'Rails',
                'ERB'
            ]
        }];
})
    .controller('toolsCtrl', function ($scope) {
    $scope.tools = [{
            name: 'Source Control',
            types: [
                'Git',
                'Github',
                'SVN'
            ]
        }, {
            name: 'Tasks',
            types: [
                'Webpack',
                'JSPM',
                'Gulp',
                'Yeoman',
                'Bower'
            ]
        }, {
            name: 'Graphic Tools',
            types: [
                'Sketch',
                'Adobe Photoshop',
                'Adobe Fireworks'
            ]
        }, {
            name: 'Deployment',
            types: [
                'Heroku',
                'Beanstalk',
                'AWS',
                'Lightsail'
            ]
        }, {
            name: 'CMS/Templating',
            types: [
                'WordPress',
                'Handlebars'
            ]
        }];
})
    .controller('organizationCtrl', function ($scope) {
    $scope.organizations = [
        {
            name: 'Diono',
            url: 'http://www.diono.com',
            positions: [{
                    title: 'Front End Developer',
                    responsibilities: [
                        'Contribute to the public site and client-facing site',
                        'Use HTML, SCSS, JavaScript and JSP to enhance the design and user experience',
                        'Collaborate with team members on UI/UX ideas for existing and new products',
                        'Participate in Agile methodologies',
                        'Version control with SVN and Git'
                    ]
                }],
            dates: 'January 2018 - July 2018'
        },
        {
            name: '506 Studios',
            url: 'http://506studios.com/',
            positions: [{
                    title: 'Contract Front End Developer',
                    responsibilities: [
                        'Build and contribute to hand-coded  websites and applications',
                        'Write semantic HTML5 and SCSS for scalable and responsive layouts',
                        'Use MVC frameworks such as React and Rails',
                        'Manage tasks with Grunt, Gulp and Webpack',
                        'Version control with Git'
                    ]
                }],
            dates: 'February 2016 - September 2018'
        },
    ];
})
    .controller('campsCtrl', function ($scope) {
    $scope.camps = [
        {
            name: '506 Studios UI',
            url: 'https://github.com/',
            dates: 'Fall 2016',
            description: 'Designed the front-end for Unity3D powered games for babies & children.'
        },
    ];
});