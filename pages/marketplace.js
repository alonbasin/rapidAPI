module.exports = {
    url: 'http://rapidapi.com',
    elements: {

    },
    sections: {
        searchSection: {
            selector: '.search-form',
            elements: {
                searchSectionTitle: {
                    selector: 'span:contains("Find and Connect to the World’s Top APIs")'
                },
                videoButton: {
                    selector: '.video-button'
                },
                searchIcon: {
                    selector: '.circle-input'
                },
                searchField: {
                    selector: '#search-text'
                }
            }
        },
        categoriesSection: {
            selector: '.side-menu',
            elements: {
                categoriesSectionTitle: {
                    selector: 'h3:contains("Categories")'
                },
                categoriesList: {
                    selector: 'ul'
                }
            }
        },
        recommendedSection: {
            selector: '.right-column',
            elements: {

            }
        },
        mostUsedSection: {
            selector: '.most-used-apis',
            elements: {
                mostUsedSectionTitle: {
                    selector: '.title'
                }
            }
        },
        videoSection: {
            selector: '.welcome-video',
            elements: {
                closeButton: {
                    selector: '.close-video'
                },
                videoContainer: {
                    selector: '.video-container'
                },
                videoFrame: {
                    selector: 'iframe'
                }
            }
        }
    }
};